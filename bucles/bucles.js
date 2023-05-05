/* let numero = prompt("Ingrese un numero")

for(i =1; i<= 10; i++ ){
    console.log(i * numero)
} */


/* Ejercicio N°2 */

/* let numero = parseInt(prompt("Ingrese numero"))
let numerosIngresados = []




while(numero){
    numerosIngresados.push(numero)
    numero = parseInt(prompt("Ingrese numero"))
}



console.log(numero)
console.log(numerosIngresados) */


/* Ejercicio 3 */

/* let numeroGuardado = numerosIngresados.slice(numerosIngresados.length-1)

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
} */
/* 
Ejercicio 4 y 5  */

let numeroIngresado = parseInt(prompt("ingrese un numero para encontrar sus primos"))
let numerosPrimos = []

for(let i=0; i <= numeroIngresado; i++){

    if(numeroIngresado % i == 0){
        numerosPrimos.push(i);

    }

}

for (let i = 0; i < numerosPrimos.length; i++) {
    console.log(numerosPrimos[i])

}

if (numerosPrimos.length > 2){
    console.log(`el numero no es primo`)
} else {
    console.log(`el numero es primo`)
}

console.log(numerosPrimos)