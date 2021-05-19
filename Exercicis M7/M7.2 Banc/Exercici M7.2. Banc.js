
class Compte{
    
    constructor(nom, cognom, nombre_de_compte){
        this._nom = nom;
        this._cognom = cognom;
        this._saldo = 50;
        this._nombre_de_compte= nombre_de_compte 
        this._nombre_de_transaccions = 0
      
    }

//GETTERS 

get getnom(){
    return this._nom;
}

get getcognom(){
    return this._cognom;
}

get getsaldo(){
    return this._saldo;
}

get getnombre_de_compte(){
    return this._nombre_de_compte ;
}

get getsuperficietotal(){
    return this._superficietotal;
}

get getnombre_de_transaccions(){
     return this.__nombre_de_transaccions;
}

// SETTERS

set setnom(nom){
    this._nom = nom;
}

set setcognom(cognom){
    this._cognom = cognom;
}

set setsaldo(saldo){
    this._saldo = saldo;
}

set setnombre_de_compte(nombre_de_compte){
    this._nombre_de_compte = nombre_de_compte;
}

set nombre_de_transaccions(nombre_de_transaccions){
    this._nombre_de_transaccions = nombre_de_transaccions;
}


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
    let text = "El titúlar del compte és " + this._nom  + " " +this._cognom + ", " + "el saldo es de " + this._saldo + "€" + ", " + " el nombre del compte és " + this._nombre_de_compte + ",  " + "i s'han realitzat " + this._nombre_de_transaccions + " "+ "transaccions"; 
    return text
}




















}
