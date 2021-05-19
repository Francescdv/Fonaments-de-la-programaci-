class Hotel extends Edifici{
    
    constructor(nom, numero_plantes, superficie, habitacions){
        super(nom, numero_plantes, superficie);
        this._habitacions = habitacions;
    }

    get gethabitacions(){
        return this._habitacions;
    }
    set sethabitacions(habitacions){
        this._habitacions = habitacions;
    }




    //métode

    calcularCostVigilancia(){
        let nVigilants = this._superficie / 1000;
        let cost = nVigilants * 1300 + (500* nVigilants);
        let resposta = "El cost  de la vigilancia serà de " + cost + "€";
        return resposta
        
    }
    serveiHabitacions(){
        let personesServei = this._habitacions/20;
        let sou = personesServei *1000;
        let resposta = "Per al servei d'habitacions seran necesaries " + personesServei + " "  + "persones" + " " + "y tindran un sou de " + sou + "€";
        return resposta
  
      }


    
}