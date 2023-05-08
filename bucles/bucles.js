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

/* let numeroIngresado = parseInt(prompt("ingrese un numero para encontrar sus primos"))
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

console.log(numerosPrimos) */

/* Ejercicio 6 */

/* const arrayNumeros = [1,2,3,4,5,6,7,8,9,10]
console.log(arrayNumeros)
for(let i=0; i <= arrayNumeros.length; i++){
    console.log(arrayNumeros[i])
} */
/* 
Ejercicio 7 */
/* 
const arrayNumeros = [1,2,3,4,5,6,7,8,9,10]

for(let i=0; i <= arrayNumeros.length-1; i++){
    console.log(arrayNumeros[i]*2) 

} */

// Ejercicio 8
/* 
const familia = [
                {nombre: "Dante",parentesco:"El Padre",edad:50,profesion:"Enfermero"},
                {nombre: "Isabel",parentesco:"La Madre",edad:50,profesion:"Enfermera"},
                {nombre: "Leonardo",parentesco:"El Hmno",edad:50,profesion:"Mecanico"},
                {nombre: "Nicolas",parentesco:"El Hmno",edad:50,profesion:"Estudiante"},
                {nombre: "Lucas",parentesco:"El Hmno",edad:50,profesion:"Programador Full Stack Java"}
]
// console.log(familia)

for (let persona of familia){
    console.log(`Hola soy ${persona.nombre}, en mi familia soy ${persona.parentesco} tengo ${persona.edad} años de edad y mi profesion es ${persona.profesion}`)
} */

 // Ejercicio 9

/*  const arrayNumeros = [1,2,3,4,5,6,7,8,9,10]

 for(let i =0;i < arrayNumeros.length ;i++ ){
    if(arrayNumeros[i] % 2 !=0){
        console.log(arrayNumeros[i])
    }
 } */

 // Ejercicio 10
/* 
 Realizar un programa que permita la entrada de números y calcule la suma de los números pares por
un lado y los impares por otro, el ingreso de dato finaliza cuando el usuario ingresa un 0.  */

/* let numero = parseInt(prompt("Ingrese un numero"))
let numerosIngresados = []

while(numero){
    numerosIngresados.push(numero)
    numero = parseInt(prompt("Ingrese numero"))
}

console.log(numerosIngresados)


let numerosImpares = 0
let numerosPares = 0
for(let i =0;i < numerosIngresados.length ;i++ ){
    if(numerosIngresados[i] % 2 !=0){
    numerosImpares +=  numerosIngresados[i]
    }else if(numerosIngresados[i] % 2 ===0){
        numerosPares += numerosIngresados[i]
    }
}
console.log(`La suma de los numeros impares es: ${numerosImpares}`)
console.log(`La suma de los numeros pares es: ${numerosPares}`) */


// Ejercicio 11 y 12

const arrayNumeros = [10,8,400,50,60,85,100,54,80,90]

let numeroMasAlto = 0
let numeroMasPequeño = arrayNumeros[0]

for (let numero of arrayNumeros){
    if(numeroMasAlto  <  numero){
    numeroMasAlto = numero
    }
}

for (let i=0; i<arrayNumeros.length ; i++){
    if(numeroMasPequeño  >  arrayNumeros[i]){
    numeroMasPequeño=arrayNumeros[i]
    }
}
console.log(numeroMasAlto)
console.log(numeroMasPequeño)