class Auto{

//Atributos o estadoss ,usar 3 de cada uno.
private marca: string;
private precio: number;
private color: string ="";

//funcionalidades 

constructor (marca:string,precio:number){
this.marca = marca;
this.precio = precio;

}


set colorAuto (color : string){
    
    this.color = color ;

}

get colorAuto (){

    return "";
}


estacionar(){

    console.log ("Estacionar a 45 grados");
}


girar(){

    console.log ("Gire a la derecha con precaucion");
}

parar(){
    console.log ("Detenga la marcha");
}

}



let auto1 = new Auto("ford-raptor",22603000);


auto1.colorAuto = "Rojo";
console.log  (auto1.colorAuto)

