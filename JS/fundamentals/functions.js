//deklaracja funkcji
function showMessage() {
    console.log('Hello everyone!');
}

//wywołanie funkcji
showMessage();

//funkcja z parametrami
function params(value, capacity) {
    console.log(`value: ${value}, capacity: ${capacity}`);
}


let val = 'val';
function fun1(){
    let val = 'innerVal';
    console.log(val); // innerVal, wewnętrzna zmienna o takiej samej nazwie jak globalna, przesłania ją
}

//funkcja zawsze dostaje kopie zmiennej
function change(text) {
    text = text + " changed";
    console.log(text);
}
let text = 'text';
change(text);
console.log(text);

//gdy nie przekażemy do funkcji parametru otrzyma on wartość undefined
params(10);

//możemy zdefiniować domyślną wartość parametru w przypadku gdy go nie podamy
function defaultMessage(message, name = 'Nobody') {
    console.log(`${message}, ${name}`);
}
defaultMessage('Hello');
// null się wydrukuje jako, tylko undefined spowoduje zastosowanie domyślnej wartości
defaultMessage('Hello', null);
defaultMessage('Hello', undefined);

function returnNobody() {
    return 'Nobody';
}

// możemy też przypisywać domyślną wartość wywołując inną funkcję
function withFunction(message, name = returnNobody()) {
    console.log(`${message}, ${name}`);
}

withFunction('Bye');

//jeśli funkcja nie zwraca niczego to tak naprawdę zwraca undefined
