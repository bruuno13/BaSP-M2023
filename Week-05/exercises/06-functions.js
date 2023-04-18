console.log('--EXERCISE 6: Functions');

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y 
guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/
console.log('-Exercise 6.a:');

function sum (a, b) {
    return a + b;
}
var resultsum = sum(10, 10);
console.log(resultsum);

/*b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es 
un número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar el valor 
NaN como resultado*/
console.log('-Exercise 6.b:');

function sum1(a, b) {
    if (!isNaN(a) && !isNaN(b)){
        return a + b;
    } else {
        return alert('NaN');
  }
}

var num1 = sum1(7 , 7);
console.log(num1);

/* c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un 
número entero.*/
console.log('-Exercise 6.c:');

function validateInteger(num){
    if(Number.isInteger(num)){
        return true;
    }else{
        return false;
    }
}

var num = 10.2
console.log(validateInteger(num));


/* d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c.
 y que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar 
 el número convertido a entero (redondeado).*/ 
console.log('-Exercise 6.d:');

function sum2(a,b){
    if(!validateInteger(a) || !validateInteger(b)){
        alert('Tiene decimales');
        return Math.round(a) + Math.round(b);
    } else {
    return a + b;
    }
}

var num2 = sum2(7.9 , 5);
console.log(num2);

// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función 
//probando que todo siga funcionando igual que en el apartado anterior.
console.log('-Exercise 6.e:');

function proveSum() {
    var result = sum2(6.7, 10); 
    console.log(result); 
}

proveSum();