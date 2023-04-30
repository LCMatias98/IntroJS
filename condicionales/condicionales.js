/* console.log("Hola prueba") */

/* Ejercicio N°1 */
let numero1 = 15
let numero2 = 10

if(numero1 > numero2){
    console.log(`El numero ${numero1} es mayor a ${numero2}`)
} else{
    console.log(`El numero ${numero2} es mayor a ${numero1}`)
}

/* function comprarNumero (numero1, numero2){
    if(numero1 > numero2){
        console.log(`El numero ${numero1} es mayor a ${numero2}`)
    }else{
        console.log(`El numero ${numero2} es mayor a ${numero1}`)
    }
}
comprarNumero(8,25)
 */
/* Ejercicio N°2 */

if(numero1 === numero2){
    console.log(`El numero ${numero1} es igual a ${numero2}`)
}else{
    console.log(`El numero ${numero1} es diferente al ${numero2}`)
}
/* Ejercicio N°3 */

if(numero1 > numero2){
    console.log(`El numero ${numero1} es mayor a ${numero2}`)
} else if(numero2 > numero2){
    console.log(`El numero ${numero2} es mayor a ${numero1}`)
} else if( numero1=numero2){
    console.log(`Los numeros son iguales`)
}
/* Ejercicio N°4 */

function numeroMasChico(numero1, numero2, numero3){
    if(numero1 < numero2 && numero1 < numero3){
        return numero1;
    }else if(numero2 < numero1 && numero2 < numero3){
        return numero2;
    }else{
        return numero3;
    }
}
let numerito = numeroMasChico(25,30,18)
console.log(`El numero más chico es ${numerito}`)

/* Ejercicio N°5 */

let persona1 ={
    nombre: "Lucas",
    edad: 24,
    altura: 1.77
}

let persona2 ={
    nombre: "Flor",
    edad: 22,
    altura: 1.55
}

 if(persona1.altura > persona2.altura){
    console.log(`${persona1.nombre} tiene más altura que ${persona2.nombre}`)
 }else{
    console.log(`${persona2.nombre} tiene más altura que ${persona1.nombre}`)
 }
   
/* Ejercicio N°6 */
/* Ejercicio N°7 */
/* Ejercicio N°8 */
/* Ejercicio N°9 */
/* Ejercicio N°10 */
/* Ejercicio N°11 */
/* Ejercicio N°12 */
/* Ejercicio N°13 */