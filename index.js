let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};

const students = [bob, sally, paul];

function getAverageGrade (student, courseCode) {
  for (let record of student.transcript) {
    if (record.course === courseCode) {
      let sum = 0;
      for (let grade of record.grades) {
        sum += grade;
      }
      return sum / record.grades.length;
    }
  }
  return -1;
}

function getAssignmentMark (student, courseCode, num) {
  for (let record of student.transcript) {
    if (record.course === courseCode) {
      if (num >= 0 && num < record.grades.length) {
        return record.grades[num];
      }
    }
  }
  return -1;
}

function averageAssessment(students, courseName, assignment) {
  let total = 0, count = 0;

  for (let student of students) {
      for (let course of student.transcript) {
          if (course.course === courseName && course.grades[assignment] !== undefined) {
              total += course.grades[assignment];
              count++;
          }
      }
  }

  if (count > 0) {
    return total / count;
  } else {
    return 0;
  }
}

console.log(getAverageGrade(bob, 'INFO 1603'))
console.log(getAssignmentMark(paul, 'INFO 1600', 2))
console.log(averageAssessment(students, 'INFO 1601', 1));

/*

// const and let

const pi = 3.14

let radius = 7

let area = radius * radius * pi

console.log(area)

// Numbers

let num1 = 0.1341 // float
let num2 = 2344 // integer
let num3 = 1.2e+3 // 12000 scientific notation
let num4 = Infinity // really large number
let num5 = 0b1000111 // binary number
let num6 = 0xFFF // hexadecimal number
let num7 = 9007199254740991n //BigInteger

// Strings

let str1 ="Hello World";
let str2 = 'Hello World';
let str3 = `
    hello 
    world
`;// template literal (backtick above tab key)

console.log(str1, str2, str3);

// String Interpolation

let name = "bob";
let age = 24;

console.log(typeof(name))//string
console.log(typeof(age))//number

console.log(`Hello my name is ${name}, I'm ${age} years old`);
//Hello my name is bob, I'm 24 years old.

console.log(`I was born in ${2020 - age}`)
//I was born in 1966

//Type Coercion

console.log('1' == 1); //true
console.log(1 == true); //true
console.log("false" == false); // "false" is not false
console.log("false" == true); // "false" is not true either

if("false")
   console.log("Hello false!") //but "false" is true enough here

// Hard Comparision

console.log('1' === 1); //false
console.log(1 === true); //false
console.log("true" === true); //false

// If ... Else Statements

let grade = 67;

if( grade < 50){
   console.log('Failed');
}else{
   console.log('Passed');
}

// While and For Loops

let num = 0;

while(num < 10){
  console.log(num);
  num++;
}

for(let i=0; i < 10; i ++){
  console.log(i);
}

for(let i=0; i< 50; i++){
  if(i %3 === 0 && i%5 === 0){ // is divisible by 3 and 5?
    console.log('fizzbuzz');
  }else if(i%3 === 0){ // ok it's not divisible by both how about just 3?
    console.log('fizz');
  }else if(i%5 === 0){ //no? what about just 5 then?
    console.log('buzz');
  }else{              //so its not divisible by 3 or 5 then
    console.log(i);
  }
}

// Date

let nowTimestamp = Date.now();//store the current Date

console.log(nowTimestamp);//unix timestamp in milliseconds 1581291269848

let now = new Date(nowTimestamp);//today's Date object 

//months go from 0 - 11
let date = new Date(2019, 11, 17, 3, 24, 0);//December 17, 2019 03:24:00
//printing the date

console.log(date.toLocaleDateString("en-US"));//12/17/2019
//1 is added to month because January is 0
console.log(` ${now.getDate()} - ${now.getMonth() + 1} - ${now.getFullYear()} `); // 9 - 2 - 2020 

//Calculate difference between two dates in milliseconds
let difference = now - date;
//convert milliseconds to days

let daysBetween = difference * 1.15741e-8;
console.log(daysBetween);//54.6740790437368

// Math

let root = Math.sqrt(9);// 3

let cubed  = Math.pow(2, 3);// 8

let roundDown = Math.floor(12.3453);// 12

let roundUp = Math.ceil(12.3453);// 13

let absolute = Math.abs(-34);// 34

let randNum = Math.random();// random number between 0 and 1

let pi = Math.pi;// pi in radians * 180 to convert to degrees

//generate a random Integer between a supplied range
function randInt(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Functions

function hello() {
  console.log("hello");
}

console.log(hello())

function add(a, b){
  return a + b;//undefined + undefined = NaN
}

// Parameters and Returning a Value

let ans = add(5, 1);
console.log(ans); //6

let ans2 = add();
console.log(ans2); //NaN

// Default Parameters

function add(a, b=10){
  return a + b;
}

console.log(add(5,11)); // logs 16

console.log(add(2));// logs 12

// Callback Functions

function happyPrint(string){
  console.log("😀: "+string);
}
 
function sadPrint(string){
  console.log("😢: "+string);
}
 
//This high-order function adds 2 parameters and passes the answer to the callback
function add(a, b, callback){
    let ans = a + b;
    callback(ans);// call the callback and pass the answer to it
}

//call add passing the callbacks to it
add(5, 10, happyPrint);
add(11, 12, sadPrint);

// Set Intervals

//prints current date
function printDate(){
  console.log(Date().toLocaleTimeString());
}
     
setInterval(printDate, 1000);

// Arrays

let arr0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];// 10 elements

for (let i=0; i< arr0.length; i++) {// for loop
  console.log(arr0[i]);
}

for (let item of arr0) {// for of loop
  console.log(item);
}

let arr1 = [];//empty array
let arr2 = [1, 2, 3, 4, 5, 6, 7];//initialize with elements
let arr3 = [1, 12.9, "Hi", '🎈', ];// heterogeneous array

console.log(arr1[0]);// 1
console.log(arr3[3]);//🎈

// Arry Methods

let arr = [ -5, 16, 33, 42, 103, 344];

console.log(arr.includes(-5));//true

arr.push(11);//adds item to the end

console.log(arr)//[ -5, 16, 33, 42, 103, 344, 11];

let lastItem == arr.pop();//removes last item

console.log(lastItem, arr);//11, [ -5, 16, 33, 42, 103, 344]

arr.unshift(22);//adds item to the front

console.log(arr);//[22, -5, 16, 33, 42, 103, 344]

let firstItem = arr.shift();//removes first item
console.log(firstItem, arr);//22, [-5, 16, 33, 42, 103, 344]

let reversed = arr.reverse();//creates a new array in reverse order 
console.log(reversed);//[344, 103, 42, 33, 16, -5]
console.log(arr.join('-'));//"-5-103-16-33-344-42" joins array with provided separator

// Callback Based Array Methods

let arr = [12, 33, 4, 5, -4, 8, 19, 25];
                
//map() creates a new array from the elements of one without changing the old one
function double(num){
  return num * 2;
}

let doubledArr = arr.map(double); 
console.log(doubledArr);

function isOdd(num){
  return element%2 !== 0; 
}
//Filter takes a test condition and returns only the element which 
//make the condition true
let odds = arr.filter(isOdd);
console.log(odds);

//Returns true or false if any of the elements of the array 
//meets a specified condition
function has5Factor(){
  return ele % 5 === 0;
}

let hasFiveFactor = arr.some(has5Factor);
console.log(hasFiveFactor);

function intCompare(a, b){
 return a - b;
}

//sort function must return either 0, +ve, -ve
let ascending = arr.sort(intCompare)
console.log(ascending);

// Object Literals

let person = {
  // key : value
  "name": "John",
  "age": 12
};

//we can print the values of a key in two ways
console.log(person["age"]);//Using an index
console.log(person.name);//referencing the key as a property

person["weight"] = 70;

person.marks = [67, 34, 55, 89];

let firstMark = person.marks[0];

//mixing array and objects
let people = [
  person,
  {
    name: "Jane",
    age: 23,
    marks: [51, 78, 99, 76]
  }
];

let johnClone = {};//empty object

//copying objects
Object.assign(johnClone, person);

console.log(johnClone);


console.log(people[0].marks[0]);//67

//Create a constructor a functions which builds object for us
function createPerson(name, height, weight) {
  return { name: name, height: height, weight: weight };
}

function calcBMI(weight, height) {
  return weight / (height * height);
}

function avgBMI(people) {
  let sum = 0;
  for (let person of people) {
    //sum the bmi of each person
    sum += calcBMI(person.weight, person.height);
  }
  //calculate average
  return sum / people.length;
}

//create a collection of people
let people = [
  createPerson("Sally", 60, 2.5),
  createPerson("Ben", 81, 3),
  createPerson("Shelly", 50, 1.7)
];

console.log(avgBMI(people));

*/
