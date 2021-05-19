class Revolver{
    
    constructor(){
      
        this._posicionActual = Math.floor((Math.random() * 5) + 0);
        this._posicionBala = Math.floor((Math.random() * 5) + 0);
        
       
    }

    get getposicionActual(){
        return this._posicionActual;
    }
    
    get getposicionBala(){
        return this._posicionBala;
    }

    set setposicionActual(posicionActual){
        this._posicionActual = posicionActual;
    }

    set setposicionBala(posicionBala){
        this._posicionBala = posicionBala
    }



    disparar(){
        let resposta;
        if(this._posicionActual == this._posicionBala){
            resposta = true;
        }else{resposta = false;}

        return resposta


    }

    siguientebala(){
        
        this._posicionActual++
        if(this._posicionActual == 7){
            this._posicionActual = 0
        }

    }

    informa(){
        window.alert("La posicio actual del tambor és la número " + this._posicionActual + ", la bala es troba en la " + this._posicionBala);
        

    }

}


