

let arrayNouCompte = [];

function crearCompte(){
    let nomNC = prompt ("Introdueix el teu nom");
    let cognomNC = prompt ("Introdueix el teu cognom");
    let nombre_de_compteNC = Number (prompt ("introdueix el nombre de compte"));
    let valor = 1
    
    for (let i= 0; i < arrayNouCompte.length; i++){

        if ((nomNC == arrayNouCompte[i]._nom) || (nombre_de_compteNC == arrayNouCompte[i]._nombre_de_compte)){
            valor = 0;
            window.alert("Aquesta compte ja existeix " + arrayNouCompte[i].veureCompte());

        }

    }if(valor == 1){
        let nouCompte = new Compte (nomNC, cognomNC, nombre_de_compteNC);
        arrayNouCompte.push(nouCompte)}
}


    function baixa(){
        let i = buscar_persona()
        if (( i != -1)){
            valor =0;
            arrayNouCompte.splice(i, 1);
            window.alert("Ha sigut eliminat");

    }if (i == -1){
    let text = "";  
    for(let i= 0 -1; i < arrayNouCompte.length; i++){
        text += arrayNouCompte[i]._nom + " " }
    
    window.alert("El compte introduit no existeix, actualment disposes dels següents comptes: " + text)}
}

function operar(){
    let operacio;
    let i = buscar_persona()
    if (i != -1){
        valor = 0;
        do{operacio = Number (prompt("Quin operació vols realitzar 1. Ingresar, 2. Retirar, 3. Veure el nombre de transaccions, 4.Veure l'estat del compte, 5.Sortir "));
        switch(operacio){
            case 1: let ingres = Number (prompt ("introdueix la cuentitat de diners que vols ingressar"));
            arrayNouCompte[i].ingresarEuros(ingres);
            break;
            case 2: let extreure = Number (prompt ("introdueix la cuentitat de diners que vols extreure"));
            arrayNouCompte[i].retirarSaldo(extreure);
            break;
            case 3: window.alert("Has realitzat " + arrayNouCompte[i]._nombre_de_transaccions + " " + "transaccions");
            break;
            case 4: window.alert("L'estat del compte és el següent: " + arrayNouCompte[i].veureCompte());
            break;
            case 5: window.alert("Passa un bon día")
            break;
            default: window.alert("La operació solicitada no existeix")

        } 
        
    }while(operacio != 5)
    
}if (i == -1){
    let text = "";  
    for(let i= 0; i < arrayNouCompte.length; i++){
        text += arrayNouCompte[i]._nom + " " 
    
    }window.alert("El compte introduit no existeix, actualment disposes dels següents comptes: " + text)
}
}



function buscar_persona(){
    let nomNC = prompt ("Introdueix el teu nom");
    let cognomNC = prompt ("Introdueix el teu cognom");
    let nombre_de_compteNC = Number (prompt ("introdueix el nombre de compte"));
    let resposta = -1;
    for (let i= 0; i < arrayNouCompte.length; i++){
    if ((nomNC == arrayNouCompte[i]._nom) && (cognomNC == arrayNouCompte[i]._cognom)  && (nombre_de_compteNC == arrayNouCompte[i]._nombre_de_compte)){
        resposta = i;
    }
} return resposta
}


