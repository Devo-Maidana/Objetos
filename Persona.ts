class Persona {

    private nombre:string;
    private apellido:string;
    private fecha_nacimiento:Date;
    private nacionalidad:string;
    private nacionalidad_segunda:string;
    private contar_nacionalidad:number;
    private dni:number;

    constructor(nombre:string,apellido:string,nacionalidad:string,dni:number,fecha_nacimiento:Date){
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacionalidad = nacionalidad;
        this.dni = dni;
        this.contar_nacionalidad = 0;
        this.fecha_nacimiento = fecha_nacimiento;
        
    }

    get_nombre():string{
        return this.nombre;
    }

    set_nombre(nombre:string){
        this.nombre = nombre;
    }

    get_apellido():string{
        return this.apellido;
    }

    set_apellido(apellido:string){
        this.apellido = apellido;
    }

    get_fecha_nacimiento():string{
        return this.fecha_nacimiento.toString();
    }

    set_fecha_nacimiento(fecha_nacimiento:Date,clave:number){
        if(clave == 123)
            this.fecha_nacimiento = fecha_nacimiento;
        else
            console.log('usted no tiene la autoridad para cambiar la fecha de nacimiento')
    }

    get_nacionalidad():string{
        if(this.contar_nacionalidad < 1)
            return this.nacionalidad;
        else
            return this.nacionalidad + "/" + this.nacionalidad_segunda; 
    }

    set_nacionalidad(nacionalidad:string){
        if(this.contar_nacionalidad < 1){
            this.contar_nacionalidad++;
            this.nacionalidad_segunda = nacionalidad;
            console.log("Nacionalidad cambiada");}
        else{
            console.log("Usted no puede tener mas de dos nacionalidades");
        }
    }

    get_dni():number{
        return this.dni;
    }

    get_edad():number{
        let hoy:Date = new Date();
        return  hoy.getFullYear() - this.fecha_nacimiento.getFullYear();
    }

    toString():string{
        let respuesta:string = this.get_nombre() + " " +this.get_apellido()+ " DNI: " + this.get_dni();
        return respuesta;
    }
}

let fecha = new Date('08-05-1989');


let persona1 = new Persona("Juan","Perez","Argentina",30303030,fecha);



console.log(persona1.get_nombre());
console.log(persona1.get_apellido());
console.log(persona1.get_fecha_nacimiento());


console.log(persona1.get_dni());

console.log(persona1.get_edad());

console.log(persona1.toString());