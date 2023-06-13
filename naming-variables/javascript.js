console.log('Hellow, World!');

//let message = 'Hello'; // Storing a string in a variable calles 'message'
//let user = 'John', age = 25, message2 = 'Hello'; // Not recomeneded doing it this way.

let user = 'John';
let age = 25;
let message = 'Hello'
message = 'World!'; // uses last declared value. Overrrides last value.

alert(message);

// Copy data over;

let x = 'Test1';
 alert('X = ' + x);

let y = x;
alert('Y = ' + y);
// y = x

// cant decalre a variable twice:

/*
let z = 1;
let z = 2;
*/

// variable naming - cannot start with a number**
// apple and APPLE are differnet variables 

let $ = 1;
let _ = 2;
alert($ + _); // Adds together the integers

// Declaring constants

const myBirthday = '05.10.1991';

// cant re-assign
// myBirthday = '1.1.1.1';

