// Falsy {
//  false
//  0
//  null
//  undefined
//  NaN
// }
let mystery = 0;

if (mystery) {
  console.log("TRUTH");
} else {
  console.log("FALSY");
}

// example to use
let loggedInUser;
if (loggedInUser) {
  console.log("You are logged in!");
} else {
  console.log("Please Log in!");
}