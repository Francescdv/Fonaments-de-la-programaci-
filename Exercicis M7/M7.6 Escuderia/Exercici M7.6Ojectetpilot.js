class Pilot extends Treballador{
    
    constructor(nom, cognom, edat, antiguitat, alçada, pes){
        super(nom, cognom, edat, antiguitat);
        this._alçada = alçada;
        this._pes = pes;
      
        
    }

    get getalçada(){
        return this._alçada;
    }

    get getpes(){
        return this._pes;
    }




    set setalçada(alçada){
        this._alçada = alçada;
    }

    set setpes(pes){
        this._pes = pes;
    }



    soufinal(){
        
       let resposta = this._sou + (10000 * this._antiguitat) + 50000;
        return resposta
    
    }

}

