Poziomy komunikacji

TCP/IP - to wydajemy dźwięki
HTTP - rozmawiamy w j.polski
REST - używamy slangu językowego
API - używamy określonych słów (GET/PUT/DELETE/POST)

Adresy URL:

https://megak.pl:443/path/to/resource?name='maciek'&surname="sze"

Protokół
http/ftp/https

Host(domena lub adres IP)
megak.pl

Port
:443/:80/:21

Path (ścieżka)
/path/to/resource
/

Param - parametry przekazywane w adresie
?name='maciek'&surname="sze"

MIME TYPES:
{'Content-type':'application/json'} - wysyłanie json
{'Content-type':'application/javascript'} - zwraca js
{'Content-type':'text/css'} - zwraca css
{'Content-type':'text/plain'} - zwraca zwykły tekst
{'Content-type':'text/html'} - zwraca html
{'Content-type':'text/html; charset=utf-8'} - zwraca html z kodowaniem utf-8
{'Content-type':'video/mp4}
{'Content-type':'image/png'}
https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types

KODY ODPOWIEDZI:
kody 1-- kody informacyjne

kody 2-- kody sukcesu
kod 200 - ok (OK)
kod 201 - ok zapisano (OK created)

kody 3-- kody przekierowania
kod 301 - przekierowano na nowy URL trwałe (Moved to new URL)
kod 302 - przekierowano na nowy URL nie trwałe (Moved to new URL)
kod 303 - działa jak 302 ale np. zapis metodą POST i przekierowuje na listę GET
kod 307 - działa jak 302 ale np. zapis metodą POST i przekierowuje na POST

kody 4-- kody błędu klienta
kod 400 - błędne zapytanie (Bad request)
kod 401 - brak autoryzacji (Unauthorized)
kod 403 - brak dostępu (Forbidden)
kod 404 - nieodnalazłem zasobu dla URL (Not found)

kody 5-- kody błędu serwera
kod 500 - kod błędu servera (Internal server error)

METODY HTTP:
GET - odczytaj
HEAD - odczyt tylko nagłówka
POST - stwórz
PATCH - wymień na nowy
PUT - aktualizuj
DELETE - usuń

SPRAWDZENIE OBCIĄŻENIA SERVERA
ab -n 10000 -c 500 http://localhost:3000/
