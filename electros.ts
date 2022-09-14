class Electrodomestico{

nombre: string;
precio: number;
color:string;
consumo:number;
peso:number;




constructor (paramnombre:string,paramprecio:number,paramcolor:string,paramconsumo:number,parampeso:number){
    this.nombre = paramnombre;
    this.precio = paramprecio;
    this.color = paramcolor;
    this.consumo = paramconsumo;
    this.peso = parampeso;
    
}




bajoConsumo () {
console.log("Su consumo es Bajo");
}

balance () {
    console.log("  ");

}

gama () {
    console.log(" ");
}



let heladera = new Electrodomestico("HeladeraSamsung",65000,"Gris",150,20);