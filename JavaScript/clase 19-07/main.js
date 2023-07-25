/**Clase 19-07 */

/**Ejercicio 1 */
var numUno = 12;
var numDos = 4;
var numTres = 6;


if(numUno>numDos && numUno>numTres){
    console.log("El mayor número es: ", numUno);
} else if(numDos>numUno && numDos>numTres){
    console.log("El mayor número es: ", numDos);
} else if(numTres>numUno && numTres>numDos){
    console.log("El mayor número es: ", numTres);
} else{
    console.log("Los números son iguales.")
}


/**Ejercicio 2 */
var numero = 4;

if (numero % 2 == 0){
    console.log("Es par");
} else {
    console.log("Es impar");
}


/**Ejercicio 3 */
var opcion = 'resta';
var x = 10;
var y = 2;
switch (opcion){    
    case 'suma':
        console.log("La suma entre "+ x + " y " + y + " es: " + (x + y));
        break;
    case 'resta':
        console.log("La resta entre "+ x + " y " + y + " es: " + (x - y));
        break;
    case 'multiplicacion':
        console.log("La multiplicación entre "+ x + " y " + y + " es: " + (x * y));
        break;
    case 'division':
        console.log("La división entre "+ x + " y " + y + " es: " + (x / y));
        break;
}