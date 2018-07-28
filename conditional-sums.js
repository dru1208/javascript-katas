var conditionalSum = function (values, condition) {
  var answer = 0;
  if (condition === "even") {
    for (let count = 0; count < values.length; count ++) {
      if (values[count] % 2 === 0) {
        answer += values[count];
      }
    } return answer;
  } else if (condition === "odd") {
    for (let num = 0; num < values.length; num ++) {
      if (values[num] % 2 !== 0) {
        answer += values[num];
      }
    } return answer;
  }
}



console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
console.log(conditionalSum([1, 2, 3, 4, 5, 7,], "odd"));
console.log(conditionalSum([1, 2, 8, 4, 8], "even"));
console.log(conditionalSum([1, 3, 3, 4, 5, 7,], "odd"));