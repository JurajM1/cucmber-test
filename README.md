Cucumber_TEST
Wdrażanie - lokalne wymagania:
Aby zainstalować Cucumber, będziemy potrzebować node.js.
Sprawdzamy, czy mamy zainstalowane Node.js i npm:

node -v

npm -v

Tworzymy folder roboczy i nazywamy go Cucumber.

Inicjujemy nasz nowy projekt poleceniem npm init --yes.

I dodajemy do nowego projektu cucumber jako zależność dev - npm install --save-dev @cucumber/cucumber.

Teraz dostosujmy nasz plik package.json, aby móc uruchomić nasz test za pomocą szybkiego scenariusza.

W sekcji test dodajemy następującą linię:
"scripts": {
    "test": "cucumber-js"
  },

Następnym krokiem jest przygotowanie struktury naszego projektu.
а. Tworzymy folder features.

b. A także folder step_definitions w folderze features.

Następnie musimy utworzyć plik o nazwie cucumber.js w folderze głównym naszego projektu i dodać tam następującą zawartość:

module.exports = {

default: `--format-options '{"snippetInterface": "synchronous"}'`

}

Następnym krokiem jest utworzenie nowego pliku o nazwie stepdefs.js w naszym folderze definicji kroków.

Następnie musimy zaimportować wymagane moduły do naszego nowego pliku stepdefs.js.


const assert = require('assert');

const { Given, When, Then } = require('@cucumber/cucumber');

module.exports = {

}

Sprawdzenie poprawności instalacji Cucumber:
Aby sprawdzić, czy Cucumber jest poprawnie zainstalowany, możemy użyć jednego z dwóch poleceń:
npm test - jest to polecenie, które zapisaliśmy w naszym pliku package.json.

npx cucumber-js - jest to domyślne polecenie do uruchamiania wszystkich testów.

W rezultacie powinniśmy otrzymać następujące dane wyjściowe:
0 Scenarios

0 steps

0m00.000s

Wynik ten informuje nas, że Cucumber nie znalazł niczego do uruchomienia i potwierdza, że wszystko jest dobrze skonfigurowane.
Używanie znaczników:
Dodałam dwa znaczniki do naszych dwóch scenariuszy, aby uruchomić je osobno.

Aby dodać znacznik na poziomie scenariusza, musimy dodać to polecenie do ciągu powyżej żądanego scenariusza:

@first-test

dla drugiego scenariusza:

@second-test

Aby uruchomić nasz pierwszy test, musimy uruchomić następujące polecenie:

npx cucumber-js --tags '@first-test'

Do uruchomienia drugiego testu:

npx cucumber-js --tags '@second-test'
