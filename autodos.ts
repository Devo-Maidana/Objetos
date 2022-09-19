class Auto{

    marca:string;
    patente:string;
    modelo:string;


    constructor (parametroMarca:string,parametroPatente:string,parametroModelo:string){ 

    this.marca = parametroMarca;
    this.patente = parametroPatente;
    this.modelo = parametroModelo;

    }

   obtenerMarca ():string{ 

        return this.marca;
    }


    }

   obtenerPatente():string{ 

        return this.patente;
    }

}

 let autoDevora = new Auto ("BMW","AAA123","X8");
 let autoMarcos = new Auto ("Audi","BBB123","A3");