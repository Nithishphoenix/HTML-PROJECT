//This is an alert
//Single Line Comment
/*
Multi Line Comment
JS Introduction
*/
//dynamically typed language
//variables - 8 bytes
let score = 0; //initialization

//assignment
// score = 10.5 //1010
// score = 'no score'

const pi = 3.14;

//console.log("score is " + score);

/*
Operators
---------
Arithmetic Operators:  +  -  *  **  /  %  ++  --
Assignment Operators: =  +=  -=  *=  /=  %=  **=
Comparison Operators: ==  ===  !=  !==  >  <  >=  <=  ?:
Logical Operators: && || !
Bitwise Operators: &  |  ~  ^  <<  >> >>>
*/

//user input
// let name = prompt("whats your name?")
// console.log('hi ',name)

// let tickets = prompt('how many tickets do you want?')
// console.log("you should pay ", Number(tickets)*20)

// let a = prompt("Enter a number")
// console.log(Number(a)+10)

//String - Group of Characters

let str1 = "Strive not to be a success, ";
let str2 = "but rather to be a value";

/*
Partitioning String
slice(start, end) str.slice(4,10) or (-4)
substring(start, end)
substr(start, length)
str.replace("strive""Aim") to replace the word or replace all
str.UPPERCASE()
str.LOWERCASE()
str.length
str.trim()or trimStart() or trimEnd()
str.padEnd(7,0)
str.padStart()
str.charAt(1)
str.charCodeAt(1)
str.indexof()
str.lastIndexof()
str.search('not')
str.includes('not')
str.anchor()
str.startwith()
*/
// Template Literals
// Introduced in 2015 with ECMAScript6 or ES6


//let firstname = "tamil"
//let lastname ="selvan"
//let city = "pollachi"
//console.log(firstname + " "+ lastname +" "+ "lives in"+" " +city )

//backtick(`)
//let msg =`${firstname} ${lastname} lives in ${city}`
//console.log(msg)

//multiline string
/*let msg=`happy
birthday`
console.log(msg)*/

//single and double quotes in string
/*msg=`cat's name is "toto"`
console.log(msg)*/


//arrays
let num =10
let name="india"

let cities=["chennai","coimbatore","pollachi"]

let marks=[20,30,40,50,60]
console.log(cities.length)
console.log(marks.length)
console.log(cities[2])
//last elements in array to find
console.log(marks[marks.length-1])

//mix of int and string
let arr=[2,1,3,'a',"abc",[2,3,6]]
console.log(arr)
console.log(arr[5][1])

//2d array
let matrix =[[2,3,4],[5,6,7],[8,9,10]]
console.log(matrix[2][1])

//array methods
let array =['a','b','c','d','e']

//push method-add elements to end

array.push('f')
console.log(array)

//pop - remove elements and from end and returns the value
console.log(array.pop())


//shift- remove elements start of the array
//returns removed the value

console.log(array.shift())
console.log(array)


//unshift- adds elements to the  start of the array
//returns new length

console.log(array.unshift('a'))
console.log(array)

//delete
//delete array[2]
//console.log(array)

//splice
array.splice(2,2)//array delete 2 elements starting at index 2
console.log(array)

array.splice(1,1,'m')
console.log(array)

array.splice(1,2,'x','y')
console.log(array)

array.splice(1,0,'b')
console.log(array)

//slice (starting index,ending index)
//ending index not included
console.log(array.slice(1,3))

//reverse
array.reverse()
console.log(array)

//join-converts array to string
 let str = array.join()
 console.log(str)

 //split - converts string to array
 let str3 ="g,t,r,e"
 let arr3 =str3.split(',')
 console.log(arr3)

 //concat and spread operator
 let firstArr = [1,2,3];
 let secondArr = [4,5,6];

 let joinedArr =[firstArr,secondArr]
 console.log(joinedArr)


 joinedArr=firstArr.concat(secondArr)
 console.log(joinedArr)

 let joined = [...firstArr,...secondArr]
 console.log(joined)

