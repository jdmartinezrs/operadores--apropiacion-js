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

 contadorVisitas = errorRegistro ;

let multiplicacionVisitas = contadorVisitas * 2;

 contadorVisitas = multiplicacionVisitas;

console.log(contadorVisitas)

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

let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

let promedio = (nota1 + nota2 + nota3) / 3;
console.log("El promedio del estudiante es: " + promedio);

alert("El promedio del estudiante es: " + promedio);