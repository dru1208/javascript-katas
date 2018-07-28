  var month_guide = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
  };
var talkingCalendar = function (date) {
  var month1 = date[5] + date[6];
  var date_value = null;
  if (date[8] === "0") {
    if (date[9] === "1") {
      date_value = date[9] + "st";
    } else if (date[9] === "2") {
      date_value = date[9] + "nd";
    } else if (date[9] === "3") {
      date_value = date[9] + "rd";
    } else {
      date_value = date[9] + "th";
    }
  } else {
    date_value = date[8] + date[9] + "th";
  }
  var year_value = date [0] + date[1] + date[2] + date[3];
  var newdate = month_guide[month1] + " " + date_value + ", " + year_value;
  return newdate;
}



console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));



