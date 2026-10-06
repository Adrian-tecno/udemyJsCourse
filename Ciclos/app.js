//? Sumar los primeros 5 numeros, con suma acumulativa

let maximo = 5,
  acumladorSuma = 0;
console.log("Suma iterativa");
for (let numero = 1; numero <= maximo; numero++) {
  //*Imprimimos la suma parcial
  console.log(`${acumladorSuma} + ${numero}`);
  //* Realizamos la suma parcial
  acumladorSuma += numero;
  console.log(acumladorSuma);
}
console.log(acumladorSuma);

//! While

let numeros = 1,
  maximos = 5,
  acumladorSumas = 0;
while (numeros <= maximos) {
  //* Imprimimos la suma parcial
  console.log(`${acumladorSumas} + ${numeros}`);
  //* Realizamos la suma parcial
  acumladorSumas += numeros;
  console.log(acumladorSumas);
  numeros++;
}

//! dowhile
let num = 1,
  max = 5,
  acSum = 0;
do {
  //* Imprimimos la suma parcial
  console.log(`${acSum} + ${num}`);
  //* Realizamos la suma parcial
  acSum += num;
  console.log(acSum);
  num++;
} while (num <= max);
console.log(acSum);
