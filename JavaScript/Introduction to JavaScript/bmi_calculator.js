function bmiCalculator (height, weight) {
    var bmi = weight / Math.pow(height, 2);
    return bmi;
}
var bmi = Math.round(bmiCalculator(1.8, 65));
console.log("Your BMI is: " + bmi);