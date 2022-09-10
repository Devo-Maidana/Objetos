class Auto{

//Atributos o estadoss ,usar 3 de cada uno.
modelo: string;
color: string;
precio: number;


//funcionalidades 

constructor (Modelo:string,Color:string,Precio:number){
this.modelo = modelo;
this.color = color;
this.precio = precio;


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



let auto = new Auto("raptor","Azul",22603000);

auto.girar();

console.log(auto.modelo);
console.log(auto.color);

