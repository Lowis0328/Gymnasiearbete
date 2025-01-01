function BMRMale(Weight, Height, Age) { //Harris Benedict Equation Male
    return 88.362 + (13.397 * Weight) + (4.799 * Height) - (5.677 * Age);
}

function BMRFemale(Weight, Height, Age) { //Harris Benedict Equation Female
    return 447.593 + (9.247 * Weight) + (3.098 * Height) - (4.330 * Age);
}

function calculateBMR(Gender, Weight, Height, Age) {
    if (Gender === 'male') {
        let BMR = BMRMale(Weight, Height, Age);
        document.getElementById('result').innerHTML = "Ditt ungefärliga BMR är : " + Math.round(BMR) + " Kalorier/Dag";
    }
    else if (Gender === 'female') {
        let BMR = BMRFemale(Weight, Height, Age);
        document.getElementById('result').innerHTML = "Ditt ungefärliga BMR är : " + Math.round(BMR) + " Kalorier/Dag";
        console.log(BMR);
    }
}

function OnClickBMR()
{
    let kön = document.getElementById('genderSelect').value;
    let ålder = document.getElementById('age').value;
    let vikt = document.getElementById('weight').value;
    let längd = document.getElementById('height').value;
    calculateBMR(kön, vikt, längd, ålder);
}

document.getElementById('Calculate').addEventListener('click', OnClickBMR);