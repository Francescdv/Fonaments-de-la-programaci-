class Hospital extends Edifici{
    
    constructor(nom, numero_plantes, superficie, malalts){
        super(nom, numero_plantes, superficie);
        this._malalts = malalts 
    }

    get getmalalts(){
        return this._malalts;
    }
    set setmalalts(malalts){
        this._malalts = malalts;
    }


    //métode
    
    repartirDinar(){
      let dinars = (this._malalts * 3);
      let resposta = "S'han repartit " + " "  +  dinars + "dinars";
      return resposta

    }


}