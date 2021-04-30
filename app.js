let loggedInUser;

if (!loggedInUser) {
  console.log('Get out of here!');
}

let flavor = 'watermelon';

// if (flavor !== 'grape' && flavor !== 'cherry') {
//   console.log('We dont have that flavor');
// }

if (!(flavor === 'grape' || flavor === 'cherry')) {
  console.log('We only gave grape and cherry');
}