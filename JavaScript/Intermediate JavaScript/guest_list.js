var guestList = ["Ram", "Hari", "Gita"];
var guestName = prompt("Please enter your name! ");
if (guestList.includes(guestName)) {
    alert("You are welcome to the party! ");
}
else {
    alert("You are not welcome to the party. Sorry!");
}