function converdias() {

    dias = parseInt(prompt("Ingrese cantidad de dias"))
    let transfAnios = parseFloat(dias % 365)
    let transfMeses = parseFloat(transfAnios % 30)
    let transfSemanas = parseFloat(transfMeses % 7)

    let anios = Math.trunc(dias / 365);
    let meses = Math.trunc(transfAnios / 30);
    let semanas = Math.trunc(transfMeses / 7)
    let final = (transfSemanas)
   // Mostrar resultados

    //Inicio del comunicado
    document.write("<h1>El resultado de las operaciones matematicas es el siguiente</h1><br>");
//Resta
document.write("<p>Su cantidad de dias equivale a: " +anios+" Años, "+meses+" meses, "+semanas+" Semanas, "+ final+" Días</p>"+"<br>");
alert("Su cantidad de dias equivale a: " +anios+" Años, "+meses+" meses, "+semanas+" Semanas, "+ final+" Días");
console.log("Su cantidad de dias equivale a: " +anios+" Años, "+meses+" meses, "+semanas+" Semanas, "+ final+" Días");

//fin de comunicado
document.write("<h2>Operaciones terminadas</h2><br>");
}

//llamamos a la función
converdias();