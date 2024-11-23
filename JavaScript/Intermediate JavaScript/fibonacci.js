
function fibonacciGenerator(n) {
    var fibSequence = [];
    if (n ===  0) {
        console.log(fibSequence);
        return;
    }
    if (n === 1) {
        fibSequence.push(0);
    }
    else if (n === 2) {
        fibSequence.push(0);
        fibSequence.push(1);
    }
    else {
        for (var i = 1; i <= n ; i++) {
            if (i == 1) {
                fibSequence.push(0);
            }
            else if (i == 2) {
                fibSequence.push(1)
            }
            else {
                fibSequence.push(fibSequence[i - 3] + fibSequence[i - 2]);
            }
        }
    }
    console.log(fibSequence);
}