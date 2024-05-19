//string konwersja
let value = true;
console.log(typeof value);
value = String(value); //konwersja na string
console.log(typeof value);

//numeric conversion
let division = '6' / '2'; //konwersja automatyczna przy działaniach matematycznych
console.log(typeof division);
let num = Number('123'); //możemy też użyć konwersji jawnej wprost
console.log(typeof num);
num = Number("Not a number"); //Zwraca NaN
console.log(num);
//undefined - NaN
//null - 0
//true and false - 1 and 0
//string jest trymowany przed konwersją

//boolean conversion
let bool = Boolean('hello'); //true
console.log(bool);
//wartości puste tak jak: 0, null, '', undefined and NaN zwracają false
//wartości takie jak: 1, tekst zwracają true