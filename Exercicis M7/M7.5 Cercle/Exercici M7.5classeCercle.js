class Cercle{
    
    constructor(radi){
        this._radi = radi;
        this._centre = []
    }

    get getcentre(){
        return this._centre;
    }

    get getradi(){
        return this._radi;
    }
    set setcentre(centre){
        this._centre = centre;
    }
    set setradi(radi){
        this._radi = radi;
    }



//métodes

distancialCertres(centrecercle2){

    let altreCerclex = centrecercle2[0].getx;
    let altreCercley = centrecercle2[0].gety;
    let centrecercle1 = this._centre

    let x = centrecercle1[0].getx;
    let y = centrecercle2[0].gety;
    
    window.alert("La distancia entre els cercles és X" +  " " + (x - altreCerclex) + "  " + "y en Y és" + (y - altreCercley)) 

}

equals(altreCercle){
        if((this._centre && this._radi) == (altreCercle.getcentre && altreCercle.getradi)){
        window.alert("Els cercles son iguals");
    }else{window.alert("Els cercles son diferents");
}
}

sonConcentrics(altreCercle){
if((this._centre) == (altreCercle.getcentre)){
    window.alert("Son centrics");
}else{window.alert("No son centrics");
}
}

tenenIgualRadi(altreCercle){
    if((this._radi) == (altreCercle.getradi)){
    window.alert("Els radis son iguals");
}else{window.alert("Els radis son diferents");
}
}

sonTangents(altreCercle){
    if(Math.tan((this._radi)) == (Math.tan(altreCercle.getradi))){
    window.alert("Son tangents");
}else{window.alert("No son tangents");
}
}

//falten dos métodes q per temes matemátics no em surtien


}

