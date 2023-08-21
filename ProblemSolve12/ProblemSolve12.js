function alternatePositiveNegative(arr) {
  let result = [];
  let positive = arr.filter(num => num >= 0);
  let negative = arr.filter(num => num < 0);
 
  for (let i = 0; i < Math.max(positive.length, negative.length); i++) {
    if (positive[i] !== undefined) {
      result.push(positive[i]);
    }
    if (negative[i] !== undefined) {
      result.push(negative[i]);
    }
  }
 
  return result;
 }
 
 let arr = [9, 4, -2, -1, 5, 0, -5, -3, 2];
 let output = alternatePositiveNegative(arr);
 console.log(output);