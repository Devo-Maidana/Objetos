import { IntegranteSelecion } from "./integranteSelecion";

export  class Entrenador  extends IntegranteSelecion {
    
    constructor(Nombre: string, Apellido: string,Numeropasaporte: number, Fechanacimiento: number) {
      
     super(Nombre,Apellido,Numeropasaporte,Fechanacimiento);
      
     
    
    }

        
        //propios
     public get getDirigirPartido(): string {
            return this.apellido
            console.log(`El entrenador ${ this.apellido } tiene que dirigir a Francia!`);
         }
     public set setDirigirPartido (apellido:string){

           this.apellido = apellido 
     }
}