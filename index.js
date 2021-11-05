const express = require('express');
const hbs = require('express-handlebars');
const methodOverride = require('method-override');

const { clientRouter } = require('./routers/client');
const { homeRouter } = require('./routers/home');

const { db } = require('./utils/db');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(methodOverride('_method'));

app.engine(
  '.hbs',
  hbs({
    extname: '.hbs',
    helpers: {
      lp: index => index + 1,
    },
  })
);
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/client', clientRouter);

app.listen(3000, '0.0.0.0', () =>
  console.log('Server started at http://localhost:3000')
);