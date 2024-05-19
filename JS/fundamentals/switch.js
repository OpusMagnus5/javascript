//switch konstrukcja tak jak w java ale można w case i switch podawać wyrażenia
let a = "1";
let b = 0;

switch (+a) {
    case b + 1:
        console.log("this runs, because +a is 1, exactly equals b+1");
        break;

    default:
        console.log("this doesn't run");
}

//porównanie w switch jest zawsze strict czyli === więc wykona się default
let arg = '3';
switch (arg) {
    case '0':
    case '1':
        alert( 'One or zero' );
        break;

    case 3:
        alert( 'Never executes!' );
        break;
    default:
        alert( 'An unknown value' );
}