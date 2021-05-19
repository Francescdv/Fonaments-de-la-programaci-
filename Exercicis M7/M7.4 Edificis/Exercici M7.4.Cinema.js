class Cinema extends Edifici{
    
    constructor(nom, numero_plantes, superficie, aforament){
        super(nom, numero_plantes, superficie);  
        this._aforament = aforament
    }

    
    get getaforament(){
        return this._aforament;
    }
    set setaforament(aforament){
        this._aforament = aforament;
    }

    //mètode

    projectarSessio(){
    let cost;
    let costResp;
    let preuEntrada = Number(prompt("Introdueix el preu de l'entrada"))
    let numAssistents = Number(prompt("Introdueix el nombre d'assistents"))
    if(numAssistents < this._aforament){
    cost = (preuEntrada * numAssistents);
    costResp = "La sessió ha recaudat " + cost + "€";  
    }else{costResp = "S'ha superat l'aforament màxim"}
    
    return costResp;
     
    }


}