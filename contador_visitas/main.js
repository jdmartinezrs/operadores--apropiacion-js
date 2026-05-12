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