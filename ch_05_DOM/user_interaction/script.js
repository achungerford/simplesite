
// passing the boolean value from user to variable, answer
var answer = confirm("Would you like to continue?");

// asking user to input infomation
var name = prompt("What is your full name?");

// in case user enters no info, you can set a default response
// if the user clicks "cancel" or presses ESC, prompt() returns null
var noName = prompt("What is your full name?", "John Doe");