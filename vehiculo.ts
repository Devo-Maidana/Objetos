class Vehiculo{

    //Variables o atributos

    private titular:string;
    private modelo:string;
    private marca:string;
    private color:string;
    private cambioColor:boolean; //utilizo un booleano para decirque es falso si devo quiere cambiar de color Azul.
    

    constructor(parametroTitular,parametroMarca:string, parametroModelo:string, parametroColor:string ){
        this.titular = parametroTitular;
        this.marca = parametroMarca;
        this.modelo = parametroModelo;
        this.color = parametroColor;
        this.cambioColor = true;//uso del booleano para cambiodecolor sea falso...
    }


    // Funciones     usar get obtener valor y set  infromar valor
  

    public getTitular():string{
        return this.titular;
    }

    public setTular(parametroTitular: string):void{
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

   

    getcambioColor():boolean{
        return this.cambioColor;
    }

    setcambioColor():void{
        this.cambioColor = this.cambioColor; //prguntar en caso de que si quiero cambiar de color sea true.
        
    }

}

let miVehiculo = new Vehiculo("Devo Maidana","FORD","RAPTOR","AZUL");

let colorAuto : string = miVehiculo.getColor();

let modeloAuto : string = miVehiculo.getModelo();

let titularAuto : string = miVehiculo.getTitular();

console.log('Color del Auto: '+ colorAuto);
console.log('Modelo selecionado: '+ modeloAuto );
console.log('El Titutalr del Vehiculo es de : '+ titularAuto );