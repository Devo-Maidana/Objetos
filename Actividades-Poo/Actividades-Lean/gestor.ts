import { Libro } from "./Libro";

export class Gestor{
    private libros = new Array<Libro>;
    private nombre:string;

    constructor(nombre:string,libros?:Array<Libro>){
        this.nombre = nombre;
        if(libros != undefined)
            this.libros = libros;

    }

    esVacio():boolean{
        if(this.libros.length == 0)
            return true;
        return false;
    }

    cantidadLibros():number{
        return this.libros.length
    }

    insertar(libro:Libro){
        this.libros.push(libro);
    }

    getLibros():Array<Libro>{
        let nuevoArreglo = new Array<Libro>;
        for (let index:number = 0; index < this.cantidadLibros(); index++) {
            let titulo = this.libros[index].getTitulo();
            let autor = this.libros[index].getAutor();
            let genero = this.libros[index].getGenero();
            let nuevoLibro = new Libro(titulo,autor,genero);
            nuevoArreglo.push(nuevoLibro);       
          }
        
        return nuevoArreglo;
    }

    toString():string{
        let resultado:string = this.nombre + "\n";
        for (let index:number = 0; index < this.cantidadLibros(); index++) {
          resultado += this.libros[index].toString() + '\n\n';
           
        }
        return resultado;
    }
    
    getIndex(titulo:string):number{
        let pos:number = -1;
        for (let index:number = 0; index < this.cantidadLibros(); index++) {
            if(this.libros[index].getTitulo() == titulo)
                pos = index;
        }
        return pos;
    }
    
    consultar(titulo:string):boolean{
        if(this.getIndex(titulo) == -1)
            return false;
        return true
        
    }

    modificarGestor(nombre:string){
        this.nombre = nombre;
    }

    modificarLibro(titulo:string){
        if(this.getIndex(titulo) == -1)
            this.libros[this.getIndex(titulo)].setTitulo(titulo)
    }

    eliminar(titulo:string){
        if(this.getIndex(titulo) == -1)
            this.libros.splice(this.getIndex(titulo),1);
    }


}