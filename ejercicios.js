/*Un sitio web comienza con un contador de visitas en 100. 
En un día recibe 25  visitas adicionales, 
luego pierde 10 por un error de registro, 
y finalmente se  duplican las visitas. 

Representa esta situación y determina cuál es el valor final del  contador.
 */

let contadorVisitas = 100;

let dia1 = contadorVisitas + 25

contadorVisitas = dia1

let errorRegistro = contadorVisitas - 10

contadorVisitas = errorRegistro;

let multiplicacionVisitas = contadorVisitas * 2;

contadorVisitas = multiplicacionVisitas;

console.log(contadorVisitas);

// 1. Programa para calcular el área y el perímetro de un terreno rectangular

let base = parseFloat(prompt("Ingrese la base del terreno en metros:"));
let altura = parseFloat(prompt("Ingrese la altura del terreno en metros:"));

let area = base * altura;
let perimetro = 2 * (base + altura);

console.log("Área del terreno: " + area + " metros cuadrados");
console.log("Perímetro del terreno: " + perimetro + " metros");

alert(
  "Área: " + area + " m²\n" +
  "Perímetro: " + perimetro + " m"
);


// 2. Programa para calcular el promedio de tres notas

let nota01 = parseFloat(prompt("Ingrese la primera nota:"));
let nota02 = parseFloat(prompt("Ingrese la segunda nota:"));
let nota03 = parseFloat(prompt("Ingrese la tercera nota:"));

let promedio1 = (nota01 + nota02 + nota03) / 3;
console.log("El promedio del estudiante es: " + promedio1);

alert("El promedio del estudiante es: " + promedio1);

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
let suma1 = division + multiplicacion;
console.log("Paso 4 -> 6 + 6 =", suma1);

// Paso 5: Resolver resta
let resultadoFinal = suma1 - 4;
console.log("Paso 5 -> 12 - 4 =", resultadoFinal);

// Resultado final
console.log("Resultado final:", resultadoFinal);



//Punto D

//Ejercico 2: Conversor de tiempo

const segundos = 7200;

let minutos = segundos / 60;
let horas = segundos / 3600;
let dias = segundos / 86400;

console.log("segundos" + segundos);
console.log("minutos" + minutos);
console.log("horas" + horas);
console.log("dias" + dias);

alert(
  "Segundos: " + segundos +
  "\nMinutos: " + minutos +
  "\nHoras: " + horas +
  "\nDías: " + dias
);


//Ejercicio 4: Estadisticas de calificaciones
const nota1 = 4.5;
const nota2 = 3.8;
const nota3 = 2.9;
const nota4 = 4.0;

let suma = nota1 + nota2 + nota3 + nota4;
let promedio = suma / 3;
let operacion = (nota1 + nota2) * (nota3 + nota4) / 2;

console.log("La primera nota es: " + nota1);
console.log("La segunda nota es: " + nota2);
console.log("La tercera nota es: " + nota3);
console.log("La cuarta nota es: " + nota4);

console.log("La suma de las notas es: " + suma);
console.log("El promedio de las notas es: " + promedio);
console.log("El resultado de la operacion es : " + operacion);

alert(
  "La suma de las notas es: " + suma +
  "\nEl promedio de las notas es: " + promedio +
  "\nEl resultado de la operacion es : " + operacion
);
/**Ejercico 1: Calculadora de gastos de viaje 
Un grupo de amigos realiza un viaje con los siguientes costos fijos: 
• Transporte: $120.000 
• Alojamiento: $200.000 
• Alimentación: $150.000 
El total debe dividirse en partes iguales entre 4 personas. Además, cada persona  entregará $130.000 y se debe calcular el sobrante. 
Requerimiento: 
• Usa constantes para los costos y la cantidad de personas. 
• Usa variables para el total, el aporte individual y el sobrante. 
 */

const transporte = 120000
const alojamiento = 200000
const alimentacion = 150000
const cantidadPersonas = 4

let aporteIndividual = (transporte + alojamiento + alimentacion) / cantidadPersonas
console.log(aporteIndividual);

let aporte = 130000

let restante = aporte- aporteIndividual 

console.log(restante)


/**Ejercicio 3: Producción de una fábrica 
Una máquina produce 250 piezas por hora. 
En 8 horas de trabajo se necesita calcular: 
• El total de piezas fabricadas. 
• Cuántas cajas de 12 piezas se llenan.
GFPI-F-135 V04 
  

• Cuántas piezas quedan sueltas. 
Requerimiento: 
• Usa constantes para la producción por hora, las horas trabajadas y la capacidad de las cajas. 
• Usa variables para el total de piezas, cajas llenas y piezas sobrantes. 
 */

const produccionPiezasMaquinaHora = 250
const horasTrabajadas = 8;
const capacidadCaja = 12;

let totalPiezasFabricadas = produccionPiezasMaquinaHora * horasTrabajadas

let totalCajasLlenadas = Math.floor(totalPiezasFabricadas / capacidadCaja)

let piezasSobrantes = totalPiezasFabricadas % capacidadCaja;

console.log("Total piezas fabricadas:", totalPiezasFabricadas);
console.log("Cajas llenas:", totalCajasLlenadas);
console.log("Piezas sobrantes:", piezasSobrantes);