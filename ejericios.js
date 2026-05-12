/*Un sitio web comienza con un contador de visitas en 100. 
En un día recibe 25  visitas adicionales, 
luego pierde 10 por un error de registro, 
y finalmente se  duplican las visitas. 

Representa esta situación y determina cuál es el valor final del  contador.
 */
/*
let contadorVisitas = 100;

let dia1 = contadorVisitas + 25

contadorVisitas = dia1

let errorRegistro = contadorVisitas - 10

 contadorVisitas = errorRegistro ;

let multiplicacionVisitas = contadorVisitas * 2;

 contadorVisitas = multiplicacionVisitas;

console.log(contadorVisitas)
*/

/**Se tiene la expresión matemática siguiente: 
(20+10)/5+3∗2−4(20 + 10) / 5 + 3 * 2 - 4(20+10)/5+3∗2−4  
Tu reto es implementarla en JavaScript y analizar paso a paso en qué orden se  ejecutan las operaciones hasta llegar al resultado final.
 */

// Paso 1: Resolver el paréntesis
let parentesis = 20 + 10;
console.log("Paso 1 -> (20 + 10) =", parentesis);

// Paso 2: Resolver la división
let division = parentesis / 5;
console.log("Paso 2 -> 30 / 5 =", division);

// Paso 3: Resolver la multiplicación
let multiplicacion = 3 * 2;
console.log("Paso 3 -> 3 * 2 =", multiplicacion);

// Paso 4: Resolver suma
let suma = division + multiplicacion;
console.log("Paso 4 -> 6 + 6 =", suma);

// Paso 5: Resolver resta
let resultadoFinal = suma - 4;
console.log("Paso 5 -> 12 - 4 =", resultadoFinal);

// Resultado final
console.log("Resultado final:", resultadoFinal);
