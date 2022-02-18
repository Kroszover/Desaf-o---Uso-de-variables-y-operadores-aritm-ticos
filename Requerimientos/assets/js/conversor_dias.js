function tercera() {

    dias = parseInt(prompt("Ingrese cantidad de dias"))
    let diferenciaAnos = parseFloat(dias % 365)
    let diferenciaMeses = parseFloat(diferenciaAnos % 30)
    let diferenciasemanas = parseFloat(diferenciaMeses % 7)

    let años = Math.trunc(dias / 365);
    let meses = Math.trunc(diferenciaAnos / 30);
    let semanas = Math.trunc(diferenciaMeses / 7)
    let jou = (diferenciasemanas)
   // Mostrar resultados

}