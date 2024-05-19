//w js istnieją operacje takie jak + - * / % **

//** - potęgowanie
console.log(2 ** 3);

//string concatenation
console.log('my' + 'string');
console.log('1' + 2); //jeśli jeden z operandów jest string to reszta też jest konwertowana do tego typu
//to działa tylko z + (konkatenacją)
console.log(2 + 2 + '1'); //41

//unary operator +
//nie robi niz typami number ale konwertuje inne typy do number, robi to samo co Number(...)
console.log(+true); // 1
console.log(+""); // 0
console.log(+'1' + +'2'); // 3 to działa ponieważ unary + ma wyższy priorytet niż binary więc jest wykonywany pierwszy

let c = 3 - (a = 2 + 1); // 0 to działa i jednocześnie przypisuje wartość 3 do a

let a;
let b;
a = b = c = 2 + 2; //przypisanie wartości do kilku zmiennych jednocześnie

//operatory += *= -= istnieją tak jak w Java
//inkrementacja i dekrementacja ++ -- również jak w Java
let counter = 1;
let nums = ++counter;
console.log(nums); // 2 ponieważ ++ jako prefix zwracają nową wartość
nums = counter++;
console.log(nums); // 2 ponieważ ++ jako postfix zwracają starą wartość