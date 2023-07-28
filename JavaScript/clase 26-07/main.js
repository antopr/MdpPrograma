const prompt=require("prompt-sync")({sigint:true});
/**REALIZAR UNA FUNCION QUE PERMITA SEGUN LA ACCIONES DADA 
 * POR EL USUARIO MOSTRAR POR PANTALLA LA TABLA DE MULTIPLICAR, SUMAR, RESTAR, DIVIDIR,
 * DADO EL VALOR INGRESADO POR EL USUARIO
 */

let numero = parseInt(prompt("Ingrese un número: "));
let opcion = prompt("Ingrese la operación a realizar con el número ingresado: ('suma - resta - multiplicar - dividir') ");

const mostrarOperacion = (numero, opcion) =>{
    switch (opcion){
        case 'suma':
            let numDos = parseInt(prompt("Ingrese otro número para realizar la suma: "));
            console.log(numero + " + " + numDos + " = ",numero + numDos);
            break;
        case 'resta':
            let numTres = parseInt(prompt("Ingrese otro número para realizar la resta: "));
            console.log(numero + " - " + numTres + " = ",numero - numTres);
            break;
        case 'multiplicar':
            let x = 1;
            while(x<=10){
                console.log(numero + " x " + x + " = " ,x * numero);
                x++;
            }
            break;
        case 'dividir':
            let y = 1;
            while(y<=10){
                console.log((numero*y ) + " / " + numero + " = ",  y);
                y++;
            }
            break;
        default:
            console.log("Opción incorrecta.");
            break;
    }
}
mostrarOperacion(numero, opcion);