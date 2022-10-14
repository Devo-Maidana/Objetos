import { Persona } from "./Persona";
import { Cuenta } from "./Cuenta";


export class CuentaCorriente extends Cuenta {
protected saldo:number;

//esto es un constructor parametrizado
constructor(paramCliente:Persona,paramCuenta:number){
     super(paramCliente,paramCuenta);
    
}
 

//METODOS ABSTRACTOS IMPORTANTES PARA REPASAR.

   retirar (paramRetiro:number):void{
    //CONSULTA SI EL SALDO DISPONIBLE ES MAYOR A LO QUE QUIERO RTIRARR
     if(this.saldo > paramRetiro){
        this.saldo=this.saldo - paramRetiro;//actualizo mi saldo
        console.log("usted retiro" + paramRetiro);//muestro por consola al usuario lo que retiro

     } else{
        console.log("saldo insuficiente");//si no hay saldo disponible .le muestro por consola que hay saldo insuficiente.
     }

    }
    actualizarSaldo():void {//metodo actualizar saldo
        this.saldo = this.saldo * 1.5;//actualiza el saldo multiplicando por el interes fijo.
    }


}