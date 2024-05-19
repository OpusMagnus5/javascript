let a = null;
let b = 'Damian';
let result = a ?? b; // 'Damian' zwraca pierwszą zdefiniowaną wartość, != null != undefined
let value = a ?? 'Default' // Można wykorzystywać do definiowania domyślnych wartości
// operator ?? działa podobnie jak || tylko że tutaj falsy jest tylko null i undefined a nie jak w || '' lub 0

// ?? nie można używać z && i || np: let x = 1 && 2 ?? 3;
// aby użyć go należy dodać nawiasy
let x = (1 && 2) ?? 3;
