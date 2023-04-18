console.log('--EXERCISE 2: STRINGS');

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
console.log('-Exercise 2.a:');

var stri1 = 'my name is Bruno'
var resultstri = stri1.toUpperCase()

console.log(resultstri);

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los 
//primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log('-Exercise 2.b:');

var stri2 = 'i like programming'
var resultstri2 = stri2.substring(0,5)

console.log(resultstri2);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los 
// últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log('-Exercise 2.c:');

var stri3 = 'i am programming in javascript'
var resultstri3 = stri3.substring(27,30) 

console.log(resultstri3);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera 
//letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
//(utilizar substring, toUpperCase, toLowerCase y el operador +).
console.log('-Exercise 2.d:');

var stri4 = 'javascript is a programming language'
var resultstri5 = stri4.toUpperCase() + stri4.toLocaleLowerCase() 

console.log(resultstri5.substring(0,1) + resultstri5.substring(37,72));

//e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
//Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
console.log('-Exercise 2.e:');

var stri6 = 'javascript is a high-level'
var resultstri6 = stri6.indexOf(" ")

console.log(resultstri6)

//f. Crear una variable de tipo string con al menos 2 palabras largas 
//(10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para 
//generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en 
//minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
console.log('-Exercise 2.f:');

var stri7 = 'programming language'

var resultstri7 = stri7.indexOf (" ")

var stri8 = stri7.toUpperCase() + stri7.toLocaleLowerCase() 

var p = stri8.substring(0,1) 

var l = stri8.substring(12,13)

var resultprogram = p + stri7.substring(1,11) + l + stri7.substring(13,20)

console.log(resultprogram)