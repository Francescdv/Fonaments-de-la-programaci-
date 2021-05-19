let arrayClients = []

function crearclient(){
    let nomNC = prompt ("Introdueix el teu nom");
    let cognomNC = prompt ("Introdueix el teu cognom");
    let client = buscar_client(nomNC, cognomNC);
    
    if (client != -1){
            window.alert("Aquesta client ja existeix ");

    }else{let nouClient = new Client (nomNC, cognomNC);
        arrayClients.push(nouClient);
        window.alert("El client " + " " + nomNC + " " + "ha sigut creat");
    }
    }


function eliminarclient(){
    let nomNC = prompt ("Introdueix el teu nom");
    let cognomNC = prompt ("Introdueix el teu cognom");
    let i = buscar_client(nomNC, cognomNC)
    if (( i != -1)){
        arrayClients.splice(i, 1);
        window.alert("Ha sigut eliminat");
}else{  
window.alert("El client no existeix")}
}


function crearCompte(){
    let nomNC = prompt ("Introdueix el teu nom");
    let cognomNC = prompt ("Introdueix el teu cognom");
    let client = buscar_client(nomNC, cognomNC);
    if ( client != -1){
    let nomCompte = prompt ("Introdueix el nom del compte");
    let numeroCompte = Number (prompt ("Introdueix el número del compte"));   
    let compteClient = buscar_comptes(client, nomCompte, numeroCompte);

    if(compteClient ==-1){
    let noucompte = new Compte (nomCompte, numeroCompte);
    //arrayClients[i].afageixcompte(noucompte);
    let clientSelec = arrayClients[client];
    clientSelec.afageixcomte(noucompte);
    window.alert("El compte ha sigut creat");

}else if(compteClient != -1){window.alert("El compte ja existeix")}
}else if (client == -1){window.alert("El client no existeix")}

}

function baixacompte(){
let nomNC = prompt ("Introdueix el teu nom");
let cognomNC = prompt ("Introdueix el teu cognom");
let client = buscar_client(nomNC, cognomNC);

if (client != -1){
let nomCompte = prompt ("Introdueix el nom del compte");
let numeroCompte = Number (prompt ("Introdueix el número del compte"));    
let compteClient = buscar_comptes(client, nomCompte, numeroCompte);

if(compteClient != -1){
let compteConcret = arrayClients[client].getcomptes;
compteConcret.splice(compteClient, 1)
}else if(compteClient == -1){window.alert("El compte no existeix")}
}else if (client == -1){window.alert("El client no existeix")}
}

function operar(){
    let operacio;
    let nomNC = prompt ("Introdueix el teu nom");
    let cognomNC = prompt ("Introdueix el teu cognom");
    let client = buscar_client(nomNC, cognomNC)
    if (client != -1){
    let nomCompte = prompt ("Introdueix el nom del compte");
    let numeroCompte = Number (prompt ("Introdueix el número del compte"));    
    let compteClient = buscar_comptes(client, nomCompte, numeroCompte);
   
    if(compteClient != -1){
        let compteConcret = arrayClients[client].getcomptes;
        valor = 0;
        do{operacio = Number (prompt("Quin operació vols realitzar 1. Ingresar, 2. Retirar, 3. Veure el nombre de transaccions, 4.Veure l'estat del compte, 5.Sortir "));
        switch(operacio){
            case 1: let ingres = Number (prompt ("introdueix la cuentitat de diners que vols ingressar"));
            compteConcret[compteClient].ingresarEuros(ingres);
            break;
            case 2: let extreure = Number (prompt ("introdueix la cuentitat de diners que vols extreure"));
            compteConcret[compteClient].retirarSaldo(extreure);
            break;
            case 3: window.alert("Has realitzat " + compteConcret[compteClient]._nombre_de_transaccions + " " + "transaccions");
            break;
            case 4: window.alert("L'estat del compte és el següent: " + compteConcret[compteClient].veureCompte());
            break;
            case 5: window.alert("Passa un bon día")
            break;
            default: window.alert("La operació solicitada no existeix")

        }
        
    }while(operacio != 5)
}
}if (compteClient == -1){
    let text = "";  
    for(let i= 0; i < arrayNouCompte.length; i++){
        text += arrayNouCompte[i]._nom + " " 
    
    }window.alert("El compte introduit no existeix, actualment disposes dels següents comptes: " + text)
}
}
       

//funcions


function buscar_client(nomNC, cognomNC){
    let resposta = -1;
    for (let i= 0; i < arrayClients.length; i++){
    if ((nomNC == arrayClients[i]._nom) && (cognomNC == arrayClients[i]._cognom)){
        resposta = i;
    }
} return resposta
}

function buscar_comptes(client, nomCompte, numeroCompte){
    let resposta = -1;
    let arrayDeComptes = arrayClients[client].getcomptes;
    let nomCC;
    let nombreCC;
    
    for (let i= 0; i < arrayDeComptes.length; i++){
         nomCC = arrayDeComptes[i].getnom_compte;
         nombreCC = arrayDeComptes[i].getnombre_de_compte
    if ((nomCompte == nomCC) && (numeroCompte == nombreCC)){
        resposta = i;
    }
} return resposta
}

