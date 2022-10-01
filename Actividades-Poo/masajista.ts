import { IntegranteSelecion } from "./integranteSelecion";
import { Futbolista } from "./futbolista";
export  class Masajista  extends IntegranteSelecion {
    
    constructor(Nombre: string, Apellido: string,Numeropasaporte: number, Fechanacimiento: string) {
      
     super(Nombre,Apellido,Numeropasaporte,Fechanacimiento);
      
     
    
    }

   
        
        //propios
            public  getdarMasaje(): string {
                
            console.log(`El masajista  ${ this.apellido } le dara un masaje a el Jugador con Contractura en Aductor`);
            return Futbolista.
            }
          
           public  setdarMasaje (apellido:string){

               this.apellido =  apellido
          }

        }