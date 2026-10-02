// * Precedencia Operadores

// Como operan en caso que se encuentre varios en una expresión, que se evalua primero y al ultimo en orden.

// ? 1. Parentesis y corchetes
// ? 2. Operadores unarios, como -, ++, --, !
// ? 3. Aritmeticos *, / y %
// ? 4. Aritmeticos + y -
// ? 5. Relacionales <, <=, > y >=
// ? 6. Igualdad == y !=
// ? 7. Lógicos && y ||
// ? 8. Asinación =, =+, -=, *=, etc

// ? Ej. Se revisa de izq a der
let a = 12 / 3 + 2 * 3 - 1;
// Paso 1: división 12/3 = 4
// Paso 2: multiplicación 2 * 3 = 6
// Paso 3: suma 4 + 6 = 10
// Paso 4: resta 10 - 1 = 9
console.log(a);
