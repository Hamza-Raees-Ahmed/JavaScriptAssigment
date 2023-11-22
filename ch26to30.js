// console.log("hamza")

// QNO 1
let userinput = + prompt("enter the positive integer");
 console.log('number'+userinput);
 console.log('round of value'+Math.round(userinput));
 console.log('floor value'+Math.floor(userinput));
 console.log('ceil value of the number'+Math.ceil(userinput));

// QNO 2
let userinput1 = + prompt("enter the negative integer");
 console.log('number'+userinput1);
 console.log('round of value'+Math.round(userinput1));
 console.log('floor value'+Math.floor(userinput1));
 console.log('ceil value of the number'+Math.ceil(userinput1));

// QNO 3
let dice = Math.ceil((Math.random() * 6 )) ;
console.log(dice)

// QNO 4
let coin = Math.ceil(Math.random() * 2);
console.log(coin)


// QNO 5
let randomNumber = Math.ceil(Math.random() * 100);
console.log("randon numbers between 1 to 100 is "+randomNumber)

// QNO 6
let kg = + prompt("enter your weigth in kilograms")
    let upkg= parseInt(kg)
    console.log(upkg)
  

// QNO 8 
 let generates = Math.ceil(Math.random() * 10);
 console.log(generates)
 let userNumber = + prompt("Enter the numbers between 1 to 10")
 if(userNumber == generates){
    alert("congratulation user you enter the correct number")
 }else{
    alert("Wrong number please try agrain")
 }


