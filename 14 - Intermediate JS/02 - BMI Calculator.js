function bmiCalculator (weight, height) {
    var bmi = weight/(Math.pow(height,2));
 
    var result = `Your BMI is ${bmi}, `;
    
    if (bmi<18.5)
        return  result+"so you are underweight.";    
    
    else if (bmi>18.5 && bmi<24.9)
        return  result+"so you have a normal weight.";    
    
    else if (bmi>24.9)
        return  result+"so you are overweight.";
}