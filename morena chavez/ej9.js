//EJERCICIO 9 Definir la siguiente jerarquía de objetos, haciendo uso de los prototipos de JavaScript:
//Objeto Persona con las propiedades nombre, edad y género, y el método obtDetalles(), que 
// muestra por pantalla las propiedades de la persona.
//Objeto Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el
//método registrar().Objeto Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el
//método asignar(). Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento
//de la jerarquía.

    /* PERSONA */
    function Persona(nombre, edad, genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    Persona.prototype.obtDetalles = function(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Genero: ${this.genero}`);
    };

     /* ESTUDIANTE */
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

      /* PROFESOR */
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
