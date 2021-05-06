// Wrote a function to find the avg value in an array numbers

function avg(arr) {
  let total = 0;
  for (const num of arr) total += num;
  return total / arr.length
}

// console out
// avg([0,50])
// 25
// avg([75,76,80,95,100])
// 85.2