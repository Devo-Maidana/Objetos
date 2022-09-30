import { IntegranteSelecion } from "./integranteSelecion";
 export  class Futbolista  extends IntegranteSelecion {
    
    constructor(Nombre: string, Apellido: string,Numeropasaporte: number, Fechanacimiento: number) {
      
     super(Nombre,Apellido,Numeropasaporte,Fechanacimiento);
      
     
    
    }



   
      
      //propios 
    public get getjugarPartido(): string {
          return this.nombre
          console.log(`El jugador ${ this.nombre } esta con mejor energia para jugar!`);
       }

    public set setjugarPartido(nombre:string){
         this.nombre = nombre

    }




    public get getentrenar(): string {
          return this.apellido
          console.log(`El jugador ${ this.apellido } tiene que entrenar Penales y Tiros Libres !`);
       }
   
    public set setentrenar(apellido:string){

       this.apellido = apellido 
    }
 



 }