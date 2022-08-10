// 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
// alert("Un Mensaje")


// 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).

// document.write("Hello World ")

// 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.


// document.write("la suma de 3 + 5 es: ", 3+5)


// 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»

// let usuario = prompt("Ingrese un nombre")
// document.write("Hola  " +usuario)

// 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
// let x = parseInt(prompt("Ingrese el 1er Numero"))
// let y = parseInt(prompt("Ingrese el 2do Numero"))

// document.write("la suma es " +(x + y) );


// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

// let x = parseInt(prompt("Ingrese el 1er Numero"))
// let y = parseInt(prompt("Ingrese el 2do Numero"))

// if ( x > y ){ 
//     document.write("el ier numero ingresado es mayor")
// } else {
//     document.write("el 2do numero es mayor")
// }


// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

// let numero1 = parseInt(prompt("Ingrese el 1er Numero"))
// let numero2 = parseInt(prompt("Ingrese el 2do Numero"))
// let numero3 = parseInt(prompt("Ingrese el 3er Numero"))

// if ( numero1 == numero2 && numero2 == numero2) {
//     document.write("Los numeros ingresados son iguales")    
// }

// if ( numero1>numero2 && numero1>numero3) {
//     document.write( "El mayor numero ingresado es: " +numero1 )
// } 
// if ( numero2>numero1 && numero2>numero3) {
//     document.write( "El mayor numero ingresado es: " +numero2 )
// } 
// if ( numero3>numero1 && numero3>numero2) {
//     document.write("El mayor numero ingresado es: " +numero3 )
// } 


// 8.- Escribe un programa que pida un número y diga si es divisible por 2
// PREGUNTAR A SERGI/ ALAN que onda con el cero
// let numero = parseInt(prompt("Ingrese un Nro Entero"));

// // if (numero == 0) {
//     // document.write("El Nro ingresado es CERO");
// // } else {
//     if (numero % 2 === 0) {
//         document.write("El Numero ingresado es Divisible en 2");
//     } else {
//         document.write("El Nro Ingresado NO es Divisible en 2");
//     }
// }


// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

// let frase0 =  prompt("Ingrese una frase");
// let frase = frase0.toLowerCase();
// let i=0;
// let longitudfrase = frase.length;
// let contadorvocales=0;

// while ( i < longitudfrase ) {
//     if ( frase.substring(i, i+1) == "a" || frase.substring(i, i+1) == "e" || frase.substring(i, i+1) == "i" || frase.substring(i, i+1) == "o" || frase.substring(i, i+1) == "u") {
//                 contadorvocales++;
//     }
//     i++;
// }
// document.write(" La Frase Ingresada tiene esta cantidad de vocales: " +contadorvocales)

// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

// let dividendo = parseInt(prompt("Ingrese el Dividendo: "));    
// let divisor = parseInt(prompt("Ingrese el Divisor: 2, 3, 5 o 7: "));

// if (dividendo == "0") {
//     document.write("El Nro Ingresado es CERO")
// } else {
//     switch (divisor) {
//         case 0:
//             document.write("El Divisor ingresado en CERO, lo cual es una indefinición")
//             break;
//         case 2:
//             if (dividendo % 2 == 0) {
//                 document.write("El Numero ingresado ES DIVISIBLE EN 2");
//             } else {
//                 document.write("El Numero ingresado NO ES DIVISIBLE EN 2");
//             }
//             break;
//         case 3:
//             if (dividendo % 3 == 0) {
//                 document.write("El Numero ingresado ES DIVISIBLE EN 3");
//             } else {
//                 document.write("El Numero ingresado NO ES DIVISIBLE EN 3");
//             }
//             break;
//         case 5:
//             if (dividendo % 5 == 0) {
//                 document.write("El Numero ingresado ES DIVISIBLE EN 5");
//             } else {
//                 document.write("El Numero ingresado NO ES DIVISIBLE EN 5");
//             }
//             break;
//         case 7:
//             if (dividendo % 7 == 0) {
//                 document.write("El Numero ingresado ES DIVISIBLE EN 7");
//             } else {
//                 document.write("El Numero ingresado NO ES DIVISIBLE EN 7");
//             }
//             break;

//         default:
//             alert("DIVISOR NO ESTÁ EN LAS OPCIONES INDICADAS");
//     }
// }


// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

// let dividendo = parseInt(prompt("Ingrese el Nro a Analizar: "));


// if (dividendo == "0") {
//     document.write("EL NUMERO INGRESADO ES CERO '\n' ")

// } else {
//     document.write("El Numero ingresado ES DIVISIBLE en: ");
//     document.write("<br>");


//     if (dividendo % 2 == 0) {
//         document.write("2 <br>");
//     }

//     if (dividendo % 3 == 0) {
//         document.write("3 <br>");
//     }

//     if (dividendo % 5 == 0) {
//         document.write("5 <br>");
//     }

//     if (dividendo % 7 == 0) {
//         document.write("7 <br>");
//     }
// }

     
    
         
        
        
