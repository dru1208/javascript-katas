var multiplicationTable = function (maxValue) {
  var padding = function (total1) {
    var padstring = "";
    var maximum = (total1 * total1).toString();
    for (var num = 0; num < total1; num ++) {
      padstring += "+--";
      for (var x = 0; x < maximum.length; x++) {
        padstring += "-";
      }
    } padstring += "+";
    return padstring;
  }
  var multiply = function(total2) {
    var bottomData = ""
    var totaldash = (total2*total2).toString().length + 2
    for (num1 = 0; num1 < total2; num1 ++) {
      for (num2 = 0; num2 < total2; num2 ++) {
        var value = (num1 + 1) * (num2 + 1);
        bottomData += "| " + value.toString();
        for (x = 0; x < (totaldash - (value.toString().length + 1)); x ++) {
          bottomData += " "
        }
      } bottomData += "|" + "\n" + padding(total2) + "\n"
    } return bottomData;
  }
  var answer = padding(maxValue) + "\n" + multiply(maxValue);
  return answer;
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(3));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));