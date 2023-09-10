// // qno 1
// // var A = "A-Z";
// var character = prompt("enter the character or number")
// if (character == 1,2,3,4,5,6,7,8,9,10) {
//     console.log("the character is number")
// }  
// else if (character == ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",'U',"V","W",'X',"Y","Z"]) {
//     console.log("the character is Uppercase")
    
// }else if (character == "a-z") {
//     console.log("the character is Lowercase")
    
// }

// qno 2

var integer1 = 22;
var integer2 = 12;
if (integer1 > integer2){
    console.log ("the first integer is grater");
    
} else if (integer1 == integer2) {
    
}else {
    console.log("the second integer is grater")
    
}

// qno 3

var number = prompt("Enter the number");
if (number == 0) {
    console.log("the number is zero");
    
} else if (number >= 1 ) {
    
    console.log("the number is positive");
    
} else if (number < 0){
    
    console.log("the number is negative");
    
}

// qno 4

var greeting;
var hour = 13;
if(hour < 18) {
      alert("Good day")
}else  {
    alert("Good evening")
}

// qno 5

var time = 1900;
if( time >= 0000 && time <=1200){
    console.log("Good Morning")
}
else if ( time >= 1200 && time < 1700){
    console.log("Good Afternoon")
}
else if ( time >= 1700 && time < 2100){
    console.log("Good Evening")
}
else if ( time >= 2100 && time <= 2359){
    console.log("Good Night")
}else{
    console.log("enter the right time")
}

// qno 6

var correctP = "hamza";
var userInputPassword = prompt("Enter the password");
if (userInputPassword == "") {
    alert("Please enter the correct password")
} else if (userInputPassword == correctP ) {
    alert("Correct! The password you entered matches the original password")
}
else {
    alert("Incorrect password")
}


