export  class IntegranteSelecion {
    protected nombre: string;
    protected apellido: string;
    private numeropasaporte: number;
    private fechanacimiento: string;
  
  
  
  
    public constructor(Nombre: string, Apellido: string, Numeropasaporte: number, Fechanacimiento: string) {
      this.nombre = Nombre;
      this.apellido = Apellido;
      this.numeropasaporte = Numeropasaporte;
      this.fechanacimiento = Fechanacimiento;
  
    }



     // constructor, getter y setter en comun con clases hijas 

   
    //en comunun
    public  getConsentrarse(): string {
        
        console.log(`El jugador ${ this.apellido } tiene que concentrar en el Hotel av.mitre!`);
        return this.nombre
     }
    public setConsentrarse(nombre:string){
        this.nombre= nombre
    }

    public  getViajar(): string {
       
        console.log(`El jugador ${ this.nombre  } tiene que Vijar a Qatar !`);
        return  this.nombre  
    }
    

    public  setViajar(nombre:string){
        this.nombre = nombre;
       
    }


    public getFechaNac(){
        let fecha = new Date(this.fechanacimiento);
        return fecha;
    }


    }
