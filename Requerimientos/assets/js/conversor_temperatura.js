function convertemper() {
    let celcius = parseFloat(0.0)
    let faren = parseFloat(0.0)
    let kelvin = parseFloat(0.0)

    celcius = parseFloat(prompt("Ingrese celcius"))
    kelvin = (celcius + 273.15)
    faren = celcius * (9 / 5) + 32

//Mostrar por consola
//Grados Kelvin
document.write("<p>Su temperatura en grados kelvin es de: " +kelvin +"</p>"+"<br>");
alert("Su temperatura en grados kelvin es de: " +kelvin);
console.log("Su temperatura en grados kelvin es de: " +kelvin);

//Grados farenheit
document.write("<p>Su temperatura en grados kelvin es de: " +faren +"</p>"+"<br>");
alert("Su temperatura en grados kelvin es de: " +faren);
console.log("Su temperatura en grados kelvin es de: " +faren);

}
//llamamos a la funcion
convertemper();