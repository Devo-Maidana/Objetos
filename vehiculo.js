var Vehiculo = /** @class */ (function () {
    function Vehiculo(parametroTitular, parametroModelo, parametroColor, parametroPrecio) {
        this.titular = parametroTitular;
        this.modelo = parametroModelo;
        this.color = parametroColor;
        this.precio = parametroPrecio;
    }
    // Funciones     usar get obtener valor y set  infromar valor
    Vehiculo.prototype.getTitular = function () {
        return this.titular;
    };
    Vehiculo.prototype.setTitular = function (parametroTitular) {
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
    Vehiculo.prototype.getPrecio = function () {
        return this.precio;
    };
    Vehiculo.prototype.setPrecio = function (parametroPrecio) {
        this.precio = parametroPrecio;
    };
    return Vehiculo;
}());
var miVehiculo = new Vehiculo("Devo Maidana", "FORD-RAPTOR", "AZUL", 140000);
var titularAuto = miVehiculo.getTitular();
var modeloAuto = miVehiculo.getModelo();
var colorAuto = miVehiculo.getColor();
var precioAuto = miVehiculo.getPrecio();
console.log("El Titutalr del Vehiculo es de : " + titularAuto);
console.log("Modelo selecionado: " + modeloAuto);
console.log("Color del Auto: " + colorAuto);
console.log("Precio Pagado: " + precioAuto);
