let message = 'hello';
message = 123456; //ta sama zmienna może zmienić typ po przypisaniu danej innego typu (dynamiczne typowanie)

//number
let numberType = 123; //Typ number, reprezentuje zarówno liczby całkowite jak i zmiennoprzecinkowe
let float = 12.3;
//oprócz liczb do tego typu należą Infinity, -Infinity i NaN
console.log(1 / 0); // Infinity
console.log('not a number' / 2); //NaN reprezentuje niepoprawną operacje matematyczną

//bigint
//number może przechowywać bezpiecznie liczbę całkowitą 9007199254740991
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992 błąd
const bigInt = 1234567890123456789012345678901234567890n; //BigInt tworzymy poprzez dodanie n na końcu
console.log(bigInt);
const anotherBig = 10n;
console.log(bigInt + anotherBig); //operacja wykonujemy tak jak na number oraz porównania
//nie można mieszać typu BigInt z number np 10n + 2 musimy je skonwertować:
console.log(anotherBig + BigInt(2));

//string
let phrase = 'Hello'; //stringi można podawać w '' "" lub ``
//Backticks `` pozwalają na interpolację i osadzać zmienne oraz wyrażenia
console.log(`${phrase}, Damian`);


//boolean
//Ma dwie wartości: true and false
let isGreater = 4 > 1;
console.log(isGreater);

//null
//referencja do nieistniejącego obiektu, inaczej nic lub pusta wartość, jest to zamierzony brak wartości
let age = null;

//undefined
//oznacza że wartość nie została przypisana ale bardziej na zasadzie niezamierzonej akcji w wyniku błędu
let mistake;
console.log(mistake);

//object to kompleksowy typ zawierający wiele typów prostych

//symbol jest używany do tworzenia unikalnego identyfikatora obiektu

//----------------------------------------------------------------------------------------------------------------------

//typeof operator
console.log(typeof 10n); //zwraca typ argumentu
console.log(typeof null); //zwraca object, jest to znany błąd w js
console.log(typeof alert) //zwraca function mimo że nie ma takiego typu w js i funkcje należą do object