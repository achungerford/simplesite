// saving the paragraph content as a string
var divContent = document.getElementById("heading").innerHTML;

// demonstrate that divContent contains the string
alert(divContent);

// altering the inner div content
document.getElementById("heading").innerHTML = "Changed the heading content.";