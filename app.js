
// Assignments Chapter31-37

//  Assignments Chapter 31-34

/* Task 1 Write a program that displays current date and time in 
your browser */

// var date = new Date();
// document.write(date);

/* Task 2 Write a program that alerts the current month in words. 
For example December */

// var date = new Date();
// month = date.getMonth();
// var months = [ "January", "Februray", "March", "April", "May", "June", "July", "August"," September", "October", "November", "December"];
// alert(months[month]);

/* Task 3 Write a program that alerts the first 3 letters of the current
day, for example if today is Sunday then alert will show Sun. */

// var date = new Date();
// getDay = date.getDay();
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// alert(" Today is "+days[getDay].slice(0,3));

/* Task 4  Write a program that displays a message “It’s Fun day” if 
its Saturday or Sunday today. */

// var date = new Date();
// getDay = date.getDay();
// alert(getDay)
// if(getDay == 0 || getDay == 6){
//     document.write('It’s Fun day');
// }

/*Task 5 Write a program that shows the message “First fifteen 
days of the month” if the date is less than 16th of the month 
else shows “Last days of the month”. */

// var date  = new Date();
// var getDay = date.getDay();
// var firstOrLastDays = getDay >= 16 ? 'First fifteen days of the month' : 'Last days of the month';
// alert(firstOrLastDays)


/*Task 6 Write a program that determines the minutes since 
midnight, Jan. 1, 1970 and assigns it to a variable that 
hasn't been declared beforehand. Use any variable you like 
to represent the Date object. */

// var date = new Date()
// var milliseconds = date .getTime();
 
// minutesSince1970 = milliseconds / (1000 * 60)
// console.log(Math.floor(minutesSince1970) + " minutes since Jan 1 1970");

/*Task 7 Write a program that tests whether it's before noon and 
alert “Its AM” else “its PM”. */

// var date = new Date();
// var hours = date.getHours();
// var ampm = hours >= 12 ? 'its PM' : 'Its AM';
// alert(ampm)


/*Task 8 Write a program that creates a Date object for the last day 
of the last month of 2020 and assigns it to variable named 
laterDate. */

// var laterDate = new Date('December 31, 2020"');
// document.write(laterDate)

/*Task 9 Create a date object of the starting date of this Ramadan 
and alert the number of days past since 1st Ramadan?
Note: 1st Ramadan was on June 18, 2015 */

// var ramadan_1st = new Date("June 18, 2015");
// var dateSince1970 = new Date();
// var millisecondsSinceRamadan_1st = ramadan_1st.getTime()
// var timeSince1970 = dateSince1970.getTime()

// diffTime = timeSince1970 - millisecondsSinceRamadan_1st

// var daysPassedSince = diffTime/(1000 * 60 *60 *24);

// document.write(Math.floor(daysPassedSince) + "  days have been passed since first Ramadan of 2015")



/*Task 10 Write a program that displays in your browser the 
seconds that elapsed between the reference date and the 
beginning of 2015. */

// var dateSinceReference = new Date("December 5, 2015");
// var dateBeg2015 = new Date("January 1, 2015");
// var millisecondsSinceReference = dateSinceReference.getTime()
// var millisecondsSince2015 = dateBeg2015.getTime()
// var timeElapsed = millisecondsSinceReference - millisecondsSince2015;
// var timeElapsedInSeconds = timeElapsed/1000;

// document.write(timeElapsedInSeconds +" Seconds had passed Since beginning of 2015 to reference date")


/*Task 11 Create a Date object for the current date and time. 
Extract the hours, reset the date object an hour ahead and 
finally display the date object in your browser. */


// var date = new Date();
// var hours = date.getHours()
// document.write('Current Time: ' + date +'<br>');

// date.setHours(hours + 1)
// document.write('Time 1 hour Ahead:' +date)



/*Task 12 Write a program that creates a date object and show the 
date in an alert box that is reset to 100 years back? */

// var date = new Date();

// var year = date.getFullYear()
// document.write('Current date: ' + date +'<br>');
// date.setFullYear(year - 100)
// document.write('date 100 years back:' +date)


/*Task 13 Write a program to ask the user about his age. Calculate 
and show his birth year in your browser. */

// var userAge = 21;
// var date = new Date();
// var year = date.getFullYear()
// var birthYear = year - userAge;
// document.write('your age is: '+userAge +'<br>')
// document.write('your birth year is: '+birthYear)


// idea make full birth year month and days 


/* Task 14  Write a program to generate your K-Electric bill in your
browser. All the amounts should be rounded off to 2 
decimal places. Display the following fields:
a. Customer Name
b. Current Month
c. Number of units
d. Charges per unit
e. Net Amount Payable (within Due Date)
f. Late Payment Surcharge
g. Gross Amount Payable (after Due Date)
Where,
Net Amount Payable (within Due Date) = Number of units * Charges per unit
& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
*/
// var date = new Date();

// document.write('<h1> K-Electric bill </h1>')
// var customerName = 'ABC';
// var currentMonth = date.getMonth();
// var numberOfUnits = 410;
// var chargesPerUnit = 16;
// var latePaymentSurge = 350;
// var dueDateNetPayable =numberOfUnits * chargesPerUnit;
// var AfterDueDateGrossPayable =dueDateNetPayable + latePaymentSurge;

// document.write('Customer Name '+ customerName + '<br>')
// document.write('Month '+ customerName + '<br>')
// document.write('Number of Units '+ numberOfUnits + '<br>')
// document.write('Charges per Unit '+ chargesPerUnit + '<br><br>')
// document.write('Net Amount payable (with due date): '+ dueDateNetPayable + '<br>')
// document.write('Late payment surge '+ latePaymentSurge + '<br>')
// document.write('Gross Amount payable ( after with due date): '+ AfterDueDateGrossPayable + '<br>')


// Assignments Chapter 35-37 


/*1. Write a function that displays current date & time in your 
browser. */

//// function definition
// function displayDateTime(){

//     var date = new Date()
//     document.write(date);

// }
//// function call
// displayDateTime();

/*Task 2  Write a function that takes first & last name and then it 
greets the user using his full name. */

// function displayDateTime(firstName, lastName){   
//     var fullName = firstName+ ' ' + lastName;
//     document.write("Welcome here "+ fullName);
// }
// displayDateTime("Damsaz Ali", "Bughio");

/*Task 3 Write a function that adds two numbers (input by user) 
and returns the sum of two numbers. */

// var num1 = +prompt("enter the Num1")
// var num2 = +prompt("enter the Num2")

// function add(firstNum, secondNum){
//     var sum = firstNum + secondNum;
//     return document.write(sum);
// }
// add(num1,num2);


/*Task 4 Write a function that takes three arguments num1, num2 
& operator & compute the desired operation. Return and 
show the desired result in your browser. */

// var num1 = +prompt("enter the Num1")
// var num2 = +prompt("enter the Num2")
// var operator = prompt("enter the Num2")

// function calc(firstNum, secondNum, opt){
//     var sum;    
    
//     if(opt == "+"){
//         sum = firstNum + secondNum;
//         return document.write(sum);
//     }
//     else if(opt =="-"){
//         sum = firstNum - secondNum;
//         return document.write(sum);
//     }
//     else if(opt =="*"){
//         sum = firstNum * secondNum;
//         return document.write(sum);
//     }else if(opt =="/"){
//         sum = firstNum / secondNum;
//         return document.write(sum);
//     }
// }
// calc(num1,num2,operator);

/*Task 5 Write a function that squares its argument. */

// function square(num){
//     var numSquare = num * num;
//     return document.write(numSquare);    
// }
// square(10);

/*Task 6 Write a function that computes factorial of a number. */

// function factorial(num){
//     var fact=1;
//     var num;
     
//     for(var i=1; i<=num; i++){
//         fact = fact * i;            
//     }
//     document.write(`factorial of ${num}! is: ${fact}`);

// }
// factorial(5);

/*Task 7 Write a function that take start and end number as inputs 
& display counting in your browser. */

// function counting(startNum, endNum){

//     for(var startNum ; startNum<= endNum; startNum++){
//         document.write(' '+startNum);
//     }

// }
// counting(1,10)


/*Task 8 Write a nested function that computes hypotenuse of a 
right angle triangle.
Hypotenuse2 = Base2 + Perpendicular2 
Take base and perpendicular as inputs.
Outer function : calculateHypotenuse()
Inner function: calculateSquare()*/

// function calculateHypotenuse(Base, Perpendicular){
   
//     // calc square of number 
//     function calculateSquare(num){
//        var square = num * num;
//        return square;
//     }

//     // calc the square of  base and perp    
//     var Base2 = calculateSquare(Base);
//     var Perpendicular2 = calculateSquare(Perpendicular);

//     // formula 
//     var Hypotenuse2 = Base2 +  Perpendicular2;
    
//     //  taking square root of Hypotenuse2
//     Hypotenuse = Math.sqrt(Hypotenuse2);
//     document.write(Hypotenuse)

// }

// // function call 
// calculateHypotenuse(3, 4);


/*Task 9 Write a function that calculates the area of a rectangle.
 A = width * height
 Pass width and height in following manner:
    i. Arguments as value
    ii. Arguments as variables
 */

// function areaRectangle(width, height){
//     var Area = width * height;

//     document.write(Area);
// }

//  i. Arguments as value
// areaRectangle(3, 4)

//  i. Arguments as variables
// var width = 3, 
//     height = 4;
// areaRectangle(width, height)

/*Task 10 Write a JavaScript function that checks whether a passed 
string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as 
forward, e.g., madam. */

// function checkPalindrome(string) {

//     // find the length of a string
//     var len = string.length;
//     var loop =0;
//     // loop through half of the string
//     for (var i = 0; i < len / 2; i++) {
       
//         // check if first and last string are same
//         if (string[i] != string[len - 1 - i]) {
//             loop++;
//             document.write('It is not a palindrome');
//         }
//     }
//     if(loop ==0){
//         document.write('It is a palindrome');
//     }
// }

// // take input
// var string = "level";

// // call the function
// checkPalindrome(string);


/*Task 11 Write a JavaScript function that accepts a string as a 
parameter and converts the first letter of each word of the 
string in upper case. 
EXAMPLE STRING : 'the quick brown fox'
EXPECTED OUTPUT : 'The Quick Brown Fox' */

// function titleCase(string){
//     var spiltedString = string.split(" ");    
//     var titleCaseArr = [];
//     for(var i = 0; i< spiltedString.length; i++){
//          var titleCaseString = spiltedString[i].slice(0,1).toUpperCase() + spiltedString[i].slice(1).toLowerCase();
//           titleCaseArr.push(titleCaseString);
//     }
//     document.write(string +'<br>')
//     document.write(titleCaseArr.join(" "))
// }

// titleCase("the quick brown fox");

/*Task 12 Write a JavaScript function that accepts a string as a 
parameter and find the longest word within the string. 
EXAMPLE STRING : 'Web Development Tutorial'
EXPECTED OUTPUT : 'Development' */

// function findLongestString(){
//     string ="Web Development Tutorial";
//     var speltString = string.split(" ");
    
//     var len =0;
//     var longest = 0;
//     for(var i = 0; i < speltString.length; i++){
              
//         if(speltString[i].length > len){
//             var len = speltString[i].length;
//             longest = speltString[i];
//         }
//     }
    
//     console.log(longest)

// }
// findLongestString()

/*Task 13 Write a JavaScript function that accepts two arguments, a 
string and a letter and the function will count the number of 
occurrences of the specified letter within the string. 
Sample arguments : 'JSResourceS.com', 'o' */

// function occurrence(string, letter){
//     var j=0;
//     for(i=0; i< string.length; i++){
//         var splitString = string.split('')
//         // console.log(splitText[0]);
//         if(splitString[i] == letter){    
//             j++;          
//         }   
//     }
//     console.log(j);
// }
// var string = "JSResourceS.com";
// var letter = 'o';
// occurrence(string, letter)



/*Task 14 The Geometrizer
Create 2 functions that calculate properties of a circle, using 
the definitions here.
Create a function called calcCircumference:
• Pass the radius to the function.
• Calculate the circumference based on the radius, and output 
"The circumference is NN".
Create a function called calcArea:
• Pass the radius to the function.
• Calculate the area based on the radius, and output "The area 
is NN".
Circumference of circle = 2πr
Area of circle = πr2 */

// function calcCircumference(r){
//     var circumference = 2 * Math.PI * r;
//     console.log(circumference);
// }

// function calcArea(r){
//     var areaOfCircle = Math.PI * r * r;
//     console.log(areaOfCircle)
// }

// var radius =4;
// calcCircumference(radius)
// calcArea(radius)



