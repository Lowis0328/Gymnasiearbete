function BMRMale(Weight, Height, Age, aktivitetsNivå) { //Harris Benedict Equation Male
    switch(aktivitetsNivå) {
        case "1":
            return 1.2 * (66.5 + (13.75 * Weight) + (5.003 * Height) - (6.75 * Age));
        case "2":
            return 1.375 * (66.5 + (13.75 * Weight) + (5.003 * Height) - (6.75 * Age));
        case "3":
            return 1.55 * (66.5 + (13.75 * Weight) + (5.003 * Height) - (6.75 * Age));
        case "4":
            return 1.725 * (66.5 + (13.75 * Weight) + (5.003 * Height) - (6.75 * Age));
    }
    //return 88.362 + (13.397 * Weight) + (4.799 * Height) - (5.677 * Age);
}

function BMRFemale(Weight, Height, Age, aktivitetsNivå) { //Harris Benedict Equation Female
    switch(aktivitetsNivå) {
        case "1":
            return 1.2 * (655.1 + (9.563 * Weight) + (1.850 * Height) - (4.676 * Age));
        case "2":
            return 1.375 * (655.1 + (9.563 * Weight) + (1.850 * Height) - (4.676 * Age));
        case "3":
            return 1.55 * (655.1 + (9.563 * Weight) + (1.850 * Height) - (4.676 * Age));
        case "4":
            return 1.725 * (655.1 + (9.563 * Weight) + (1.850 * Height) - (4.676 * Age));
    }
    //return (447.593 + (9.247 * Weight) + (3.098 * Height) - (4.330 * Age));
}

function calculateBMR(Gender, Weight, Height, Age, aktivitetsNivå) {
    switch (Gender) {
        case "male":
            let BMRM = BMRMale(Weight, Height, Age, aktivitetsNivå);
            document.getElementById('result').innerHTML = "Ditt ungefärliga BMR är : " + Math.round(BMRM) + " Kalorier/Dag";
            break;
        case "female":
            let BMRF = BMRFemale(Weight, Height, Age, aktivitetsNivå);
            document.getElementById('result').innerHTML = "Ditt ungefärliga BMR är : " + Math.round(BMRF) + " Kalorier/Dag";
            break;
    }
}

function OnClickBMR()
{
    let kön = document.getElementById('genderSelect').value;
    let ålder = document.getElementById('age').value;
    let vikt = document.getElementById('weight').value;
    let längd = document.getElementById('height').value;
    let aktivitetsnivå = document.getElementById('aktivitetsNivå').value;
    calculateBMR(kön, vikt, längd, ålder, aktivitetsnivå);
}

document.getElementById('Calculate').addEventListener('click', OnClickBMR);