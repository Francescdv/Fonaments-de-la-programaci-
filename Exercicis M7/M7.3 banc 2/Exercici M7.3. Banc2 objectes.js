
class Client{
    
    constructor(nom, cognom){
        this._nom = nom;
        this._cognom = cognom;
        this._comptes = [];
        
      
    }

//GETTERS 

get getnom(){
    return this._nom;
}

get getcognom(){
    return this._cognom;
}

get getcomptes(){
    return this._comptes
}

// SETTERS

set setnom(nom){
    this._nom = nom;
}

set setcognom(cognom){
    this._cognom = cognom;
}

//métode 

afageixcomte(noucompte){
    this._comptes.push(noucompte)
}





}

class Compte{
    
    constructor(nom_compte, nombre_de_compte){
        this._nom_compte = nom_compte;
        this._saldo = 50;
        this._nombre_de_compte= nombre_de_compte 
        this._nombre_de_transaccions = 0
       
      
    }

    //GETTERS 
get getsaldo(){
    return this._saldo;
}

get getnombre_de_compte(){
    return this._nombre_de_compte;
}

get getsuperficietotal(){
    return this._superficietotal;
}

get getnombre_de_transaccions(){
     return this.__nombre_de_transaccions;
}

get getnom_compte(){
    return this._nom_compte;
}


// SETTERS

set setsaldo(saldo){
    this._saldo = saldo;
}
    
set setnombre_de_compte(nombre_de_compte){
    this._nombre_de_compte = nombre_de_compte;
}
    
set setnombre_de_transaccions(nombre_de_transaccions){
    this._nombre_de_transaccions = nombre_de_transaccions;
}

set setnom_compte(nom_compte){
    this._nom_compte = nom_compte;
}


//Métodes

ingresarEuros(ingres){
    this._nombre_de_transaccions +=1
    this._saldo += ingres;
    return this._saldo; 
}

retirarSaldo(retirada){
    this._nombre_de_transaccions +=1
    this._saldo -= retirada;
    return this._saldo;
}

retornaSaldo(){
    return this._saldo;
}

veureTransaccion(){
    return this._nombre_de_transaccions
}

veureCompte(){
    let text = "El nom del compte és " + this._nom_compte + " "  + "el saldo es de " + this._saldo + "€" + ", " + " el nombre del compte és " + this._nombre_de_compte + ",  " + "i s'han realitzat " + this._nombre_de_transaccions + " "+ "transaccions"; 
    return text
}


}