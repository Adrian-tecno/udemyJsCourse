// * Operadores Relacionales (Comparación)
let a = 5;
let b = "5";
console.log(a);
console.log(b);

// ? Operadores igualdad ==
// Solo compara valores, y hace una conversión si es necesario
console.log("a == b -> ", a == b);
// String interpolation
console.log(`${a} == ${b} -> ${a == b}`);

// ? Operador igualdad estricta o exacto
// Se compara el valor y el tipo de dato
console.log("a === b -> ", a === b);
// String interpolation
console.log(`${a} === ${b} -> ${a === b}`);

// ? Operadores distintos
// Compara valor y convierte el tipo de dato si es necesario
console.log(`${a} != ${b} -> ${a != b}`); // Detecta que no son distinto, o sea son iguales aunque uno sea string

// ? Operador distinto exacto
// COmpara el valor y el tipo de dato
console.log(`${a} !== ${b} -> ${a !== b}`); // Detecta la diferencia que hay entre ambos, es mas meticuloso

// ? Operador menor que
console.log(`${a} < ${b} -> ${a < b}`);

// ? Operador menor o igual que
console.log(`${a} <= ${b} -> ${a <= b}`);

// ? Operador mayor que
console.log(`${a} > ${b} -> ${a > b} `);

// ? Operador mayor o igual que
console.log(`${a} >= ${b} -> ${a >= b} `);
