
let arrayCercles = []


function crearcercle(){
    let i = 0

  do{  let radi = Number (prompt("Introdueix el radi del cercle"));
    let x = Number (prompt("Introdueix la posició X"))
    let y = Number (prompt("Introdueix la posició Y"))
    let nouCercle = new Cercle(radi);
    arrayCercles.push(nouCercle);
    let nouPunt = new Punt (x, y);
    let introduircercle = arrayCercles[i].getcentre
    introduircercle.push(nouPunt);
    i++
}while(arrayCercles.length < 2)

}

function infocercles(){

    let cercle1 = arrayCercles[0];
    let cercle2 = arrayCercles[1];
    let posicioC1 = arrayCercles[0].getcentre
    let posicioC2 = arrayCercles[1].getcentre
    //let xC1 = posicioC1.getx
    //let xC2 = posicioC2.getx
    //let yC1 = posicioC1.gety
    //let yC2 = posicioC2.gety


    cercle1.equals(arrayCercles[1]);
    cercle1.distancialCertres(cercle2.getcentre);
    cercle1.tenenIgualRadi(arrayCercles[1]);
    cercle1.sonTangents(arrayCercles[1]);

}