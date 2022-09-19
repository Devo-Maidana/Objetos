class Rectangulo {

private base:number;
private altura:number;



constructor (Pbase:number,Paltura:number){

this.base = Pbase;
this.altura=Paltura;

}



public get area ():number{

    return this.base * this.altura;
    console.log("el area del rectanguloUNO es ");
}





}

let rectanguloUNO = new Rectangulo(10, 10);
let rectanguloDOS = new Rectangulo(25, 25);





//-     Calcular el area
    //Compararlo con otro rectangulo. Devolver 1 si es mayor, 0 son iguales y -1 si es menor.
    // Determinar si es un cuadrado(si base y altura son iguales).
    // Determinar si esta acostado o parado(si el alto es mas que el ancho)