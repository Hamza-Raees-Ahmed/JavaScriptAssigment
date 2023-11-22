// QNO 1
let Fname = prompt("Enter your First name");
let Lname = prompt("Enter your last name");
let fullName = Fname + ' ' + Lname;
alert("Welcome to  " + fullName.toLocaleUpperCase());

// QNO 2
let mobileName = prompt("Enter your Mobile name and model");
alert("Length of string is " + mobileName.length);

// Qno 3
let word = 'pakistani';
console.log(word.indexOf('n'));


// // QNO 4
let word2 = 'HELLO WORLD'
console.log(word2.lastIndexOf('L'))


// Qno 5
let word3 = 'pakistani';
console.log("character at index 3 is " + word3.charAt(3).toUpperCase())


// QNO 6
let Fname1 = prompt("Enter your First name");
let Lname2 = prompt("Enter your last name");
let fullName1 = Fname1.concat(" " + Lname2)
alert("Welcome to  " + fullName1)

// Qno 7
let word4 = 'Hyderabad'
let word5 = word4.replace('Hyder', 'Islam')
console.log("the word is " + word5)


// QNO 8
let msge = 'Ali and Sami are best friends. They play cricket and play together';
let upmsge = msge.replaceAll('and', '&')
console.log(upmsge)

// QNO 9
let str = '472';
console.log(+str)
console.log(typeof +str)
console.log(str.parseInt())

// QNO 10

let input = prompt("enter the name of any fruits")
alert(input.toLocaleUpperCase())


// Qno 11
let input1 = prompt("enter the name of any fruits")[0]
alert(input1.toUpperCase())

// QNO 12
let word6 = 56.33;
let updatedWord6 = word6.toString();
console.log(word6)
console.log(updatedWord6.replace('.', ''))

// QNO 13
let userInput = prompt("Enter your user name")
for (let i = 0; i < userInput.length; i++) {
    const charcode = userInput.charCodeAt(i);
    if (charcode === 33 || charcode === 44 || charcode === 46 || charcode === 64) {
        console.log("enter the valid user name without ht specail charcater")
    }
}


// QNO 14

let itemArry = ['cake', 'biscuits', 'chocalate', 'chips', 'patties']
let inputUser = prompt("Welcome to hamza bakery , seacrch for items in bakkery")

if (itemArry[inputUser] === inputUser[inputUser]) {
    alert("here is your item " + inputUser + ' index is ' + itemArry.indexOf(inputUser))
} else {
    alert("your item is not avialable " + inputUser)
}


// QNO 15
let ui = prompt("enter the name of any thing")
if (ui.length > 0) {
    const lastword = ui.charAt(ui.length - 1);
    console.log("the last character " + ui + " is " + lastword)
}





