"use strict";
exports.__esModule = true;
exports.Cuenta = void 0;
var Cuenta = /** @class */ (function () {
    function Cuenta(paramCuenta, paramCliente) {
        this.saldo = 0;
        this.cliente = paramCliente;
        this.nroCuenta = paramCuenta;
    }
    Cuenta.prototype.getNroCuenta = function () {
        return this.nroCuenta;
    };
    Cuenta.prototype.setNroCuenta = function (paramCuenta) {
        this.nroCuenta = paramCuenta;
    };
    Cuenta.prototype.getCliente = function () {
        return this.cliente;
    };
    Cuenta.prototype.setCliente = function (paramCliente) {
        this.cliente = paramCliente;
    };
    Cuenta.prototype.getSaldo = function () {
        return this.saldo;
    };
    Cuenta.prototype.setSaldo = function (paramSaldo) {
        this.saldo = paramSaldo;
    };
    Cuenta.prototype.ingresar = function (paramIngreso) {
        console.log(paramIngreso);
        this.saldo = this.saldo + paramIngreso;
    };
    return Cuenta;
}());
exports.Cuenta = Cuenta;
