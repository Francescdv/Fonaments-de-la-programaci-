class Treballador{

    //static souBase =50k
    
    constructor(nom, cognom, edat, antiguitat){
      
        this._nom = nom;
        this._cognom = cognom;
        this._edat = edat;
        this._antiguitat = antiguitat;
        this._sou = 50000
    }

    get getnom(){
        return this._nom;
    }

    get getcognom(){
        return this._cognom;
    }

    get getedat(){
        return this._edat;
    }

    get getantiguitat(){
        return this._antiguitat
    }

    get getsou(){
        return this._sou
    }







    set setnom(nom){
        this.nom = nom;
    }

    set setcognom(cognom){
        this._cognom = cognom;
    }

    set setedad(edat){
        this._edat = edat;
    }
    
    set setantiguitat(antiguitat){
        this._antiguitat = antiguitat;
    }

    set setsou(sou){
        this._sou = sou;
    }



}