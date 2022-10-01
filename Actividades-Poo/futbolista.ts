import { IntegranteSelecion } from "./integranteSelecion";
 export  class Futbolista  extends IntegranteSelecion {
    
    constructor(Nombre: string, Apellido: string,Numeropasaporte: number, Fechanacimiento: string) {
      
     super(Nombre,Apellido,Numeropasaporte,Fechanacimiento);
      
     
    
    }



   
      
      //propios 
    public getjugarPartido(): string {
          
          console.log(`El jugador ${ this.nombre } esta con mejor energia para jugar!`);
          return this.nombre
       }

    public  setjugarPartido(nombre:string){
         this.nombre = nombre

    }




    public  getEntrenar(): string {
          
          console.log(`El jugador ${ this.apellido } tiene que entrenar Penales y Tiros Libres !`);
          return this.apellido
       }
   
    public setEntrenar(apellido:string){

       this.apellido = apellido 
    }
 



 }