/* eslint-disable no-underscore-dangle */
const { v4: uuid } = require('uuid');
const { pool } = require('../utils/db');
const { ValidationError, NotFoundError } = require('../utils/errors');

class TodoRecord {
  constructor(obj) {
    const { id, title } = obj;
    this.id = id;
    this.title = title;
    
    this._validate();
  }

  _validate() {
    if (this.title.trim().length < 5) {
      throw new ValidationError('Todo title must be at least 5 characters');
    }

    if (this.title.length > 150) {
      throw new ValidationError('Todo title must be at most 150 characters');
    }
  }

  async insert() {
    this._validate();

    // this.id = this.id ?? uuid();
    if (typeof this.id === 'undefined') {
      this.id = uuid();
    }

    await pool.execute(
      'INSERT INTO `todos`(`id`,`title`) VALUES(:id, :title);',
      {
        id: this.id,
        title: this.title,
      }
    );
    return this.id;
  }

  async update() {
    if (!this.id) {
      throw new NotFoundError();
    }

    this._validate();

    await pool.execute(
      'UPDATE `todos` SET `title` = :title WHERE `id` = :id;',
      {
        id: this.id,
        title: this.title,
      }
    );

    return this.id;
  }

  async delete() {
    if (!this.id) {
      throw new NotFoundError();
    }

    await pool.execute('DELETE FROM `todos` WHERE `id` = :id;', {
      id: this.id,
    });
  }

  static async find(id) {
    const [results] = await pool.execute(
      'SELECT * FROM `todos` WHERE `id` = :id',
      {
        id,
      }
    );
    return results.length === 1 ? new TodoRecord(results[0]) : null;
  }

  static async findAll() {
    const [results] = await pool.execute(
      'SELECT * FROM `todos` ORDER BY `createdAt`;'
    );
    return results.map(result => new TodoRecord(result));
  }
}

module.exports = {
  TodoRecord,
};
