var fizzBuzzArr = []
function for_fuzzBizz() {
    for (var i = 0; i < 100; i++) {
        if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0 ) {
            fizzBuzzArr.push("FizzBuzz");
        }
        else if ((i + 1) % 3 === 0 && (i + 1) % 5 != 0) {
            fizzBuzzArr.push("Fizz");
        }
        else if ((i + 1) % 3 != 0 && (i + 1) % 5 === 0) {
            fizzBuzzArr.push("Buzz");
        }
        else {
            fizzBuzzArr.push(i + 1);
        }
    }
    console.log(fizzBuzzArr);
}