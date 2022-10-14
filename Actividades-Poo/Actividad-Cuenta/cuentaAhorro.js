"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.CuentaAhorro = void 0;
var Cuenta_1 = require("./Cuenta");
var CuentaAhorro = /** @class */ (function (_super) {
    __extends(CuentaAhorro, _super);
    function CuentaAhorro(paramCliente, paramCuenta) {
        return _super.call(this, paramCliente, paramCuenta) || this;
    }
    //metodo para ingresar saldo en el mainCuenta-
    CuentaAhorro.prototype.ingresarSaldo = function (paramSaldo) {
        this.saldo = paramSaldo;
    };
    CuentaAhorro.prototype.mostrarSaldo = function () {
        return this.saldo;
    };
    CuentaAhorro.prototype.setSaldoMinimo = function (paramSaldoMinimo) {
        this.saldoMinimo = paramSaldoMinimo;
    };
    CuentaAhorro.prototype.getaldoMinimo = function () {
        return this.saldoMinimo;
    };
    CuentaAhorro.prototype.setInteres = function (paramInteres) {
        this.interes = paramInteres;
    };
    CuentaAhorro.prototype.getInteres = function () {
        return this.interes;
    };
    //metodo para devolver el saldo para el main. preguntarle a rocio si esta bien usarlo en la clase ceunta ahorro o lo puedo usar en la clase ceunta padre.
    CuentaAhorro.prototype.getSaldo = function () {
        return this.saldo;
    };
    //IMPORTANTE METODOS ABSTRACTOS RETIRAR Y ACTUALIZARSALDO 
    // ver como se implemento de manera diferente en  en la cuenta Padre y como se uso en la cuentaAhorro y cuentaCorriente 
    CuentaAhorro.prototype.retirar = function (paramRetiro) {
        var auxiliar = this.saldo - this.saldoMinimo; //se lleva la diferencia entre el saldo y saldoMinimo 
        if (auxiliar > paramRetiro) { //me aseguro que sea mayor al parametro de retiro es un calculo matematico.
            this.saldo = this.saldo - paramRetiro;
            console.log("usted retiro" + paramRetiro);
        }
        else {
            console.log("saldo insuficiente");
        }
    };
    CuentaAhorro.prototype.actualizarSaldo = function () {
        console.log(this.saldo);
        this.saldo = this.saldo * this.interes; //este lo actualiza por el interes variable que es distinto al de cuantaCorriente que es fijo.
        console.log(this.saldo);
    };
    return CuentaAhorro;
}(Cuenta_1.Cuenta));
exports.CuentaAhorro = CuentaAhorro;
