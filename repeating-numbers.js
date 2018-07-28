var repeatNumbers = function(data) {
  if (data.length > 1) {
    var final = "";
    for (let num = 0; num < data.length; num ++) {
      var subarray = data[num];
      var answer = "";
      for (let count = 0; count < subarray[1]; count ++) {
        answer += subarray[0].toString();
      } final += answer;
      if (num < (data.length - 1)) {
        final += ", ";
      }
    } return final;
  } else if (data.length = 1) {
    var subarray = data[0];
    var answer = "";
    for (let count = 0; count < subarray[1]; count ++) {
      answer += subarray[0].toString();
    } return answer
  }
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));