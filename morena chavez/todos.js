function ejercicio1() {
    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
        console.log(meses);
}
function ejercicio2(){
    let valores = [true, 5, false, "hola", "adios", 2];
     if(valores[3]>valores[4]){
        console.log("El elemento de texto mayor es ", valores[3])
    }
    else if(valores[3]<valores[4]){
        console.log("El elemento de texto mayor es ", valores[4])
    }

    valorVerdadero = valores[0] || valores[2]
    valorFalso = valores[0] && valores[2]
    console.log(valorVerdadero)
    consele.log(valorFalso)

    console.log(valores[1]+valores[5])
    console.log(valores[1]-valores[5])
    console.log(valores[1]*valores[5])
    console.log(valores[1]/valores[5])
    console.log(valores[1]**valores[5])
    
}
function ejercicio3(){
    let numero1 = 5;
    let numero2 = 8;
    if(numero1>numero2) {
    console.log("numero1 no es mayor que numero2");
    }
    if(numero2>=0) {
    console.log("numero2 es positivo");
    }
    if(numero1<0 || numero1 !=0) {
    console.log("numero1 es negativo o distinto de cero");
    }
    if(numero1++ != numero2 && numero1++ < numero2 ) {
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
    }
 }
 function ejercicio4(){
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let DNI = parseInt(prompt("Número de DNI"))
    let lDNI = prompt("Introduzca la letra de su DNI")

    if(DNI<0 || DNI>99999999){
        console.log("El número de DNI ingresado no es valido")
        while(true);
    }

    else {
        let resto = DNI % 23;
        let LetraCorrecta = letras[resto];

        if(LetraCorrecta !== lDNI){
            console.log("Letra introducida incorrecta")
        }
        else {
            console.log("el número y la letra de DNI son correctos.")
        }
    }
 }
 function ejercicio5(){
 var numero = 5; 
var resultado = 1; 
for (var i = numero; i > 0; i--)
    { resultado = resultado * i; } console.log("El factorial de " + numero + " es: " + resultado); 
document.writeln("<h2>El factorial de " + numero + "! es: " + resultado + "</h2>");
 }
 
    function ejercicio7(){
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
    }

    function ejercicio8(){
    var texto = prompt("pone un texto aña");
var limpio=texto.replaceAll(""," ").toLowerCase();
var invertido=limpio.split("").reverse().join("");
if(texto==invertido){
    console.log("es un palindromo")
}
else {
    console.log("no es un palindromo")
}
    }
     function ejercicio8(){
    function Persona(nombre, edad, genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    Persona.prototype.obtDetalles = function(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Genero: ${this.genero}`);
    };

    function Estudiante(nombre, edad, genero, curso, grupo){
        Persona.call(this, nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }

    Estudiante.prototype = Object.create(Persona.prototype);
    Estudiante.prototype.constructor = Estudiante;

    Estudiante.prototype.registrar = function(){
        console.log(`${this.nombre} ha sido registrado en el curso ${this.curso} y grupo: ${this.grupo}`);
    }

    function Profesor(nombre, edad, genero, asignatura, nivel){
        Persona.call(this, nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    
    Profesor.prototype = Object.create(Persona.prototype);
    Profesor.prototype.constructor = Profesor;
    
    Profesor.prototype.asignar = function(){
        console.log(`${this.nombre} ha sido asignado a la asignatura ${this.asignatura} y nivel ${this.nivel}`);
    }
}
