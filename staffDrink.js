// Milk
var pureMilk = 0;
let riceMilk = 0;
let oatMilk = 0;
let coconutMilk = 0;

// Sugar
let blueSugar = 0;
let originalSugar = 0;
let vanillaSugar = 0;
let brownSugar = 0;

// Toppings
let originalBoba = 0;
let brownBoba = 0;
let waterChestnut = 0;

// Syrup
let orange = 0;
let passionFruit = 0;
let redGrapefruit = 0;
let whiteGrapefruit = 0;

// Coffee Beans
let cometBean = 0;
let siriusBean = 0;

// Teas
let Oolong = 0;
let Jasmine = 0;

// Powders
let matchaPowder = 0;
let cocoaPowder = 0;

// Others
let coconutWater = 0;
let sparklingWater = 0;
let companion = 0;

// Calculate drinks
document.addEventListener('DOMContentLoaded', function() {
    let calculateButton = document.getElementById('btn1');
    let deleteButton = document.getElementById('btn2');

    let brownSugarLatteColdElement = 0;
    calculateButton.addEventListener('click', function() {
        brownSugarLatteColdElement = parseInt(document.getElementById('brownSugarLatteCold').value) || 0;

        pureMilk = brownSugarLatteColdElement * 210;
        console.log(pureMilk);
    });

    deleteButton.addEventListener('click', function() {
        document.getElementById('brownSugarLatteCold').value = '';

        brownSugarLatteColdElement = 0;
        pureMilk = 0;

        console.log("Value Reset");
        console.log('pureMilk: ', pureMilk);
    });
});

