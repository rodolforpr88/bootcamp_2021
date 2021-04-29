let password = 'hello';

if (password.length >= 6) {
  // no spaces
  if (password.indexOf(' ') === -1) {
    console.log("Valid Password!");
  }
  else {
    console.log("Password is long enough, but cannot contain spaces");
  }
} else {
  console.log("Password must be longer");
}