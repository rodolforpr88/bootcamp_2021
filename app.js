// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
// - be at least 8 characters
// - cannot contain spaces
// - cannot contain the username
// If all requirements are met, return true.
// Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr); // true

// isValidPassword('dogLuvr123!', 'dogLuvr'); //false

// my solution
// I did with 'includes' but the instructor used 'indexOf' instead.
// password.includes(' ') // password.indexOf(' ')
function isValidPassword(password, username) {
  if (password.includes(username) || password.length < 8 || password.includes(' ')) {
    return false;
  }
  return true;
}