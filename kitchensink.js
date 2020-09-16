var name = 'Christopher Francis Chio'
const statenumber = 50;

let sumofadded = (5 + 4) + (5 + 4); // variable 'sumofadded' created by adding 5 and 4 twice

function sayHello () { // creates a sayHello fxn to say "Hello World" in page says box
    alert("Hello Chris"); 
    console.log('Hello World!'); 
    console.log(' '); // hello im a spacer :D
}

sayHello.call(); // calls the say hello function into the console

var namepeeps = ['Charles','Abby','James','John'] // array of people 
var agepeeps = ['21', '27', '18', '17'] // array of ages of the array of people :P

function checkAge (namepeeps, agepeeps) { // checks age with respective names if they are of legal age
if (agepeeps < 21) {
alert("Sorry " + namepeeps + ", you aren't old enough to view this page!");
return "Sorry" + ' ' + namepeeps + ' ' + "you aren't old enough to view this page!";
} else if (agepeeps >= 21) {
  return  'Hello' + ' ' + namepeeps + ' ' + "you are able to view this page";
  }
}

for (var x = 0; x < namepeeps.length; x++) { // tells function to work depending on how many people are in the array 
    console.log(checkAge(namepeeps[x], agepeeps[x]))
}

console.log(' '); // hello im a spacer :D

var veggies = ['Zucchini','Asparagus','Potato','Cabbage','Onions','Garlic']; // creating a tale of veggies with an array

for (var y = 0; y < veggies.length; y++) { // displays as much veggies as you want!
  console.log(veggies[y])
}

console.log(' '); // hello im a spacer :D

var myPet = { // putting 2 properties in an imaginary pet
name: 'Bandit',
breed: 'Groanendael'
}

console.log(myPet.name, myPet.breed); // displaying imaginary pet doggo

var namepeeps2 = ['Aaron','Franco','Selina','Erick','Frederick'] // array of my close friends
var agepeeps2 = ['17', '28', '24', '16', '26'] // array of ages of the array of my homies :P

function checkAge2 (namepeeps2, agepeeps2) { // checks age with 2nd group of peeps with their respective names if they are of legal age
if (agepeeps2 < 21) {
alert("Sorry " + namepeeps2 + ", you aren't old enough to view this page!");
return "Sorry" + ' ' + namepeeps2 + ' ' + "you aren't old enough to view this page!";
} else if (agepeeps >= 21) {
  return  'Hello' + ' ' + namepeeps2 + ' ' + "you are able to view this page";
  }
}

console.log(' '); // hello im a spacer :D

for (var x = 0; x < namepeeps2.length; x++) { // tells function to work depending on how many close friends that I have are in the array 
    console.log(checkAge(namepeeps2[x], agepeeps2[x]))
}

console.log(' '); // hello im a spacer :D

function getLength(string) {
   return string.length
}

let stringLength = getLength("hello world");

if (stringLength % 2 === 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}

