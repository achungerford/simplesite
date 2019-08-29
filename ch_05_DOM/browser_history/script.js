// window.history object
alert("You've visited: " + history.length + "web pages this browser session");

// history object has 3 methods: foward(), back(), go()
history.forward();

history.back();

// can accept strings
history.go("www.espn.com");

// can accept numbers
history.go(-3);     //go back 3 pages
history.go(2);      // go forward 2 pages
