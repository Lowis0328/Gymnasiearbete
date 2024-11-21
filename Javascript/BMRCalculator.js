function BMRMale(Weight, Height, Age) { //Harris Benedict Equation Male
    return 88.362 + (13.397 * Weight) + (4.799 * Height) - (5.677 * Age);
}

function BMRFemale(Weight, Height, Age) { //Harris Benedict Equation Female
    return 447.593 + (9.247 * Weight) + (3.098 * Height) - (4.330 * Age);
}

function calculateBMR(Gender, Weight, Height, Age) {
    if (Gender === 'male') {
        return BMRMale(Weight, Height, Age);
    }
    else if (Gender === 'female') {
        return BMRFemale(Weight, Height, Age);
    }
}

console.log(calculateBMR("male", 90, 183, 18));