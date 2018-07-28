var padding = function (total) {
  var padstring = "";
  var maximum = (total * total).toString();
  for (var num = 0; num < total; num ++) {
    padstring += "+--";
    for (var x = 0; x < maximum.length; x++) {
      padstring += "-";
    }
  } padstring += "+";
  return padstring;
}

var multiply = function(a) {
  var answer = ""
  var totaldash = (a*a).toString().length + 2
  for (count = 0; count < a; count ++) {
    for (num = 0; num < a; num ++) {
      var value = (count + 1) * (num + 1);
      var newstring = value.toString();
      answer += "| " + newstring;
      for (x = 0; x < (totaldash - (newstring.length + 1)); x ++) {
        answer += " "
      }
    } answer += "|" + "\n" + padding(a) + "\n"
  } return answer;
}


console.log(multiply(5));
console.log(multiply(10));
console.log(multiply(15));

// 1 digit there are 3 dashes, 2 digits there are 4 dashes, 3 digits there are 5 dashes//
//dashes = digits + 2