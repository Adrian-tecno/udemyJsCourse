// ? Sentencia if-else_if-else
let miNumero = 40;

// * Revisar si el número es positivo

if (miNumero > 0) {
  console.log(`Velor positivo ${miNumero}`);
} else if (miNumero < 0) {
  console.log(`Valor negativo ${miNumero}`);
} else {
  console.log(`Valor cero ${miNumero}`);
}

//* Algoritmo Dia de la Semana
let diaSemana = 4;

if (diaSemana == 1) {
  console.log("Lunes");
} else if (diaSemana == 2) {
  console.log("Martes");
} else if (diaSemana == 3) {
  console.log("Miércoles");
} else if (diaSemana == 4) {
  console.log("Jueves");
} else if (diaSemana == 5) {
  console.log("Viernes");
} else if (diaSemana == 6) {
  console.log("Sábado");
} else if (diaSemana == 7) {
  console.log("Domingo");
} else {
  console.log(`Día semana erroneo ${diaSemana}`);
}
