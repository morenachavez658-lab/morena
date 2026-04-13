//EJERCICIO 8 Definir una función que determine si la cadena de texto que se le pasa como parámetro es
//un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha.
//ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".

var texto = prompt("pone un texto aña");
var manzana=texto.replaceAll(""," ").toLowerCase();
var frutilla=manzana.split("").reverse().join("");
if(texto==frutilla){
    console.log("es un palindromo")
}
else {
    console.log("no es un palindromo")
}