function bottlesOfMilk(money) {
    var bottlesAfford = "";
    bottlesAfford = "You can afford " + Math.floor(money/1.5) + " bottles of milk.";
    return bottlesAfford;
}
var bottlesICanBuy = bottlesOfMilk(10);
// console.log(bottlesICanBuy);


//Simple BMI calculator

function bmiCalculator(weight, height) {
  return Math.round(weight/(Math.pow(height, 2)));
}
var bmi = bmiCalculator(96, 1.81);
// console.log(bmi);

// Simple love calculator

prompt("What is your name?");
prompt("What is your crush's name?")
var loveScore = (Math.floor(Math.random()*100))+1;
console.log("Your chances of love are " + loveScore + "%.");
