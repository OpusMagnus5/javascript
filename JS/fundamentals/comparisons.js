//comparisons
// tak jak w Java używamy > < >= <= == !=

//String comparison
console.log('Z' > 'A'); // true
console.log('Glow' > 'Glee'); //true
console.log('Bee' > 'Be'); //true
//porównanie odbywa się tak jak w Java przez index Unicode

console.log('01' == 1); //przy porównaniu następuje konwersja do liczby - true
console.log(true == 1); // true

//zazwyczaj nie używamy == ponieważ porównuje tylko wartość ale nie TYP
let a = 0;
console.log( Boolean(a) ); // false
let b = "0";
alert( Boolean(b) ); // true
alert(a == b); // true!

//porównanie strict przez === sprawdza wartość i typ
console.log(0 === false); //false

//null and undefined
console.log(null === undefined) // false
console.log(null == undefined) //true
//NALEŻY UNIKAĆ PORÓWNYWANIA UNDEFINED I NULL DO LICZB