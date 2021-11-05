**_ Handlebars _**

> implementacja hbs

```js
const exphbs = require("express-handlebars");

app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    extname: ".hbs",
    layoutsDir: `${__dirname}/views/layouts`,
    partialsDir: `${__dirname}/views/partials`,
  })
);
app.set("view engine", ".hbs");
```

# Wstawianie na strone HTML-u

```hbs
{{{html}}}
```

# Wstawianie na stronę zmienne textowe

```js
res.render(`home`, { firstName: "Maciek", age: 123 });
```

```hbs
{{firstName}} {{age}}
```

# Wstawianie na stronę zmienne textowe z obiektu

```js
res.render(`home`, { person: { name: "Maciek", surname: "Kowalski" } });
```

```hbs
{{person.name}} {{person.surname}}
```

# Wstawianie na stronę zmienne textowe z obiektu po destrukturyzacja

```js
res.render(`home`, { person: { name: "Maciek", surname: "Kowalski" } });
```

```hbs
{{#with person}}
  <h1>{{name}} </h1>
{{/with}}
```

# Wstawianie na stronę zmienne textowe z obiektu w postaci pętli

```js
res.render(`home`, {
  firstName: "Maciek",
  age: 123,
  person: { name: "Maciek", age: 123 },
  dates: [1997, 2008, 2012],
});
```

```hbs
<ul>
  {{#each person.dates}}
    <li>{{this}}</li>
  {{/each}}
</ul>
```

# Wstrzyknięcie html-a

```js
  res.render(`home`, {
    html: '<p>Html p</p>',
  });
});
```

```hbs
{{{html}}}
```

# Dołączanie kawałków kodu

```handlebars
{{> header}}
```

# HELPERY (słowo ELSE) wstawia na zamienna wartość jeśli pierwsza jest pusta

```handlebars
<ul>
  {{#each person.dates}}
    <li>{{this}}</li>
  {{else}}
    <li>Brak Wyników</li>
  {{/each}}
</ul>
```

# Warunki kiedy brak zmiennej brak wyświetlania

```handlebars
{{#if warunek}}
  <h1>wyświetlanie prawdy</h1>
{{/if}}
```

> odwrotna do if (!warunek)

```handlebars
{{#unless warunek}}
  <h1>wyświetlanie gdy nieistnieje</h1>
{{/unless}}
```

```handlebars
{{#if warunek}}
  <h1>wyświetlanie prawdy</h1>
{{else}}
  <h1>wyświetlanie fałsz</h1>
{{/if}}
```

> określenie true/false przenoślimy do render-u

```javascript
res.render(`home`, {
  isNumberBigger: 10 > 5,
});
```

```handlebars
{{#if isNumberBigger}}
  <h1>wyświetlanie prawdy</h1>
{{else}}
  <h1>wyświetlanie fałsz</h1>
{{/if}}
```

# wypisywanie logów

```handlebars
{{log "name" name}}
```

# Pętla val key

```hbs
{{#each tablicaArray as |val key|}}
  {{key}}:{{val}}
{{/each}}
```

# Pętla index

```hbs
{{#each tablicaArray}}
  {{@index}}:{{title}}
{{/each}}
```

# Funkcje Helper

```js
app.engine(
  ".hbs",
  hbs({
    helpers: {
      counter: (index) => index + 1,
    },
  })
);
```

```hbs
{{counter 2}} // 3
```

# Zmienne globalne(w #each , #with) używamy @root.

```hbs
      {{#with cookie}}
      <li>Base: {{base}} - {{find-price @root.bases base}} PLN</li>
      {{/with}}
```
