var count = 99;
function beer() {
    while (count > 1) {
        if (count != 0){
            console.log(count + " bottles of beer on the wall, " + count + " bottles of beer.");
            count--;
            console.log("Take one down and pass it around, " + count + " bottles of beer on the wall.");
        }
        if (count === 1) {
            console.log("1 bottles of beer on the wall, 1 bottles of beer.\nTake one down and pass it around, no more bottles of beer on the wall.");
            count--;
        }
        if (count === 0) {
            console.log("No more bottles of beer on the wall, no more bottles of beer. \nGo to the store and buy some more, 99 bottles of beer on the wall.");
            count--;
        }
    }
}