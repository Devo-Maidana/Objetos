import { IntegranteSelecion } from "./integranteSelecion";
import { Futbolista } from "./futbolista";
export  class Masajista  extends IntegranteSelecion {
    
    constructor(Nombre: string, Apellido: string,Numeropasaporte: number, Fechanacimiento: number) {
      
     super(Nombre,Apellido,Numeropasaporte,Fechanacimiento);
      
     
    
    }

   
        
        //propios
            public get getdarMasaje(): string {
                return this.apellido 
            console.log(`El masajista  ${ this.apellido } le dara un masaje a el${ this.nombre } `);
            }
          
            public set setdarMasaje (apellido:string){

                this.apellido =  apellido
          }

        }