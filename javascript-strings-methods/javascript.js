let text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let length = text.length;

// Slice

let text2= 'Apple, Banana, Kiwi';
let part = text2.slice(7,13);

let text3 = 'Apple, Banana, Kiwi';
let part3 = text3.slice(7);

let text4 = 'Apple, Banana, Kiwi';
let part4 = text4.slice(-12);

let text5 = 'Apple, Banana, Kiwi';
let part5 = text5.slice(-12,-6);


//Substring - Any negative numbers are treated as position 0
let str = 'Apple, Banana, Kiwi';
let sub = str.substring(7,13);

// String substr()
str = 'Apple, Banana, Kiwi';
sub = str.substr(0,5); /// Apple - no longer used

// Repalce string content

let oldText = "Please visit Microsoft!";
let newText = oldText.replace("Microsoft", "Amazon");

oldText = "Please visit Microsoft and Microsoft!";
newText = oldText.replace("Microsoft","Amazon");

// ReplaceAll()
let allText = "I love cats. Cats are very easy to love. Cats are very popular.";

allText = allText.replaceAll("Cats", "Dogs");
allText = allText.replaceAll("cats", "dogs");