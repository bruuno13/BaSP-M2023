console.log('--EXERCISE 5: FOR');

/* a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript 
para mostrar una alerta utilizando cada una de las palabras.*/
console.log('-Exercise 5.a:');

var week = ['mondy','tuesday','wednesday','thursday','friday'];
for(var i=0; i < week.length; i++){
     console.log(week[i]);
}

/* b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra 
modificada.*/
console.log('-Exercise 5.b:');

var week1 = ['mondy','tuesday','wednesday','thursday','friday'];

for(var i=0; i < week1.length; i++){
 week1[i] = week1 [i][0].toUpperCase() + week1[i].substring(1);
 alert(week1[i])
}

/* c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo  con un 
bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta  
con la cadena completa.*/
console.log('-Exercise 5.c:');

var week2 = ['mondy','tuesday','wednesday','thursday','friday'];
var sentence = ' ';

for(var i=0; i < week2.length; i++){
sentence += week2[i] + '';
}
alert(sentence)
console.log(week2);

/* d. Crear un array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición,  
es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array,  desde el número 0 
hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).*/ 
console.log('-Exercise 5.d:');

var numb = [];

for(var i=0; i < 10; i++){
     numb.push(i);
}
console.log(numb);