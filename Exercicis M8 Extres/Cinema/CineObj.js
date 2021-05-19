class Cinema{
    
    constructor(sala){
      
        this._pelicula = "Null";
        this._sala = sala;
        this._preu = 0;
       
    }

    get getSala(){
        return this._sala;
    }
    
    get getPelicula(){
        return this._pelicula;
    }

    get getPreu(){
        return this._preu;
    }

    set setSala(sala){
        this._sala = sala;
    }

    set setPelicula(pelicula){
        this._pelicula = pelicula;
    }

    set setPreu(preu){
        this._preu = preu;
    }





}