console.log('--EXERCISE 4: IF ELSE');

// a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 
//mostrar una alerta con el mensaje “Greater than or equal to 0,5” y sino un alerta con el mensaje “Lower than 0,5”.
console.log('-Exercise 4.a:');

var num = Math.random(num);

if(0.5 <= num){
    alert('Greater than or equal to 0,5')
}
else{
    alert('Lower than 0,5');
}

console.log(num);

// b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre 
//los siguientes mensajes de alerta:
console.log('-Exercise 4.b:');

// i. “Bebe” si la edad es menor a 2 años;
// ii. “Niño” si la edad es entre 2 y 12 años;
// iii. “Adolescente” entre 13 y 19 años;
// iv. “Joven” entre 20 y 30 años;
// v. “Adulto” entre 31 y 60 años;
// vi. “Adulto mayor” entre 61 y 75 años;
// vii.“Anciano” si es mayor a 75 años.

var Age = Math.floor(Math.random()* 100); 

if (Age < 2){

    alert('Bebe');

}else if (2 <= Age && Age<= 12){
    alert('Niño');
    
}else if (13 <= Age && Age<= 19){
    alert('Adolescente');

}else if (20 <= Age && Age<= 30) {
    alert('Joven');
    
} else if (31 <= Age && Age<= 60) {
    alert('Adulto');
    
}else if (61 <= Age && Age<= 75) {
    alert('Adulto mayor');

}else{
    alert('Anciano')
}
console.log(Age);