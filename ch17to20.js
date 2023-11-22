// // QNO 1
let arry = ['','','']
// console.log(arry)

// QNO 2
let arr = [123,123,1234]
// // console.log(arr)

// QNO 3
for(let i = 1; i<=10; i++){
    // console.log(i)
}

// QNO 4
let inputTableNum = +prompt("Enter a number to show is mutiplication table")
let inputLength = +prompt("Enter the length for the table")
for(let i = 1; i<=inputLength; i++){
    console.log(inputTableNum+'x'+i+'='+(i*inputTableNum))
}


// QNO 5
let fruits = ['apple','banana','mango','stawberry','cake']
for(let i = 0; i <= fruits.length - 1; i++){
    console.log('index 0 is '+fruits[0])
    // console.log('index 1 is '+fruits[1])
    // console.log('index 2 is '+fruits[2])
    // console.log('index 3 is '+fruits[3])
    // console.log('index 4 is '+fruits[4])
}


// Qno 6
for(let i=1; i<=15; i++){
    console.log(i)
}

for(i=10; i>=1; i--){
    console.log(i)
}
 for(let i=1; i<=20; i+=2){
    console.log(i)
    
 }

for(let i=0; i<=20; i+=2){
    console.log(i)
}

 for(let i=2; i<=20; i+=2){
    console.log(i+'k')
    
 }

// QNO 7
 let itemArry = ['cake','biscuits','chocalate','chips','patties']
 let inputUser = prompt("Welcome to hamza bakery , seacrch for items in bakkery")
  
if(itemArry[inputUser] === inputUser[inputUser]){
    alert("here is your item "+inputUser+' index is '+itemArry.indexOf(inputUser))
}else{
    alert("your item is not avialable "+inputUser)
}


// QNO 8

let numbers = [24,53,78,91,12]
console.log(numbers)
let largest = numbers[0];
for(let i=1; i<numbers.length; i++){
    if(numbers[i] > largest){
        largest = numbers[i];
    }
}

console.log('the largest number is '+largest)

// QNO 9
let smallNumbers = [24,53,78,91,12]
let Smallest = smallNumbers[0];
for(let i=1; i<smallNumbers.length; i++){
    if(smallNumbers[i] < Smallest){
        Smallest = smallNumbers[i];
    }
}
console.log(smallNumbers)
console.log('the smallest number is  '+Smallest)



// QNO 10
let five = 5;
for(let i=1; i<=20; i++){
    console.log(i*five)
}

