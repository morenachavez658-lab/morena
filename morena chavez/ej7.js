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