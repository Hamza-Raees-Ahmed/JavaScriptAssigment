// console.log("hello there")
// Qno 1
let cureentDate = new Date()
console.log(cureentDate)

// QNO 2
// Get the current date
const currentDate1 = new Date();
// Get the current month (0-indexed, so add 1 to get the actual month)
const currentMonth = currentDate1.getMonth() + 1;
// Array of month names
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
// Get the name of the current month
const currentMonthName = monthNames[currentMonth - 1];
// Alert the current month in words
alert("The current month is: " + currentMonthName);

// QNO 3
// // Get the current date
const currentDate = new Date();
 const currentday = currentDate.getDay() + 1;s
const days =['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
 const currentdayname = days[currentday - 1];
console.log('the current day is '+currentdayname) 

// QNO 4
let cd = new Date()
let cdys = cd.getDay()
if(cdys== 5 || cdys == 6){
    console.log("its fun day")
}else{
    console.log("its not the funday its work day")
}

// QNO 5
let new1 = new Date();
let new2 = new1.getMonth;
if(new2 <= 15){
    console.log("first fifteen days of the month")
}else{
    console.log("Last days of the months")
}

// QNO 6
let old = new Date('jan.1,1970')

let old1 = old.getMilliseconds()
let old2 = old.getMinutes()
console.log('old date'+old)
console.log('miliseconds since 1970'+old1)
console.log('minutes since 1970'+old2)



// QN0 7
let one = new Date();
let two = one.getTime();
if(two <=12){
    console.log("ITS AM")
}else{
    console.log('ITS PM')
}


// QNO 8
let three = new Date();
three.setMonth(11);
three.setDate(31)
console.log(three)

// QNO 10
let four = + prompt("enter your age in years")
let five = new Date();
let six = five.getFullYear() - four;
alert('the years of your birth is '+six)



// Qno 11
 alert("=== Welcome the k-electric company ======")
let Cname = prompt("Enter your name")
let Mname = prompt("Enter month name")
let units =  + prompt("Enter the units you have used")
let ChargePerunit = 16;
let netCharge = units * ChargePerunit;
let lateChagers = 350;
let groceyamount= netCharge + lateChagers;

console.log("customer Name :" +Cname);
console.log("Month  :" +Mname);
console.log("Numbers of units :" +units);
console.log("charge per unit  :"+ChargePerunit);
console.log('net amount payable (within due date): '+netCharge);
console.log("late payments charges is :"+lateChagers);
console.log("Grocerry amount payable (after dua date) :"+groceyamount)