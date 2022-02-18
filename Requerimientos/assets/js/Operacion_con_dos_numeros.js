// Se crean las variables y operaciones respectivas.
let num1 = 1;
let num2 = 2;
let suma = num1 + num2;
let resta = num1 - num2;
let division = num1 / num2;
let multiplicacion = num1 * num2;
let modulo = num1 % num2;

//Pedimos el ingreso de datos al usuario y asignamos la restriccion correspondiente
//Capturamos el primer numero
num1= parseInt(prompt("ingrese un número mayor a cero"))
//Añadimos un ciclo while para cuando no se cumpla la condicion
while (num1 <=0) {
    num1= parseInt(prompt("ingrese un número mayor a cero, el anterior no cumplia con el criterio!"))
}

//Capturamos el segundo numero
num2= parseInt(prompt("ingrese un número mayor a cero"))
//Añadimos un ciclo while para cuando no se cumpla la condicion
while (num2 <=0) {
    num2= parseInt(prompt("ingrese un número mayor a cero, el anterior no cumplia con el criterio!"))
}


//Mostrar por consola
//resultados
console.log(`los resultados son:
en suma ${suma},
en resta ${resta},
en division ${divi},
en multiplicacion ${multi} y
en modulo ${modulo}
`)