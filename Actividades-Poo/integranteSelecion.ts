export  class IntegranteSelecion {
    protected nombre: string;
    protected apellido: string;
    private numeroPasaporte: number;
    private fechaNacimiento: number;
  
  
  
  
    public constructor(Nombre: string, Apellido: string, Numeropasaporte: number, Fechanacimiento: number) {
      this.nombre = Nombre;
      this.apellido = Apellido;
      this.numeroPasaporte = Numeropasaporte;
      this.fechaNacimiento = Fechanacimiento;
  
    }



     // constructor, getter y setter en comun con clases hijas 

   
    //en comunun
    public get  getConsentrarse(): string {
        return this.nombre
        console.log(`El jugador ${ this.apellido } tiene que concentrar en el Hotel av.mitre!`);
     }
    public set setConsentrarse(nombre:string){
        this.nombre= nombre
    }

    public get getViajar(): string {
        return  this.nombre 
        console.log(`El jugador ${ this.nombre  } teiene que Vijar a Qatar !`);
        
    }
    

    public set setViajar(nombre:string){
        this.nombre = nombre;
       
    }





    }
