const testArray = [100, -100];

function highAndLow(array) {
  let newArray = [];
  let sorted = array.sort(function (a, b) {
    return a - b;
  });
  newArray = [sorted[0], sorted[array.length - 1]];
  console.log(newArray);
}

highAndLow(testArray);
