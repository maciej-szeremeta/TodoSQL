# Paczki do instalacji

```txt
Auto Close Tag
Auto Rename Tag
Better Comments
Bootstrap 4, Font awesome 4, Font Awesome 5 Free & Pro snippets
Bracket Pair Colorizer
Clock in status bar
Code Spell Checker
Dark++ Theme
Deepdark Material Theme
DotENV
ES7 React/Redux/GraphQL/React-Native snippets
ESLint
filesize
Git Graph
Git History
GitLens — Git supercharged
HTML CSS Support
Import Cost
indent-rainbow
Italian - Code Spell Checker
Live Server
Material Icon Theme
MongoDB for VS Code
Monokai++
MySQL
One Dark Pro
One Dark Theme
One Monokai Theme
Parameter Hints
Path Intellisense
Polish - Code Spell Checker
Pomodoro Timer
PostgreSQL
Prettier - Code formatter
Quokka.js
Sass
Settings Sync
Simple icons
stylelint
Sublime Material Theme
Tabnine - Code Faster with the All-Language AI Assistant for Code Completion, autocomplete JavaScript, Python, TypeScript, PHP, Go, Java, node.js, Ruby, C/C++, HTML/CSS, C#, Rust, SQL, Bash, Kotlin, R
Tailwind CSS IntelliSense
Time Master
Toggle Quotes
TSLint
Visual Studio IntelliCode
VSCode Great Icons
vscode-icons
vscode-styled-components

**_ Bezpieczeństwo paczek npm przy imporcie _**
Vuln Cost - Security Scanner
```

# Info JS

[Nowości w JS https://node.green/]('https://node.green/')

# Paczki oznaczenia

```txt
skróty
i = install
un = uninstall
-D = --save-dev

Paczki z ^ (^18.2.1) - zaktualizuje do max wersji 18

instalacja konkretnej wersji paczki(@)
babel@2.5.6

instalacja paczki z dodatkowymi opisami
@types/babel
```

# Konfiguracja VSC

https://code.visualstudio.com/docs/editor/emmet

> .vscode/settings.json

```json
{
  // ** Niewiem co to **
  "javascript.format.placeOpenBraceOnNewLineForFunctions": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",

  // ** LifeServer **
  "liveServer.settings.donotShowInfoMsg": true,
  "liveServer.settings.donotVerifyTags": true,

  // ** Czas autoSave plików **
  "files.autoSaveDelay": 2000,
  "files.autoSave": "afterDelay",

  //** Window **
  "window.menuBarVisibility": "compact",

  // ** WorkBench - wygład edytora **
  "workbench.colorTheme": "Deepdark Material Theme | Full Black Version",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.startupEditor": "newUntitledFile",
  "workbench.sideBar.location": "right",

  // ** Terminal **
  "terminal.integrated.defaultProfile.windows": "Ubuntu (WSL)",
  "terminal.integrated.tabs.enabled": true,
  "terminal.integrated.fontSize": 11,

  // ** Edytor **
  "editor.cursorBlinking": "smooth",
  "editor.cursorSmoothCaretAnimation": true,
  "editor.minimap.enabled": false,
  "editor.fontFamily": "'Fira Code', Consolas, 'Courier New', monospace",
  "editor.fontLigatures": true,
  "editor.fontWeight": "normal",
  // ** wielkosc czcionki **
  "editor.fontSize": 13,
  // ** wielkosc tabulacji **
  "editor.tabSize": 3,
  // ** zawija tekst w kolumnie **
  "editor.wordWrap": "on",
  // ** Multi Kursor **
  "editor.multiCursorModifier": "ctrlCmd",
  // ** Formatowanie podczas wklejania **
  "editor.formatOnPaste": true,
  "editor.formatOnType": true,
  // ** Formatowanie podczas zapisywania **
  "editor.formatOnSave": true,
  // \*\* Naprawa błędów jeśli to możliwe eslint,stylelint
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
  "editor.renderControlCharacters": true,
  "editor.suggestSelection": "first",

  // ** Explorer **
  "explorer.confirmDragAndDrop": false,
  "explorer.confirmDelete": false,

  // ** Quokka **
  "quokka.compactMessageOutput": true,
  "quokka.automaticRestart": true,

  // ** TabNine **
  "tabnine.experimentalAutoImports": true,

  // ** ESLint **
  "eslint.alwaysShowStatus": true,
  "eslint.format.enable": true,
  "eslint.lintTask.enable": true,
  "eslint.codeAction.showDocumentation": {
    "enable": true
  },
  "eslint.validate": [
    "typescript",
    "javascript",
    "javascriptreact",
    "json",
    "jsonc",
    "html"
  ],

  // ** StyleLint **

  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "stylelint.executeAutofix": true,

  // ** Auto fromat kodu **
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[typescript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[eslintrc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[md]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // ** Clock **
  "clock.dateFormat": "HH:MM:ss",

  // ** Better Comments **
  "better-comments.tags": [
    {
      "tag": "!",
      "color": "#FF2D00",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    },
    {
      "tag": "?",
      "color": "#3498DB",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    },
    {
      "tag": "//",
      "color": "#474747",
      "strikethrough": true,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    },
    {
      "tag": "$",
      "color": "#7fff00",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    },
    {
      "tag": "*",
      "color": "#98C379",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    },
    {
      "tag": "#",
      "color": "#d0ff00",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    }
  ],
  "better-comments.highlightPlainText": true,
  "better-comments.multilineComments": true,

  // ** Emmet Config **//
  "emmet.showSuggestionsAsSnippets": true,
  "emmet.triggerExpansionOnTab": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "css": "css",
    "html": "html"
  },
  // ** cSpell **
  "cSpell.allowCompoundWords": true,
  "cSpell.language": "en,pl,it,fullstack",
  "cSpell.words": [
    "Devcentral",
    "Devworks",
    "Traversy",
    "Zduplikowana",
    "cego",
    "devcamper",
    "dsphere",
    "inicjalizacja",
    "po",
    "pośreniczącego",
    "renicz",
    "virtuals",
    "zduplikowany",
    "Ania",
    "Arek",
    "Autentykacja",
    "Autor",
    "Baugart",
    "Beautyful",
    "Ciebie",
    "Ciągły",
    "Corrupti",
    "Czytaj",
    "Dashbord",
    "Dawaj",
    "Destrukturyzacja",
    "Dolorem",
    "Domieszka",
    "Domieszki",
    "Duży",
    "Dziewczyna",
    "Efekt",
    "Eius",
    "Excepturi",
    "Feliksiak",
    "Firmy",
    "Importowanie",
    "Informacje",
    "Ipsam",
    "Janek",
    "Jarek",
    "Jesteśmy",
    "KODU",
    "Kliknij",
    "Kontakt",
    "Kowalski",
    "Lu",
    "Luśka",
    "Modyfikacja",
    "Moje",
    "Nadpisanie",
    "Nasza",
    "Nasłuchiwanie",
    "Nawigacja",
    "Nazewnictwo",
    "Nazwa",
    "Neque",
    "Nesciunt",
    "Nobis",
    "Nowak",
    "Obraz",
    "Obróć",
    "Odhaszowanie",
    "Odit",
    "Oferta",
    "Optio",
    "Parametry",
    "Pawłowcz",
    "Placeat",
    "Plików",
    "Pobieramy",
    "Pobieranie",
    "Pobranie",
    "Pomniejsz",
    "Powiększ",
    "Praca",
    "Programista",
    "Programistka",
    "Przed",
    "Przycisk",
    "Recusandae",
    "Saira",
    "Skrolowanie",
    "Sprawdzanie",
    "Stopka",
    "Tabela",
    "Tekst",
    "Todos",
    "Tworzenie",
    "Tworząc",
    "Tytuł",
    "UMIESZCZNIE",
    "Układ",
    "Veritatis",
    "Wejdz",
    "Wewnetrzna",
    "Wiedza",
    "Witaj",
    "Wszyscy",
    "Wykonanie",
    "Wyszukiwarka",
    "Zaangażowanie",
    "Zagnieżdzenia",
    "Zmieniarka",
    "accusantium",
    "adipisci",
    "adipisicing",
    "adres",
    "akcji",
    "aktualności",
    "amet",
    "animacja",
    "animsq",
    "aperiam",
    "aplikacjach",
    "aplikacji",
    "architecto",
    "artykułu",
    "asperiores",
    "aspernatur",
    "assumenda",
    "atque",
    "atrybutów",
    "autem",
    "beatae",
    "blanditiis",
    "btns",
    "budowaniu",
    "całego",
    "chęć",
    "cicha",
    "ciągle",
    "consectetur",
    "consequatur",
    "consequuntur",
    "corejs",
    "corporis",
    "counte",
    "cupiditate",
    "cztery",
    "cząstkowym",
    "członkowie",
    "dalej",
    "danych",
    "debitis",
    "delectus",
    "deleniti",
    "describedby",
    "deserunt",
    "devtool",
    "dignissimos",
    "distinctio",
    "dodajemy",
    "dodawanie",
    "doloremque",
    "doloribus",
    "dolorum",
    "dopracoania",
    "doświadczenie",
    "ducimus",
    "działa",
    "dziś",
    "eaque",
    "earum",
    "efekty",
    "elementu",
    "elementy",
    "elementów",
    "eligendi",
    "elit",
    "enim",
    "etpaie",
    "eveniet",
    "exercitationem",
    "expedita",
    "explicabo",
    "facilis",
    "fonta",
    "fuga",
    "fugiat",
    "funkcja",
    "grach",
    "głębokość",
    "harum",
    "hexa",
    "historia",
    "iexplore",
    "illo",
    "illum",
    "incidunt",
    "ipsa",
    "iste",
    "itaque",
    "iure",
    "iusto",
    "jakieś",
    "jego",
    "jfif",
    "jquery",
    "języków",
    "ka",
    "każdej",
    "każdym",
    "klas",
    "klasy",
    "klik",
    "kody",
    "kombinatorami",
    "końcowy",
    "końcu",
    "która",
    "które",
    "który",
    "kurs",
    "laboriosam",
    "laborum",
    "laudantium",
    "linkedin",
    "maciek",
    "maciekj",
    "magni",
    "maxime",
    "mały",
    "mnie",
    "mobilne",
    "mobilnych",
    "modernizr",
    "molestiae",
    "mollitia",
    "motywacja",
    "mozjpeg",
    "myfooter",
    "młodym",
    "najlepszych",
    "naszego",
    "natus",
    "necessitatibus",
    "nemo",
    "nowoczesnych",
    "nulla",
    "numquam",
    "obcaecati",
    "odejmowanie",
    "odio",
    "officia",
    "officiis",
    "omnis",
    "oraz",
    "pariatur",
    "pasującym",
    "perferendis",
    "perspiciatis",
    "pełnym",
    "pierwszym",
    "plik",
    "pliku",
    "początku",
    "podmieniamy",
    "podpięcie",
    "podłogi",
    "pojedynczego",
    "porro",
    "potrzebne",
    "poziomu",
    "pozycja",
    "poświęcenia",
    "praesentium",
    "prettierrc",
    "profesjonalizm",
    "projektu",
    "publicatin",
    "publikacji",
    "płaszczyźnie",
    "quas",
    "quis",
    "quisquam",
    "ratione",
    "reiciendis",
    "repellendus",
    "reprehenderit",
    "repudiandae",
    "rerum",
    "robiny",
    "rodzestwo",
    "rozszerzenia",
    "rozwiązania",
    "rozwiązań",
    "saepe",
    "sapiente",
    "sekcja",
    "sekcji",
    "selektor",
    "selektorze",
    "sequi",
    "similique",
    "skrolujesz",
    "skryptów",
    "soluta",
    "stronie",
    "strony",
    "stylelintrc",
    "styluja",
    "sumą",
    "suscipit",
    "szerokie",
    "szukaj",
    "tablicach",
    "takim",
    "task",
    "tasków",
    "tbox",
    "teamu",
    "tekstu",
    "tempor",
    "tenetur",
    "teraz",
    "textb",
    "totam",
    "tworzenia",
    "tworzymy",
    "typy",
    "ullam",
    "ulubione",
    "umiejetności",
    "umieszczony",
    "unde",
    "unkonown",
    "unspaced",
    "usówanie",
    "użytkownik",
    "użytkownika",
    "użytkowników",
    "velit",
    "veniam",
    "vero",
    "voluptas",
    "voluptate",
    "voluptatem",
    "voluptates",
    "voluptatibus",
    "voluptatum",
    "w",
    "wielkości",
    "wielkość",
    "wspólne",
    "wszystkich",
    "wylogowania",
    "wyśrodkowanie",
    "wzrost",
    "węzłów",
    "właściwości",
    "zaangażowania",
    "zakresie",
    "zastępczy",
    "zawartości",
    "zdarzenie",
    "zespołem",
    "zmianą",
    "zmienne",
    "znak",
    "zostawiamy"
  ]
}
```

**\*\***\*\*\***\*\*** RESET VSC \***\*\*\*\*\*\*\***\*\***\*\*\*\*\*\*\***

# Konfiguracja Node Front/Back

https://github.com/coreybutler/nvm-windows

- nvm list - lista instalacji
- nvm install najnowsza wersja - instalacja wersji
- nvm alias default node - ustawienie najnowszej wersji

# NPM Front/Back

```bash
npm init -y - inicjalizacja package.json
```

> package.json

```json
{
  "name": "projekt",
  "version": "1.0.0",
  "description": "Nauka JS",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "test": "jest"
  },
  "keywords": [],
  "author": "Maciej Szeremeta",
  "license": "ISC"
}
```

# GIT Front/Back

```bash
git init
```

> .gitignore

```json
node_modules
dist
.pomoce
.vscode
.env
*.avi
*.mp4
```

# Prettier Front/Back

```bash
npm i -D @types/prettier prettier
```

> .prettierrc

```json
{
  "prettier.printWidth": 80,
  "prettier.tabWidth": 2,
  "prettier.semi": true,
  "prettier.singleQuote": true,
  "prettier.quoteProps": "consistent",
  "prettier.trailingComma": "es5",
  "prettier.arrowParens": "avoid",
  "prettier.bracketSpacing": true,
  "prettier.endOfLine": "auto",
  "prettier.jsxBracketSameLine": true,
  "prettier.jsxSingleQuote": true
}
```

# ESLint Front/Back

```bash
npm i -D @types/eslint eslint eslint-config-prettier eslint-config-airbnb-base eslint-plugin-prettier eslint-plugin-import eslint-plugin-html @babel/eslint-parser
```

> package.json

```json
{
  "eslint.packageManager": "npm"
}
```

> .eslintrc Backend

```json
{
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es2021": true
  },
  "parser": "@babel/eslint-parser",
  "extends": ["airbnb-base", "plugin:prettier/recommended"],
  "plugins": ["prettier"],
  "parserOptions": {
    "ecmaVersion": 12
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto",
        "trailingComma": "es5",
        "singleQuote": true,
        "arrowParens": "avoid",
        "quoteProps": "consistent",
        "bracketSpacing": true
      }
    ]
  }
}
```

> .eslintrc Front

```json
{
  "env": {
    "browser": true,
    "node": true,
    "es2021": true
  },
  "parser": "@babel/eslint-parser",
  "extends": ["airbnb-base", "plugin:prettier/recommended"],
  "plugins": ["prettier"],
  "parserOptions": {
    "ecmaVersion": 12
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto",
        "trailingComma": "es5",
        "singleQuote": true,
        "arrowParens": "avoid",
        "quoteProps": "consistent",
        "bracketSpacing": true
      }
    ]
  }
}
```

# Nodemon

```bash
npm i -D @types/nodemon nodemon
```

- -e - rozszerzenia jakie śledzi nodemon
- -L - śledzienie plików w czasie rzeczywistym
- --delay 3 - opuźnienie czasowe odświerzania

> package.json

```json
  "nodemonConfig": {
    "ignore": [
      "test/*",
      "docs/*"
    ],
    "delay": 2500,
    "legacyWatch": true,
    "execMap": {
      "js": "javascript",
      "hbs": "handlebars",
      "html": "html",
      "css": "css"
    }
  },
```

```json
}
"scripts": {
"watch": "nodemon index.js -e js,json,ejs",
}}
```

# Babel

```bash
npm i -D @babel/core @babel/cli @babel/preset-env
```

> .babelrc

```json
{
  "presets": ["@babel/preset-env"]
}
```

> package.json

```json
"scripts": {
"node:build": "babel 11Classy.js -d dist",
"node:start": "npm run node:build && node dist/index.js"
}
```

# Express

```bash
npm i -D @types/express
```

```bash
npm i express cookie-parser
```

# Silnik Widoków Handlebars

```bash
npm i express-handlebars
```

# StyleLint Front

```bash
npm i -D stylelint stylelint-config-standard stylelint-order
```

> .stylelintrc.json

```json
{
  "extends": "stylelint-config-standard",
  "plugins": ["stylelint-order"],
  "rules": {
    "order/order": ["custom-properties", "declarations"],
    "order/properties-order": ["width", "height"]
  }
}
```

<!-- WEBPACK Front-->

npm i -D webpack webpack-cli nodemon clean-webpack-plugin html-webpack-plugin html-webpack-partials-plugin webpack-dev-server css-loader style-loader postcss-loader mini-css-extract-plugin css-minimizer-webpack-plugin html-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/plugin-transform-runtime @babel/polyfill stylelint stylelint-config-standard stylelint-order

Struktura projektu

<!-- src
      L /assets
         L /img
         L /video
      L /components
      L /css
      L /tools
    index.js
    index.html -->

webpack.config.dev.js

<!-- const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");

module.exports = {
  mode: "development",
  // Pliki wejściowe wzglednie pliku config
  entry: { app: "./src/index.js" },
  devtool:'source-map',
  // Pliki wyjściowe name jest z entry app
  output: {
    filename: "js/[name].js",
path: path.resolve(__dirname,'dist')
  },
  module: {
    rules: [

{ test: /\.(html)$/,
  use: {
    loader: 'html-loader',
    options: {
      sources: true,
      esModule: false
    }
  }
},
      {
        test: /\.js$/,
        // określenie loadera oraz reguł
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                // określenie rodzaju przeglądarek
                {
                  useBuiltIns: "usage",
                  corejs: "2.0.0",
                  targets: {
                    node: "current",
                    browsers: ["> 0.25%, not dead"],
                  },
                },
              ],
            ],
            plugins: [
              [
                // Alternatywa dla polifili
                "@babel/plugin-transform-runtime",
                {
                  absoluteRuntime: false,
                  corejs: false,
                  helpers: true,
                  regenerator: true,
                  version: "7.0.0-beta.0",
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader",'postcss-loader'],
      },
      {
        test: /\.(jpg|png|svg|jpeg|gif)$/,
        type: "asset",
      },
                  {
        test: /\.(mp3|mp4|aac|ogg)$/,
        type: "asset",
      },
    ],
  },
  plugins: [
    // Czyszczenie katalogu dist
    new CleanWebpackPlugin(),
    // Dodawanie pliku JS do Html
    new HtmlWebpackPlugin({
      inject: "body",
      title: 'Sternik',
      template: `./src/index.html`,
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, './src/components/footer/footer.html'),
      location: 'footer',
      template_filename:'index.html'
    })
  ],
  devServer: {
    // ścieżka do plików jpg|png dodanych w html
    contentBase: "./src",
    compress: true,
    // Port
    port: 9000,
    // Przeglądarka
    open: "Chrome",
  },
}; -->

webpack.config.prod.js

<!-- const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");

module.exports = {
  mode: "production",
  // Pliki wejściowe wzglednie pliku config
  entry: { app: "./src/index.js" },
  // Pliki wyjściowe name jest z entry app
  output: {
    filename: "js/[name]-[contenthash:10].js",
    path: path.resolve(__dirname,'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // określenie loadera oraz reguł
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                // określenie rodzaju przeglądarek
                {
                  // informacja o debugowaniu
                  // debug: true,
                  useBuiltIns: "usage",
                  corejs: "3.16.0",
                  targets: {
                    node: "current",
                    browsers: ["> 0.25%, not dead"],
                  },
                },
              ],
            ],
            plugins: [
              [
                // Alternatywa dla polifili
                "@babel/plugin-transform-runtime",
                {
                  absoluteRuntime: false,
                  corejs: false,
                  helpers: true,
                  regenerator: true,
                  version: "7.0.0-beta.0",
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { sources: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader",'postcss-loader'],
      },
      {
        test: /\.(jpg|png|svg|jpeg|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "img/[name]-[contenthash:10][ext]",
        },

        use: [
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                quality: 80,
                progressive: true,
              },
            },
          },
        ],
      },
            {
        test: /\.(mp3|mp4|aac|ogg)$/,
        type: "asset/resource",
        generator: {
          filename: "media/[name]-[contenthash:10][ext]",
        },
      },
    ],
  },
  plugins: [
    // Czyszczenie katalogu dist
    new CleanWebpackPlugin(),
    // Dodawanie pliku JS do Html
    new HtmlWebpackPlugin({
      inject: "body",
      template: `./src/index.html`,
    }),
    // Łączenie css w jeden plik
    new MiniCssExtractPlugin({
      filename: "css/[name]-[contenthash:10].css",
    }),
    new HtmlWebpackPartialsPlugin({
    path: path.join(__dirname, './src/components/footer/footer.html'),
    location: 'footer',
    template_filename:'index.html'
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
}; -->

package.json

"scripts": {
"fe:prod": "webpack --config webpack.config.prod.js",
"fe:dev": "webpack serve --config webpack.config.dev.js"
}
