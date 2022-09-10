var Auto = /** @class */ (function () {
    //funcionalidades 
    function Auto(marca, color, precio) {
        this.marca = marca;
        this.color = color;
        this.precio = precio;
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
var auto = new Auto("ford-raptor", "Azul", 22603000);
auto.girar();
console.log(auto.marca);
console.log(auto.color);
console.log(auto.precio);
