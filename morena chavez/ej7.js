//EJERCICIO 7 Definir una función que muestre información sobre una cadena de texto que se le pasa
//como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena
//está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.//

var texto = prompt("pone un texto aña");
if(!isNaN(texto ) || texto == null || texto == ""){
    console.error("el texto que has añadido es incorrecto")

}

else if (texto == texto.toUpperCase()){
    console.log ("texto esta hecho con mayusculas")
}
else if (texto == texto.toLowerCase()){
    console.log ("texto esta hecho con minusculas")
}
else {
    console.log("el texto esta hecho con mayusculas y minusculas")
}