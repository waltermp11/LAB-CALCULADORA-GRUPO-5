const prompt = require("prompt-sync")();

//variable operacion resultado
let operacionResultado = 0;
let estadoCajero = true;

let nombre = prompt("Digite su nombre: ");
console.log("Hola, ", nombre);

//Separador

while (estadoCajero) {

  let numero1 = Number(prompt("Ingrese numero 1: "));
  let operacion = prompt("Ingrese la operacion a desarrollar: ");
  let numero2 = Number(prompt("Ingrese numero 2: "));

  if (operacion == "+") {
    operacionResultado = numero1 + numero2;
    console.log("El resultado de la operacion es: ", operacionResultado);
  } else if (operacion == "-") {
    operacionResultado = numero1 - numero2;
    console.log("El resultado de la operacion es: ", operacionResultado);
  } else if (operacion == "*") {
    operacionResultado = numero1 * numero2;
    console.log("El resultado de la operacion es: ", operacionResultado);
  } else if (operacion == "/") {
    operacionResultado = numero1 / numero2;
    console.log("El resultado de la operacion es: ", operacionResultado);
  } else {
    console.log("No se reconoce la operacion");
  }

  let continuar = prompt("Desea continuar? (si/no): ");
    if (continuar.toLowerCase() === "no") {
        estadoCajero = false;
    }

}

console.log("Gracias por usar el cajero, hasta luego ", nombre);
