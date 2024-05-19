//operatory jak w Java lub || i && nie !

if (1 || 0) { // działa jak true || false
}

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
let result = firstName || lastName || nickName || "Anonymous" // SuperCoder
//tutaj nie zwraca boolean a wartość która pierwsza od lewej jest truthy, czyli SuperCoder
//jeśli wszystkie są falsy zwraca ostatnią

//można wykorzystać do uruchamiani funkcji, będą uruchamiały się dopóki któraś nie zwróci true
//zazwyczaj wykorzystywana do uruchamiania funkcji jeśli pierwszy warunek będzie false
false || console.log('Second');
true || console.log('Second');

result = 'value1' && 'value2' && 'value3'; //zwraca pierwszą wartość falsy, lub ostatnią jeśli wszystkie są falsy

// !! służy do konwersji na boolean czy jak Boolean("non-empty string")
// najpierw zaprzecza żeby skonwertować a później drugi raz zaprzecza żeby zwrócić oryginalny boolean
console.log( !!"non-empty string" ); // true
console.log( !!null ); // false