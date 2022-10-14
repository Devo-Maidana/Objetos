 export class Persona {
  protected nombre:string;
  protected apellido:string;
  protected dni:number;


  constructor (paramNombre:string,paramApellido:string,paramDni:number) {
    super();
    this.nombre=paramNombre;
    this.apellido=paramApellido;
    this.dni=paramDni;

  }






 //metodos

  setNombre(paramNombre:string):void {

     this.nombre=paramNombre;
  }
  setApellido(paramApellido:string):void {

    this.nombre=paramApellido=paramApellido;

 }
  getApellido():string{
    return this.apellido;
  }
  getNombreCompleto():string{
    let aux:string = this.nombre + this.apellido;
    return aux;
  }
  setDNI(paramDNI:number):void {
    this.dni=paramDNI;
  }
  getDNI():number {
    return this.dni;
  }
  



    

 
}