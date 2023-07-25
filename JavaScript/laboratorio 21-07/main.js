const prompt=require("prompt-sync")({sigint:true});
/**
 * DADO TRES VALORES INGRESADO POR EL USUARIO SABER CUAL ES EL
 * MAYOR DE ELLOS.
 * 
 * REALIZAR LA TABLA DE MULTIPLICAR DADO UN VALOR POR 
 * EL USUARIO
 * 3 * 1 = 3
 * 3 * 2 = 6
 * 3 * 10 = 30
 * 
 * REALIZAR LA TABLA DE DIVIDIR DADO UN VALOR INGRESADO 
 * POR EL USUARIO.
 * 
*/

/**Ejercicio 1 */
let numeroUno = parseInt(prompt("Ingrese el primer número: "));
let numeroDos = parseInt(prompt("Ingrese el segundo número: "));
let numeroTres = parseInt(prompt("Ingrese el tercer número: "));

if( numeroUno>numeroDos && numeroUno>numeroTres){
    console.log("El primer número ingresado es el mayor: ", numeroUno);
} else if(numeroDos>numeroUno && numeroDos>numeroTres){
    console.log("El segundo número ingresado es el mayor: ", numeroDos);
} else if(numeroTres>numeroUno && numeroTres>numeroDos){
    console.log("El tercer número ingresado es el mayor: ", numeroTres);
} else{
    console.log("Los números ingresados son iguales.");
}

/**Ejercicio 2 */
let numUno = prompt("Ingrese el valor a multiplicar: ");
let x = 1;
while(x<=10){
   console.log( numUno + " x " + x + " =" ,x * numUno);
   x++;
}

/**Ejercicio 3 */
let numDos = prompt("Ingrese el valor a dividir: ");
let y = 1;
while(y<=10){
    console.log( numDos + " / " + y + " =" ,y / numDos);
    y++;
}
