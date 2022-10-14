import { CuentaAhorro } from "./CuentaAhorro";
import { CuentaCorriente } from "./CuentaCorriente";
import { Persona } from "./Persona";

let Devo:Persona = new Persona ("Devora","Maidana",74777888);
let ctacteDevo:CuentaCorriente = new CuentaCorriente(Devo,456789);
let ctaAhorroDevo:CuentaAhorro = new CuentaAhorro(Devo,8888888);

ctaAhorroDevo.ingresarSaldo(1000);
ctaAhorroDevo.setInteres(2);
ctaAhorroDevo.actualizarSaldo();
let saldo:number = ctaAhorroDevo.getSaldo();
console.log("saldo de devo" + saldo);