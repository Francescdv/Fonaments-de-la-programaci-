class Cotxe{
    
    constructor(model, potencia, velocitatmax, color, preu){
      
        this._model = model;
        this._potencia = potencia;
        this._velocitatmax = velocitatmax;
        this._color = color;
        this._preu = preu




    }

    get getmodel(){
        return this._model;
    }

    get getpotencia(){
        return this._potencia;
    }

    get getvelocitatmax(){
        return this._velocitatmax;
    }

    get getcolor(){
        return this._color
    }

    get getpreu(){
        return this._preu
    }

 






    set setmodel(model){
        this.model = model;
    }

    set setpotencia(potencia){
        this._potencia = potencia;
    }

    set setvelocitatmax(velocitatmax){
        this._velocitatmax = velocitatmax;
    }
    
    set setcolor(color){
        this._color = color;
    }

    set setpreu(preu){
        this._preu = preu;
    }



}