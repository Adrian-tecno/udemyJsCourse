//? Matrices
//* Declaracion de una matriz
let matriz = [[], []];

//* Modificar los valores
//todo Renglon 0
matriz[0][0] = 100;
matriz[0][1] = 200;
matriz[0][2] = 300;

//todo Renglon 1
matriz[1][0] = 400;
matriz[1][1] = 500;
matriz[1][2] = 600;

//* Leer valores
console.log(`Elemento[0][1] = ${matriz[0][1]}`);
console.log(`Elemento[1][2] = ${matriz[1][2]}`);

//! Simplificacion de matrices
//* Declaramos una matriz
let matriz1 = [
  [1000, 2000, 3000],
  [4000, 5000, 6000],
];

//* Leer valores
console.log(`Elemento[0][1] = ${matriz1[0][1]}`);
console.log(`Elemento[1][2] = ${matriz1[1][2]}`);

//==========================================================================================

//? Iteración de matrices

//? Numero de Renglones
console.log(matriz.length);
//? Numero de columnas (Depende del renglon seleccionado)
console.log(matriz[0].length);
console.log(matriz[1].length);

//*Renglones

for (let renglon = 0; renglon < matriz.length; renglon++) {
  //*Columnas
  for (columna = 0; columna < matriz[renglon].length; columna++) {
    console.log(
      `Elemento [${renglon}][${columna}] = ${matriz[renglon][columna]}`,
    );
  }
}
