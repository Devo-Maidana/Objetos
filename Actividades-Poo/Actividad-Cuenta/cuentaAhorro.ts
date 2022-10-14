import { Persona } from "./Persona";
import { Cuenta } from "./Cuenta";
export class CuentaAhorro extends Cuenta{
    
    


protected interes:number;
protected saldoMinimo:number;
protected saldo:number;
    

     constructor (paramCliente:Persona,paramCuenta:number){
        super(paramCliente,paramCuenta);
}

 //metodo para ingresar saldo en el mainCuenta-
 public ingresarSaldo(paramSaldo:number):void{
    this.saldo =paramSaldo;
}
  public mostrarSaldo():number{
   return this.saldo;
}



     public setSaldoMinimo(paramSaldoMinimo:number){
        this.saldoMinimo=paramSaldoMinimo;
}


      public getaldoMinimo():number{
        return this.saldoMinimo;
      }
       
      public setInteres(paramInteres:number){//le paso por parametro el interes 
         this.interes=paramInteres;
         }

      public getInteres():number{
        return this.interes;
  } 
     //metodo para devolver el saldo para el main. preguntarle a rocio si esta bien usarlo en la clase ceunta ahorro o lo puedo usar en la clase ceunta padre.
      public getSaldo():number{
         return this.saldo;
  }
   
    

    
    
    //IMPORTANTE METODOS ABSTRACTOS RETIRAR Y ACTUALIZARSALDO 
    // ver como se implemento de manera diferente en  en la cuenta Padre y como se uso en la cuentaAhorro y cuentaCorriente 
       retirar(paramRetiro:number):void { // chekeo para que el retiro no me deje sin saldo minimo - 
        let auxiliar = this.saldo - this.saldoMinimo;//se lleva la diferencia entre el saldo y saldoMinimo 
        if(auxiliar > paramRetiro){//me aseguro que sea mayor al parametro de retiro es un calculo matematico.
            this.saldo=this.saldo-paramRetiro;
            console.log("usted retiro" + paramRetiro);

        }else{
            console.log("saldo insuficiente");
        }


     }

       actualizarSaldo():void{
        console.log(this.saldo);
        this.saldo = this.saldo * this.interes;//este lo actualiza por el interes variable que es distinto al de cuantaCorriente que es fijo.
        console.log(this.saldo);
       }

}




      