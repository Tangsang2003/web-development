var output = [];
var count = 1;
function fizzbuzz() {
    if (count % 3 === 0 && count % 5 != 0) {
        output.push("fizz");
    }
    else if (count % 5 === 0 && count % 3 != 0) {
        output.push('buzz');
    }
    else if (count % 3 === 0 && count % 5 === 0) {
        output.push('fizzBuzz');
    }
    else {
        output.push(count);
    }
    count++;
    console.log(output);
}