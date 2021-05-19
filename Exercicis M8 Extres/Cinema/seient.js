class Seient{
    
    constructor(posicio){
      
        this._posicio = posicio;
        this._lliure = true;
        this._espectador = [];
        
       
    }


    get getPosicio(){
        return this._posicio
    }

    get getEspectador(){
        return this._espectador
    }
    
    get getLliure(){
        return this._lliure
    }

    set setLliure(lliure){
        this._lliure = lliure
    }
}


