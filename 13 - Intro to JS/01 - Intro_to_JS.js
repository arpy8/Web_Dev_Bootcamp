// 1. Concatenating a string 
let str1 = "My name is ";
let str2 = " Arpit";
alert(str1+str2);

// 2. Length of a string
let str = prompt("Enter something. ");
alert("Length of the string is "+str.length); 

// 3. Slicing a string
alert(prompt("Enter something. ").slice(0,40));

// 4. String Case Conversion
let name = prompt("Enter Name");
alert("Hello "+name.slice(0,1).toUpperCase()+name.slice(1,name.length).toLowerCase());

// 5. Odd Even
let num = prompt("enter a number");
alert((Number(num)%2==0)?"even":"odd");

// 6. Dog age to human Age conversion
let dogAge = prompt("Enter dog age"); 
alert("Your dog's age in human years is "+((Number(dogAge)-2)*4+21));

// 6. Increment and Decrement
let num2 = 5;
alert(num2++);
alert(num2--);

// 7. Functions
function temp (value) {
    alert("Hi "+value);
}
var name_ = "Arpit";
temp(name_);

// Age in days, months and weeks
function lifeInWeeks(age) {
    age = 90-age;
    console.log("You have "+(age*365)+" days, "+(age*52)+" weeks, and "+(age*12)+" months left.");
}

// BMI Calculator
function bmiCalculator (weight, height) {
    var bmi = weight/Math.pow(height,2);
    return bmi;
}