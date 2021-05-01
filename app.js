let x = 7;
// Order
// '!' -> && -> || unless u use '()'
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
x == 7 || x === 3 && x > 10;
(x == 7 || x === 3) && x > 10;