/* Ejercicio N°1 */
let miNombre = "Lucas"

/* Ejercicio N°2 */
let miApellido = "Correa"

/* Ejercicio N°3 */

let miEdad = 24
/* Ejercicio N°4 */

let miMascota = "Mia"
/* Ejercicio N°5 */

let edadMascota = 1
/* Ejercicio N°6 */

console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)
/* Ejercicio N°7 */

nombreCompleto = miNombre + " " + miApellido
console.log(nombreCompleto)
/* Ejercicio N°8 */
let textoPresentacion =  `\n Hola mi nombre es ${nombreCompleto} mi edad es de ${miEdad} años y tengo una mascota que se llama ${miMascota}
y tiene  ${edadMascota} de edad` + ` y su hermano se llama Roco`

console.log(textoPresentacion)

/* Ejercicio N°9 */
let sumaEdades = miEdad + edadMascota
let restaEdades = miEdad - edadMascota
let productoEdades = miEdad * edadMascota
let divisionEdades = miEdad / edadMascota
console.log(`\n La suma es ${sumaEdades} \n la resta es ${restaEdades} \n la multiplicacion es ${productoEdades} \n y la division es ${divisionEdades} \n`)

/* Ejercicio N°10 */

textoPresentacion =`\n La suma de las edades es: ${sumaEdades} \n La resta de las edades es: ${restaEdades} \n El producto de las edades es:${productoEdades} \n La division de las edades es: ${divisionEdades}`
console.log(textoPresentacion)