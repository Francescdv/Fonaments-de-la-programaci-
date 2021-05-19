class Mecanic extends Treballador{
    
    constructor(nom, cognom, edad, antiguitat, estudis){
        super(nom, cognom, edad, antiguitat);
        this._estudis = estudis;
      
        
    }

    get getestudis(){
        return this._estudis;
    }



    set setestudis(estudis){
        this._estudis = estudis;
    }

 



    soufinalmec(){
       let resposta = this._sou + (10000 * this._antiguitat);
        return resposta
    
    }

}

