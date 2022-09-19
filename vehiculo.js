var Vehiculo = /** @class */ (function () {
    function Vehiculo(parametroTitular, parametroMarca, parametroModelo, parametroColor) {
        this.titular = parametroTitular;
        this.marca = parametroMarca;
        this.modelo = parametroModelo;
        this.color = parametroColor;
        this.cambioColor = true; //uso del booleano para cambiodecolor sea falso...
    }
    // Funciones     usar get obtener valor y set  infromar valor
    Vehiculo.prototype.getTitular = function () {
        return this.titular;
    };
    Vehiculo.prototype.setTular = function (parametroTitular) {
        this.titular = parametroTitular;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.setModelo = function (parametroModelo) {
        this.modelo = parametroModelo;
    };
    Vehiculo.prototype.getColor = function () {
        return this.color;
    };
    Vehiculo.prototype.setColor = function (parametroColor) {
        this.color = parametroColor;
    };
    Vehiculo.prototype.getcambioColor = function () {
        return this.cambioColor;
    };
    Vehiculo.prototype.setcambioColor = function () {
        this.cambioColor = this.cambioColor; //prguntar en caso de que si quiero cambiar de color sea true.
    };
    return Vehiculo;
}());
var miVehiculo = new Vehiculo("Devo Maidana", "FORD", "RAPTOR", "AZUL");
var colorAuto = miVehiculo.getColor();
var modeloAuto = miVehiculo.getModelo();
var titularAuto = miVehiculo.getTitular();
console.log('Color del Auto: ' + colorAuto);
console.log('Modelo selecionado: ' + modeloAuto);
console.log('El Titutalr del Vehiculo es de : ' + titularAuto);
