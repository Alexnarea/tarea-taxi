"use strict"
let dataVehicle = {
    manufacturingYear: Number(prompt("ingrese año de su vehiculo")),
    color: "red",
    model: "Peugeot xr 1.4",
    plateNumber: "PKA-777",
}

function validarTaxi (dataVehicle) {
    let actualYear = 2023
    let years = actualYear - dataVehicle.manufacturingYear

    if (years < 10) {
        return "Puede ser taxi";
    } else {
        return "No puede ser taxi";
    }
}

let result = validarTaxi (dataVehicle);
alert("El resultado de su evaluacion fue: " + result);