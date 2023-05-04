/* let numero = prompt("Ingrese un numero")

for(i =1; i<= 10; i++ ){
    console.log(i * numero)
} */


/* Ejercicio N°2 */
let numero = parseInt(prompt("Ingrese numero"))
let numerosIngresados = []




while(numero){
    numerosIngresados.push(numero)
    numero = parseInt(prompt("Ingrese numero"))
}



console.log(numero)
console.log(numerosIngresados)


/* Ejercicio 3 */

let numeroGuardado = numerosIngresados.slice(numerosIngresados.length-1)

console.log(numeroGuardado)

let numeroAdivinado = parseInt(prompt("Ingrese Numero a Adivinar"))

let bucle = true

while(bucle){
    if(numeroGuardado[0] == numeroAdivinado){
        alert(`Adivinaste el numero, y el numero es ${numeroGuardado[0]}`)
        bucle = false
    }else if(numeroAdivinado < numeroGuardado[0]){
        numeroAdivinado = prompt(`El numero es menor, intente otro numero`)
    }
    else if(numeroAdivinado > numeroGuardado[0]){
        numeroAdivinado = prompt(`El numero es mayor, intente otro numero`)
    }
}