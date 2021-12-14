const express = require('express');
const hbs = require('express-handlebars');
const methodOverride = require('method-override');

const { todoRouter } = require('./routers/todo');
const { homeRouter } = require('./routers/home');
const { handleError } = require('./utils/errors');

const app = express();

const port = process.env.PORT || 3000;

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
app.use('/todo', todoRouter);

app.use(handleError);

app.listen(port, () => console.log(`Server started..`));
