var camelCase = function (input) {
  var newstring = ""
  for (var num = 0; num < input.length; num ++){
    if (input[num] !== " ") {
      if (input [num - 1] === " ") {
        newstring += input[num].toUpperCase();
      } else {
      newstring += input[num];
      }
    }
  } return newstring
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));