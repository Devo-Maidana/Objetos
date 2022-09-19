class Vehiculo{

    //Variables o atributos mas modificadores de accesos public y private - getters y setters 

    private titular:string;
    private modelo:string;
    private color:string;
    private precio:number;
    
    

    constructor(parametroTitular,parametroModelo:string,parametroColor:string,parametroPrecio: number ){
        this.titular = parametroTitular;
        this.modelo = parametroModelo;
        this.color = parametroColor;
        this.precio = parametroPrecio;
       
    }


    // Funciones     usar get obtener valor y set  infromar valor
  

    public getTitular():string{
        return this.titular;
    }

    public setTitular(parametroTitular: string):void{
        this.titular= parametroTitular;
    }


    public getModelo():string{
        return this.modelo;
    }

    public setModelo(parametroModelo: string):void{
        this.modelo = parametroModelo;
    }


    public getColor():string{
        return this.color;
    }

    public setColor(parametroColor:string):void{
        this.color = parametroColor;
    }


    public getPrecio():number{
        return this.precio;
    }

    public setPrecio(parametroPrecio:number):void{
        this.precio= parametroPrecio;
    }   

}

let miVehiculo = new Vehiculo("Devo Maidana","FORD-RAPTOR","AZUL",140000);
let titularAuto : string = miVehiculo.getTitular();
let modeloAuto : string = miVehiculo.getModelo();
let colorAuto : string = miVehiculo.getColor();
let precioAuto : number = miVehiculo.getPrecio();

console.log("El Titutalr del Vehiculo es de : " + titularAuto );
console.log("Modelo selecionado: "+ modeloAuto );
console.log("Color del Auto: "+ colorAuto);
console.log("Precio Pagado: " + precioAuto);