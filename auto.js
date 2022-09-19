var Auto = /** @class */ (function () {
    //funcionalidades 
    function Auto(marca, precio) {
        this.color = "";
        this.marca = marca;
        this.precio = precio;
    }
    Object.defineProperty(Auto.prototype, "colorAuto", {
        get: function () {
            return "";
        },
        set: function (color) {
            this.color = color;
        },
        enumerable: false,
        configurable: true
    });
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
var auto1 = new Auto("ford-raptor", 22603000);
auto1.colorAuto = "Rojo";
console.log(auto1.colorAuto);
