var calculateChange = function (total, cash) {
  var change_object = {};
  var change = cash - total;
  if (change >= 2000) {
    let num1 = (change - (change % 2000)) / 2000
    change_object.twenty = num1
    change = change % 2000
  } if (change >= 1000) {
    let num2 = (change - (change % 1000)) / 1000
    change_object.ten = num2
    change = change % 1000
  } if (change >= 500) {
    let num3 = (change - (change % 500)) / 500
    change_object.five = num3
    change = change % 500
  } if (change >= 200) {
    let num4 = (change - (change % 200)) / 200
    change_object.twoDollar = num4
    change = change % 200
  } if (change >= 100) {
    let num5 = (change - (change % 100)) / 100
    change_object.dollar = num5
    change = change % 100
  } if (change >= 25) {
    let num6 = (change - (change % 25)) / 25
    change_object.quarter = num6
    change = change % 25
  } if (change >= 10) {
    let num7 = (change - (change % 10)) / 10
    change_object.dime = num7
    change = change % 10
  } if (change >= 5) {
    let num8 = (change - (change % 5)) / 5
    change_object.nickel = num8
    change = change % 5
  } if (change >= 1) {
    let num9 = (change - (change % 1)) / 1
    change_object.penny = num9
    change = change % 1
  } return change_object
}



console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));