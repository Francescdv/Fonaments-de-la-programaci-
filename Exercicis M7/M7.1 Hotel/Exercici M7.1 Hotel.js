
class Hotel{
    
    constructor(nom, nombrehab, nombreplan, superficietotal){
        this._nom = nom;
        this._nombrehab = nombrehab;
        this._nombreplan = nombreplan;
        this._superficietotal= superficietotal 
      
    }

//GETTERS 

get getnom(){
    return this._nom;
}

get getnombrehab(){
    return this._nombrehab;
}

get getnombreplan(){
    return this._nombreplan;
}

get getsuperficietotal(){
    return this._superficietotal;
}

// SETTERS

set setnom(nom){
    this._nom = nom;
}

set setnombrehab(nombrehab){
    this._nombrehab = nombrehab;
}

set setnombreplan(nombreplan){
    this._nombreplan = nombreplan;
}

set setsuperficietotal(superficietotal){
    this._superficietotal = superficietotal;
}


    

    calcularManteniment(){
        let numpers = (this._nombrehab / 20)
        let cost = numpers * 1500
        let manteniment = "Seran necessàries " + numpers + " " + "persones" + "i tindrà un cost de " + cost + " " + "€"
        
        return manteniment
    } 
    
  

}
  