var utc = new Date();
var month = (utc.getUTCMonth()+1);
var hour = (utc.getUTCHours());
var minute = (utc.getUTCMinutes());
var second = (utc.getUTCSeconds());
var date = (utc.getUTCDate());
var monthString = "";
var minuteString = "";
var hourString = "";
var secondString = "";
var dateString = "";

var monthDelay = function(delay){
	var month1 = (utc.getUTCMonth()+1+delay)
	var month1String ="";
	if (month<10){month1String = "0" + month1.toString();}
	else {month1String=month1.toString();}
	return month1String;
}

if (month<10){monthString = "0" + month.toString();}
else {monthString=month.toString();}

if (hour<10){hourString = "0" + hour.toString();}
else {hourString=hour.toString();}

if (minute<10){minuteString = "0" + minute.toString();}
else {minuteString=minute.toString();}

if (second<10){secondString = "0" + second.toString();}
else {secondString=second.toString();}

if (date<10){dateString = "0" + date.toString();}
else {dateString=date.toString();}
