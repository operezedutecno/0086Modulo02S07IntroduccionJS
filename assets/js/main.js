// alert("Incluir Javascript desde archivo")

const porcRet = 5

// Si el valor de la constante se intenta cambiar, nos va a fallar
// porcRet = 6

console.log("Procentaje", porcRet);

var nombre = "José"
var apellido = "Pérez"
var edad = 34
var activo = true
var mensaje = ""

var apellidoMaterno;
console.log("ApellidoMaterno", apellidoMaterno); // Esta variable tiene valor indefinido (undefined)

apellidoMaterno = null
console.log("ApellidoMaterno", apellidoMaterno); // Esta variable tiene valor Nulo (null)

if(activo) {
    mensaje = ", SI se encuentra activo"
} else {
    mensaje = ", NO se encuentra activo"
}

console.log("El colaborador "+nombre+" "+apellido+" tiene "+edad+" años"+mensaje)



var n1 = prompt("Por favor ingresar el primer número")
var n2 = prompt("Por favor ingresar el segundo número")
console.log(n1, n2);
var operacion = prompt("¿Que operación desea realizar?\n 1=Suma\n 2=Resta \n 3=Multiplicación \n 4=División")


if(operacion == 1) {
    console.log("Resultado de la suma es: "+sumar(n1, n2));
} else if(operacion == 2) { // Restar
    console.log("Resultado de la resta es: "+restar(n1, n2));
} else if(operacion == 3) { // Multiplicar
    console.log("Resultado de la multiplicación es: "+multiplicar(n1, n2));
} else if(operacion == 4) { // Dividir
    console.log("Resultado de la división es: "+dividir(n1, n2));
} else {
    alert("Ingresó una operación incorrecta")
}

function sumar(num1, num2) {
    var suma = Number(num1) + Number(num2)
    return suma
}

function restar(num1, num2) {
    return Number(num1) - Number(num2)
}

function multiplicar(num1, num2) {
    return Number(num1) * Number(num2)
}

function dividir(num1, num2) {
    return Number(num1) / Number(num2)
}

