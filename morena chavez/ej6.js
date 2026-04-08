//ejercicio 6 Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar.Mostrar por pantalla el resultado devuelto por la funcion.;
var numero = prompt("ingrese un numero");
if(isNaN (numero) || numero == null || numero == "" ){
    ocument.writeln("El numero ingresado no es un numero. ")
}
else if (numero%2===0){
    document.writeln("el numero es par");
}
else {
    document.writeln("el numero es impar");
}