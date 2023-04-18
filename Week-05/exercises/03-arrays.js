console.log('--EXERCISE 3: ARRAYS');

//a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
//"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 
//(utilizar console.log).
console.log('-Exercise 3.a:');

var mounth = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.log(mounth[4], mounth[10])

//b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log('-Exercise 3.b:');

var mounth = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

mounth.sort()

console.log(mounth);

// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
console.log('-Exercise 3.c:');

var mounth = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

mounth.unshift ('2022');
mounth.push('2023');

console.log(mounth);

// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log('-Exercise 3.d:');

var mounth = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

mounth.shift('Enero');
mounth.pop('Diciembre');

console.log(mounth);

// e. Invertir el orden del array (utilizar reverse).
console.log('-Exercise 3.e:');

var mounth = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

mounth.reverse()

console.log(mounth);

// f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - 
//(utilizar join).
console.log('-Exercise 3.f:');

var mounth = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var resultmounth = mounth.join ('-');

console.log(resultmounth);

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
console.log('-Exercise 3.e:');

var mounth = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

var mounths = mounth.slice(4,11);

console.log(mounths);