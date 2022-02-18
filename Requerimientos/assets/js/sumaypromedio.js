function cuarta() {

    let nume1 = parseFloat(prompt("Ingrese el primer número"))
    let nume2 = parseFloat(prompt("Ingrese el primer número"))
    let nume3 = parseFloat(prompt("Ingrese el primer número"))
    let nume4 = parseFloat(prompt("Ingrese el primer número"))
    let nume5 = parseFloat(prompt("Ingrese el primer número"))

    let sumas = (nume1 + nume2 + nume3 + nume4 + nume5)
    let promedio = (sumas / 5)
    document.getElementById('Cuartapregunta').innerHTML="La suma de los números es: " + sumas + " y el promedio es : " + promedio


}
//Mostrar resultados.