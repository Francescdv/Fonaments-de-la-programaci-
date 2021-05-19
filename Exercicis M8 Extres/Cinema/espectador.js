class Espectador{
    
    constructor(nom){
      
        this._nom = nom;
        this._edat = Math.ceil((Math.random() * 50));
        this._diners = Math.ceil((Math.random() * 70));
               
    }

    get getNom(){
        return this._nom
    }
    
    get getEdat(){
        return this._edat
    }

    get getDiners(){
        return this._diners
    } 


}


