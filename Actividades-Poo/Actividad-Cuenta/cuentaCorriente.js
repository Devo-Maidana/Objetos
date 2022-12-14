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
exports.CuentaCorriente = void 0;
var Cuenta_1 = require("./Cuenta");
var CuentaCorriente = /** @class */ (function (_super) {
    __extends(CuentaCorriente, _super);
    //esto es un constructor parametrizado
    function CuentaCorriente(paramCliente, paramCuenta) {
        return _super.call(this, paramCliente, paramCuenta) || this;
    }
    //METODOS ABSTRACTOS IMPORTANTES PARA REPASAR.
    CuentaCorriente.prototype.retirar = function (paramRetiro) {
        //CONSULTA SI EL SALDO DISPONIBLE ES MAYOR A LO QUE QUIERO RTIRARR
        if (this.saldo > paramRetiro) {
            this.saldo = this.saldo - paramRetiro; //actualizo mi saldo
            console.log("usted retiro" + paramRetiro); //muestro por consola al usuario lo que retiro
        }
        else {
            console.log("saldo insuficiente"); //si no hay saldo disponible .le muestro por consola que hay saldo insuficiente.
        }
    };
    CuentaCorriente.prototype.actualizarSaldo = function () {
        this.saldo = this.saldo * 1.5; //actualiza el saldo multiplicando por el interes fijo.
    };
    return CuentaCorriente;
}(Cuenta_1.Cuenta));
exports.CuentaCorriente = CuentaCorriente;
