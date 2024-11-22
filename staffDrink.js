// Milk
let pureMilk = 0;
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
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

        brownSugarLatteColdElement = parseInt(document.getElementById('brownSugarLatteCold').value) || 0;

        pureMilk = brownSugarLatteColdElement * 210;
        console.log(pureMilk);

        document.getElementById("pureMilk").value = pureMilk;
    });

    deleteButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        
        document.getElementById('brownSugarLatteCold').value = '';

        brownSugarLatteColdElement = 0; 

        // Reset value of ingredient to 0
        pureMilk = 0;
        coconutMilk = 0;
        oatMilk = 0;
        riceMilk = 0;
        originalSugar = 0;
        blueSugar = 0;
        vanillaSugar = 0;
        brownSugar = 0;
        originalBoba = 0;
        brownBoba = 0;
        waterChestnut = 0;
        redGrapefruit = 0;
        whiteGrapefruit = 0;
        orange = 0;
        passionFruit = 0;
        siriusBean = 0;
        cometBean = 0;
        Oolong = 0;
        Jasmine = 0;
        matchaPowder = 0;
        cocoaPowder = 0;
        coconutWater = 0;
        sparklingWater = 0;
        companion = 0;

        document.getElementById("pureMilk").value = pureMilk;
        document.getElementById("coconutMilk").value = coconutMilk;
        document.getElementById("oatMilk").value = oatMilk;
        document.getElementById("riceMilk").value = riceMilk;
        document.getElementById("originalSugar").value = originalSugar;
        document.getElementById("blueSugar").value = blueSugar;
        document.getElementById("vanillaSugar").value = vanillaSugar;
        document.getElementById("brownSugar").value = brownSugar;
        document.getElementById("originalBoba").value = originalBoba;
        document.getElementById("brownBoba").value = brownBoba;
        document.getElementById("waterchestnut").value = waterChestnut;
        document.getElementById("redGrapefruit").value = redGrapefruit;
        document.getElementById("whiteGrapefruit").value = whiteGrapefruit;
        document.getElementById("orange").value = orange;
        document.getElementById("passionfruit").value = passionFruit;
        document.getElementById("sirius").value = siriusBean;
        document.getElementById("comet").value = cometBean;
        document.getElementById("Oolong").value = Oolong;
        document.getElementById("Jasmine").value = Jasmine;
        document.getElementById("matcha").value = matchaPowder;
        document.getElementById("cocoa").value = cocoaPowder;
        document.getElementById("coconutWater").value = coconutWater;
        document.getElementById("sparkling").value = sparklingWater;
        document.getElementById("companion").value = companion;

        const ingredientList = [pureMilk, coconutMilk, oatMilk, riceMilk, 
                                originalSugar, brownSugar, blueSugar, vanillaSugar,
                                originalBoba, brownBoba, waterChestnut, 
                                redGrapefruit, whiteGrapefruit, orange, passionFruit,
                                siriusBean, cometBean,
                                Oolong, Jasmine,
                                matchaPowder, cocoaPowder,
                                coconutWater, sparklingWater, companion
        ]

        const ingredientListString = ['pureMilk', 'coconutMilk', 'oatMilk', 'riceMilk', 
                                      'originalSugar', 'brownSugar', 'blueSugar', 'vanillaSugar',
                                      'originalBoba', 'brownBoba', 'waterChestnut', 
                                      'redGrapefruit', 'whiteGrapefruit', 'orange', 'passionFruit',
                                      'siriusBean', 'cometBean',
                                      'Oolong', 'Jasmine',
                                      'matchaPowder', 'cocoaPowder',
                                      'coconutWater', 'sparklingWater', 'companion'
]

        for (let i = 0, j = 0; i < ingredientList.length, j < ingredientList.length; i++, j++) {
            console.log("Value Reset");
            console.log(ingredientListString[j], ingredientList[i]);
        }
    });

    // Show Brown Sugar Latte Content
    const brownSugarLatte = document.getElementById('brownSugarLatte');
    const showBrownSugarLatte = document.getElementById('hiddenContent1');

    // Add a click event listener to the button
    brownSugarLatte.addEventListener('click', () => {
        // Toggle the display property
        if (showBrownSugarLatte.style.display === 'none' || showBrownSugarLatte.style.display === '') {
            showBrownSugarLatte.style.display = 'block';
        } else {
            showBrownSugarLatte.style.display = 'none';
        }
    });

    // Show Brown Sugar Oat Latte Content
    const brownSugarOatLatte = document.getElementById('brownSugarOatLatte');
    const showBrownSugarOatLatte = document.getElementById('hiddenContent2');

    // Add a click event listener to the button
    brownSugarOatLatte.addEventListener('click', () => {
        // Toggle the display property
        if (showBrownSugarOatLatte.style.display === 'none' || showBrownSugarOatLatte.style.display === '') {
            showBrownSugarOatLatte.style.display = 'block';
        } else {
            showBrownSugarOatLatte.style.display = 'none';
        }
    });
});

function searchableList() {
    var input, filter;
    input = document.getElementById('searchBox');
    filter = input.value.toUpperCase();
    var ul = document.getElementById("drinkList");
    var li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (let i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName("button")[0];
        var txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

