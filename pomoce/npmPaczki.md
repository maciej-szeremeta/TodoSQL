Ścieżki

./ - bieżący katalog
../ - cofnięcie sie do katalogu niżej
./**/\* - wszystkie pliki i katalogi rekursywnie
**/\*.js -wszystkie z pliki z rozszerzeniem .js

Instalacja npm

Dokumentacja
https://docs.npmjs.com/cli/

^3.4.2 - ostatnia stabilna wersja
~3.4.2 - wersja i podwersja zachowana
3.4.2 - tylko ta wersja

npm init -y - inicjalizacja package.json
npm instal - instaluje wszystkie zależności z package.json (yarn)
npm i -g <paczka> - instalacja globalna
npm i <paczka> - instalacja lokalna w projekcie (yarn add <paczka>)
npm i <paczka>@14 - instalacja paczki w wersji 14
npm i @types/<paczka>@14 - instalacja podpowiedzi typów wersji 14
npm i -D <paczka> - instalacja paczek developerskich (yarn add -D <paczka>)
npm un <paczka> - odinstalowanie paczki (yarn remove <paczka>)
npm up - aktualizacja paczek
npm ls - lista paczek zainstalowanych lokanie
npm ls - g - lista paczek zainstalowanych globanie
npm outdated - sprawdza aktualność paczek
npm audit - sprawdzanie bezpieczeństaw paczek

Instalacja yarn

npm i -g yarn - instalacja yarn

Ciekaw paczki:

- commander
  https://www.npmjs.com/package/commander

- lodash
  https://www.npmjs.com/package/lodash

- chokidar - śledzenie co sie dzieje w systemie
  https://www.npmjs.com/package/chokidar

- chalk - koloruje console.log()
  https://www.npmjs.com/package/chalk

- colors- koloruje console.log()
  https://www.npmjs.com/package/colors

- node-fetch - komunikacja z innymi API
  https://www.npmjs.com/package/node-fetch

- enquirer - wybieranie opcji w konsoli
  https://www.npmjs.com/package/enquirer

- cookie-parser - odczytuje ciasteczka z przeglądarki
  https://www.npmjs.com/package/cookie-parser

- express-handlebars - silnik widoków
  https://www.npmjs.com/package/express-handlebars

- method-override - biblioteka ułatwiająca prace z REST i formularzami
  https://www.npmjs.com/package/method-override
