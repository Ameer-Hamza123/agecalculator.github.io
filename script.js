var date = prompt("Enter YOUR DATE OF BIRTH");
var month = prompt("Enter YOUR MONTH OF BIRTH");
var year = prompt("Enter YOUR YEAR OF BIRTH");

month.toLowerCase();

// var month1 = ["jan","january""01""1"];
// var month2 = ["feb""febuary""02""2"];
// var month3 = ["mar""march""03""3"];
// var month4 = ["apr""april""04""4"];
// var month5 = ["may""05""5"];
// var month6 = ["jun""june""6""06"];
// var month7 = ["jul""july""07""7"];
// var month8 = ["aug""august""08""8"];
// var month9 = ["sep""sept""september""09""9"];
// var month10 = ["oct""october""10""010"];
// var month11 = ["nov""november""011""11"];
// var month12 = ["dec""december""012""12"]

if(month === "1" || "january" || "jan" || "01"){
    month = 0;
}else if (month === "2" || "febuary" || "feb" || "02"){
    month = 1;
}else if (month === "3" || "march" || "mar" || "03"){
    month = 2;
}else if (month === "4" || "april" || "apr" || "04"){
    month = 3;
}else if (month === "5" || "may" || "may" || "05"){
    month = 4;
}else if (month === "6" || "june" || "jun" || "06"){
    month = 5;
}else if (month === "7" || "july" || "jul" || "07"){
    month = 6;
}else if (month === "8" || "august" || "aug" || "08"){
    month = 7;
}else if (month === "9" || "september" || "sep" || "09"){
    month = 8;
}else if (month === "10" || "october" || "oct" || "10"){
    month = 9;
}else if (month === "11" || "november" || "nov" || "11"){
    month = 10;
}else if (month === "12" || "december" || "dec" || "12"){
    month = 11;
}else{
    alert("Please provide the month correctly")
}
// var month1 = new Date().setMonth(month)
// var month2 = month1 / (1000 * 60 * 60 * 24 * 30 )
// var month2 = month / (1000 * 60 * 60 * 24  )
// document.getElementById("answer").innerHTML = month2;
// document.getElementById("answer") .innerHTML = ("hello world");
// var date1 = date - todayDate;
// var month1 = new Date().setMonth(month);
// var month2 =Math.floor( month /(1000 * 60 * 60 * 24 * 30));

// alert(date1 + "" + todayMonth)

// alert (month1)

var d = new Date();
var todayDate = d.getTime();
var todayMonth= d.getTime()
var todayYear= d.getTime()

var pRompt = new Date();
var dAte = pRompt.setDate(date);
var mOnth = pRompt.setMonth(month);
var yEar = pRompt.setFullYear(year);

var daTe = todayDate - dAte; 
var datE = daTe / (1000 * 60 * 60 );

var dob = new Date();
dob.setDate(date);
dob.setMonth(month);
dob.setFullYear(year);
var today = new Date();
var mstoday = today.getTime();
var msdob = dob.getTime();
var age = mstoday - msdob;
var yeaR = Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));
var date = new Date("january 1, 1970");
var date1 = 1970 + yeaR;
date.setFullYear(date1);
var msdate = date.getTime();
var month = age - msdate;
var months = Math.floor(month / (1000 * 60 * 60 * 24 * (365.25/12)));


document.getElementById("answer").innerHTML = datE + "Days" + "  " + months + "Months" + "  " + yeaR + "Year"