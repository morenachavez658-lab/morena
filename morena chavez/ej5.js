
///ejercicio 5 es basicamEl factorial de un número entero n es una operación matemática que consiste en multiplicartodos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a:5! = 5 x 4 x 3 x 2 x 1 = 120 Utilizando la estructura for, crear unscript que calcule el factorial de un número entero.
var numero = 5; 
var resultado = 1; 
for (var i = numero; i > 0; i--)
    { resultado = resultado * i; } console.log("El factorial de " + numero + " es: " + resultado); 
document.writeln("<h2>El factorial de " + numero + "! es: " + resultado + "</h2>");

