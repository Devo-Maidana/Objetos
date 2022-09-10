class Auto{

//Atributos o estadoss ,usar 3 de cada uno.
marca: string;
color: string;
precio: number;


//funcionalidades 

constructor (marca:string,color:string,precio:number){
this.marca = marca;
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



let auto = new Auto("ford-raptor","Azul",22603000);

auto.girar();

console.log(auto.marca);
console.log(auto.color);
console.log(auto.precio);

