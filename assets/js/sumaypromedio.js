function sumaypromedio() {

    let nume1 = parseFloat(prompt("Ingrese el primer número"))
    let nume2 = parseFloat(prompt("Ingrese el primer número"))
    let nume3 = parseFloat(prompt("Ingrese el primer número"))
    let nume4 = parseFloat(prompt("Ingrese el primer número"))
    let nume5 = parseFloat(prompt("Ingrese el primer número"))

    let sumas = (nume1 + nume2 + nume3 + nume4 + nume5)
    let promedio = (sumas / 5)
   

    //Mostrar resultados.
    //Inicio del comunicado
    document.write("<h1>El resultado de las operaciones matematicas es el siguiente</h1><br>");

    //suma
document.write("<p>Resultado de la suma de los numeros es de: " +nume1+" + "+nume2+" + "+nume3+" + "+nume4+" + "+nume5+" = "+ sumas+"</p>"+"<br>");
alert("Resultado de la suma de los numeros es de: " +nume1+" + "+nume2+" + "+nume3+" + "+nume4+" + "+nume5+" = "+ sumas);
console.log("Resultado de la suma de los numeros es de: " +nume1+" + "+nume2+" + "+nume3+" + "+nume4+" + "+nume5+" = "+ sumas);

//Promedio
document.write("<p>El promedio de los números corresponde a : " +promedio+"</p>"+"<br>");
alert("El promedio de los números corresponde a : " +promedio);
console.log("El promedio de los números corresponde a : " +promedio);

//fin de comunicado
document.write("<h2>Operaciones terminadas</h2><br>");


}
//Llamado a la funcion
sumaypromedio();
