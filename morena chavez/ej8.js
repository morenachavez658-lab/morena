var texto = prompt("pone un texto aña");
var manzana=texto.replaceAll(""," ").toLowerCase();
var frutilla=manzana.split("").reverse().join("");
if(texto==frutilla){
    console.log("es un palindromo")
}
else {
    console.log("no es un palindromo")
}