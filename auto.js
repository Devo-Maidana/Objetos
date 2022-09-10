var Auto = /** @class */ (function () {
    //funcionalidades 
    function Auto(Modelo, Color, Precio) {
        this.Modelo = Modelo;
        this.Color = Color;
        this.Precio = Precio;
    }
    Auto.prototype.estacionar = function () {
        console.log("Estacionar a 45 grados");
    };
    Auto.prototype.girar = function () {
        console.log("Gire a la derecha con precaucion");
    };
    Auto.prototype.parar = function () {
        console.log("Detenga la marcha");
    };
    return Auto;
}());
