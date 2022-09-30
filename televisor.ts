class Televisor{

    protected canalActual:number;
    protected volumenActual:number;
    protected estaPendido:boolean;

        public constructor(){
                this.canalActual = 0;
                this.volumenActual = 0;
                this.estaPendido = false;
        }

    public getCanalActual():number{
        return this.canalActual;
    }
    public setCanalActual(paramCanal:number):void{
        this.canalActual = paramCanal;
    }

    public getVolumenActual():number{
        return this.volumenActual;
    }
    public setVolumenActual(paramVolumen:number):void{
        this.volumenActual = paramVolumen;
    }

    public prenderApagar():void{
        if(this.estaPendido===true){
            this.estaPendido=false;
        }else{
            this.estaPendido = true;
        }
    }
}





let televisorComun:Televisor = new Televisor();



console.log(smart1.getVolumenActual());

smart1.setCanalActual(45);