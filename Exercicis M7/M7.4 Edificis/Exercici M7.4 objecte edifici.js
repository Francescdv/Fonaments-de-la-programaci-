
class Edifici{
    
    constructor(nom, numero_plantes, superficie){
        this._nom = nom;
        this._numero_plantes = numero_plantes;
        this._superficie = superficie
        
      
    }

//GETTERS 

get getnom(){
    return this._nom;
}

get getnumero_plantes(){
    return this._numero_plantes;
}

get getsuperficie(){
    return this._superficie
}

/* SETTERS

set setnom(nom){
    this._nom = nom;
}

set setnumero_plantes(numero_plantes){
    this._numero_plantes = numero_plantes}

set setsuperficie(superficie){
    this._superficie = superficie;
    
}
*/



//métode 

netejar(){
    let minuts = ((this._superficie/5*60) + ((this._numero_plantes - 1)*30)/60); 
    let costMensual = minuts*30
    let resposta = "El cost mensual de la neteja serà de " + costMensual+ "€";
    return resposta
}

calcularCostVigilancia(){
    let nVigilants = this._superficie / 1000;
    let cost = nVigilants * 1300;
    let resposta = "El cost  de la vigilancia serà de " + cost + "€";
    return resposta
    
}


}