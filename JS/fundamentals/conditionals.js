//if statement
let year = 2015;
if (year === 2015) {
    console.log('2015!');
} else if (year > 2015) {
    console.log('większe');
} else {
    console.log('???');
}

//0, pusty string "", null, undefined, i NaN są false pozostałe są true w if
if (0) { // 0 is false
}

//operator trójargumentowy tak jak w Java
let result = year === 2015 ? 'value1' : 'value2';
//if elseif lese with ? operator
let message = (age < 3) ? 'Hi, baby!' :
                     (age < 18) ? 'Hello!' :
                     (age < 100) ? 'Greetings!' :
                     'What an unusual age!';

//za pomocą ? możemy również wywoływać metody warunkowo
let company = 'Facebook';
(company === 'Netscape') ? alert('Right!') : alert('Wrong.');