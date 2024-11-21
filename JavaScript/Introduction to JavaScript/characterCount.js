para = prompt("Enter a paragraph or a tweet: ");
var maxCount = 280;
var paraLength = para.length;
var remainLength = maxCount - paraLength;
alert("You have written " + paraLength + " characters. You have " + remainLength + " characters left.");
// We can use para.slice(lower_bound, upper_bound) to slice the string to valid length.
