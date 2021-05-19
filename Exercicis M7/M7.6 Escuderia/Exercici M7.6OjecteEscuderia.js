class Escuderia{
    
    constructor(nom, pressupost, paisOrigen){
      
        this._nom = nom;
        this._pressupost = pressupost;
        this._paisOrigen = paisOrigen;
        this._cotxes = [];
        this._treballadors = [];
        this._pilots = [];
        this._mecanics = [];




    }

    get getnom(){
        return this._nom;
    }

    get getpressupost(){
        return this._pressupost;
    }

    get getpaisOrigen(){
        return this._paisOrigen;
    }

    get getcotxes(){
        return this._cotxes
    }

    get getreballadors(){
        return this._treballadors
    }

    get getpilots(){
        return this._pilots
    }

    get getmecanics(){
        return this._mecanics
    }







    set setnom(nom){
        this._nom = nom;
    }

    set setpressupost(pressupost){
        this._pressupost = pressupost;
    }

    set setpaisOrigen(paisOrigen){
        this._paisOrigen = paisOrigen;
    }

    set setcotxes(cotxes){
        this._cotxes = cotxes
    }
    
    set settreballadors(treballadors){
        this._treballadors = treballadors;
    }

    set setpilots(pilots){
        this._pilots = pilots;
    }

    set setmecanics(mecanics){
        this._mecanics = mecanics;
    }


}