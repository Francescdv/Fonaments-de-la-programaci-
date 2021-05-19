class Pelicula{
    
    constructor(titol, duracio, edatMin, director){
      
        this._titol = titol;
        this._duracio = duracio;
        this._edatMin = edatMin;
        this._director = director
        
       
    }
    get getTitol(){
        return this._titol
    }
    
    get getDuracio(){
        return this._duracio
    }

    get getEdatMin(){
        return this._edatMin
    }

    get getDirector(){
        return this._director
    }








}

