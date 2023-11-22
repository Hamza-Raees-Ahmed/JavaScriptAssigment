// console.log("hamza")
// QNO 1
function triangle(a,b,c){
    let s;
    return s = ( a + b + c ) / 2
}
alert(triangle(2,3,5))


// QNO 2
function power(a,b){
  return a*a || b*b
}
alert(power(3,0))
alert(power(0,5))

// QNO 3
function mainFuntion(){
    let a = + prompt("Enter first subject marks")
    let b = + prompt("Enter second subject marks")
    let c = + prompt("Enter third subject marks")
    let result = (a+b+c)/3;
    return result;
}
alert("the average of marks is "+mainFuntion())


// QNO 4
function percentage(){
    let a = + prompt("Enter first subject marks")
    let b = + prompt("Enter second subject marks")
    let c = + prompt("Enter third subject marks")
    let result = ((a+b+c)/300)*100
    return result;
}
alert("the percentage of marks is "+percentage()+'%')


// Qno 5
function kilimeters(){
    let a = + prompt("Enter the numbers in kilometer")
         let result =  a * 1000
        return result;
}
alert("the value is "+kilimeters()+' meters')

// Qno 6
