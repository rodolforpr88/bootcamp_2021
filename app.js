// function square(x) {
//   return x * x;
// }

// function isPurple(color) {
//   if (color.toLowerCase() == 'purple') {
//     return true;
//     console.log('Not going to run!');
//   }
//   else {
//     return false;
//   }
// }

// function isPurple(color) {
//   if (color.toLowerCase() == 'purple') {
//     return true;
//   }
//   return false;
// }

// function isPurple(color) {
//   return color.toLowerCase() === 'purple';
// }

function containsPurple(arr) {
  for (let color of arr) {
    if (color === 'purple' || color === 'magenta') {
      return true;
    }
  }
  return false;
}