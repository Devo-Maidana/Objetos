class SmartTv extends Televisor{

    private navegarPorInternet:boolean;
    private cantAplicaciones:number;

    constructor(){
        super();
        this.canalActual = 5;
        this.navegarPorInternet=false;
        this.cantAplicaciones =5;
    }

    public navegar():void{
        if(this.navegarPorInternet===false){
            this.navegarPorInternet = true;
        }else{
            this.navegarPorInternet = false;
        }
    }

    public getVolumenActual(): number {
        return 1;        
    }

}
let smart1:SmartTv = new SmartTv();

