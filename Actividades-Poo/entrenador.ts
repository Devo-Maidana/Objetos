import { IntegranteSelecion } from "./integranteSelecion";

export  class Entrenador  extends IntegranteSelecion {
    
    constructor(Nombre: string, Apellido: string,Numeropasaporte: number, Fechanacimiento: string) {
      
     super(Nombre,Apellido,Numeropasaporte,Fechanacimiento);
      
     
    
    }

        
        //propios
     public  getDirigirPartido(): string {
           
            console.log(`El entrenador ${ this.apellido } tiene que dirigir a Francia!`);
            return this.apellido
         }
     public  setDirigirPartido (apellido:string){

           this.apellido = apellido 
     }
}