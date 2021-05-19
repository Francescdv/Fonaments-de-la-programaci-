class Jugador{
    
    constructor(id, nombre){
      
        this._id = id;
        this._nombre = nombre;
        this._nickname = nombre + id;
        this._vivo = true;
    }

    get getID(){
        return this._id;
    }
    
    get getNombre(){
        return this._nombre;
    }

    get getNickname(){
        return this._nickname;
    }

    get getVivo(){
        return this._vivo;
    }



    jugar(revolver){
        let resposta;
        let disparo = revolver.disparar();
        if(disparo == true){
            this._vivo = false
            resposta = true
            
        }else{revolver.siguientebala();
        resposta = false}
        
        return resposta  
    }  

    
    

}