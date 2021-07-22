// ------------solved by s3sivaram----on 21-Jul-21
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6

function numAdd(number) {
  let length = number.toString().length;
  let result = 0;
  for (let i = 0; i <= length; i++) {
    result = result + Number(number.toString().substr(i, 1));
  }
  return result;
}

function recursiveAdd(recurnum) {
  let length = recurnum.toString().length;
  if (length == 1) {
    return recurnum;
  } else {
    return recursiveAdd(numAdd(recurnum));
  }
}

console.log(recursiveAdd(123456789));
