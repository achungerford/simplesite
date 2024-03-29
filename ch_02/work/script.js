// Reading a property of the "document" object.
// Read <title> and use it an alert.
alert(document.title);

// Using the "write" method to add a sentence to the "document" object.
document.write("The quick brown fox jumps over the lazy dog.");


/* Variables in JS
====================================*/
var productName = "Leather wallet";

alert(productName);

// incrementing and decrementing variables by 1
var productCount = 10;

// rewrite productCount = productCount + 1
productCount++;

// rewrite producCount = producCount - 1
productCount--;

// increment and decrement by any other value
// rewrite productCount = producCount +/- 5
productCount += 5;
productCount -= 5;

// Concatenate: using the + operator with strings
var firstName = "Barack";
var lastName = "Obama";

var fullName = firstName + " " + lastName;

// numbers get converted to strings if you concatenate them
var age = 58;
alert(firstName + age);