"use stric"; // Declarando esto desactivamos el uso de Hoisting

//* Hoisting
// Podemos primero usar una variable y posteriormente despúes de haber sido utilizada podemos declararla, ya que cuando trabajamos con variables una parte es declarar la variable y otra es utilizarla. (Podemos usar una variable y despúes declararla).

/**
 * todo Usar var por eso no es recomendable para declarar una variable para evitar caer en el hositin y asi mismo evitar confuciones.
 * todo Lo recomendable es que todas nuestras definiciones de variables esten al inicio y depues se utilicen.
 */

// var x; // Declarar la variable.
x = 10; // Inicializamos el valor de la variable.

console.log(x);

var x;

//* Usando let
//! No funciona si la declaramos con let
//? let y = 10;
//? console.log(y);

//? var y;

//* Otra variante con let
//! Utilizando let el concepto de Hoisting no funciona
//z = 10;
// console.log(z);
// let z;
