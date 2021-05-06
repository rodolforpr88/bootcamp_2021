// function isPangram(sentence) {
//   let lowerCase = sentence.toLowerCase();
//   for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//     if (lowerCase.indexOf(char) === -1) {
//       return false;
//     }
//   }
//   return true;
// }

function isPangram(sentence) {
  let lowerCase = sentence.toLowerCase();
  for (let char of 'abcdefghijklmnopqrstuvwxyz') {
    if (lowerCase.includes(char)) {
      return false;
    }
  }
  return true;
}