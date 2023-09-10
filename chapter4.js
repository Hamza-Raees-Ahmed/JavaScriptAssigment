// // qno 1 

document.write("<h1> Rules for naming JS variables</h1>");

var nums ="numbers";
var signDollar = "$";
var hypen = "_";
document.write("variable names can only contain"+ " " +nums +" "+ signDollar +" and "+ " "+hypen+". for example $my_1stVariables");
var letters = "letters";
document.write("<br>")
document.write("Varibale must begin with a  "+letters+" "+signDollar+" "+hypen+" "+"for example: $name,_name or name");
document.write("<br>");
var sensitive = "sensitive";
var  jsKeyword = "JS keywords"
document.write("variable names are case"+sensitive);
document.write("<br>");
document.write("variable name should not be the "+ jsKeyword);