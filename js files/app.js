//////////////////////////////////app calculator/////////////////////////////////
// calcular el bmi o imc del usuario
//Calculator section
let bmiData = [];

// Storage 
if (localStorage.getItem("bmiData")) {
    bmiData = JSON.parse(localStorage.getItem("bmiData"));
}

// Array de parametros de los resultados del BMI
const categorybmi = [
    { resultado: "Bajo Peso", range: [0, 18.5] },
    { resultado: "Peso optimo", range: [18.5, 25] },
    { resultado: "Peso alto", range: [25, 30] },
    { resultado: "Obesidad", range: [30, Infinity] }
];

// Funcion de operaciones de la calculadora de BMI
function calculateBMI() {
    // Input values 
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    // Operation
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    // Determine BMI category
    determineBMICategory(bmi, categorybmi);
}

// Funcion para encontrar en el rango el resultado usando el metodo find
function determineBMICategory(bmi, categorybmi) {
    const category = categorybmi.find(function(resultado) {
        return bmi >= resultado.range[0] && bmi < resultado.range[1];
    });
    // Mostrar resultado
    document.getElementById("result").innerHTML = "Su BMI es " + bmi + " (" + category.resultado + ")";
    // Record BMI data
    const bmiRecord = {
        height: document.getElementById("height").value,
        weight: document.getElementById("weight").value,
        bmi: bmi,
        category: category.resultado,
        date: new Date().toLocaleDateString()
    };
    bmiData.push(bmiRecord);
    // Save BMI data to local storage
    localStorage.setItem("bmiData", JSON.stringify(bmiData));
}

