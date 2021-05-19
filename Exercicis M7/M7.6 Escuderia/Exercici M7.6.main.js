let mercedes = new Escuderia ("Mercedes", 1000000, "Alemania");
let ferrari = new Escuderia("Ferrari", 1500000, "Italia");
let arrayEscuderia = [mercedes, ferrari];



function veureEscuderia(){
    let escuderiacotxe;
    escuderiacotxe = buscarescuderia(arrayEscuderia);
    if(escuderiacotxe != -1){
        window.alert("Escuderia: "+ escuderiacotxe.getnom + ", pressupost: " + escuderiacotxe.getpressupost + "€" + ", pais d'origen: " + escuderiacotxe.getpaisOrigen)

    }else{window.alert("Aquesta ecuderia no existeix")}

}


function crearcotxe(){

    let escuderiacotxe;
    let ordre;
    let model;
    let potencia;
    let velocitatmax;
    let color;
    let preu;
    let noucotxe;
    let cotxes;
    let cotxeTrobat;
    let cotxeeliminat;
    let cotxeinfo;

    do{ordre = Number (prompt("1. Introdueix un nou cotxe, 2. Elimina un cotxe, 3. Veure cotxe, 4. Sortir"))
    switch(ordre){
        case 1:
    escuderiacotxe = buscarescuderia(arrayEscuderia);
    if(escuderiacotxe != -1){
        model = prompt ("Indica el model del cotxe");
        potencia = Number (prompt("Indica la potencia del cotxe"))
        velocitatmax = Number (prompt ("indica la velocitat màxima del cotxe"));
        color = prompt("Indica el color")
        preu = Number (prompt ("indica el preu"));
        noucotxe = new Cotxe(model, potencia, velocitatmax, color, preu);
        cotxes = escuderiacotxe.getcotxes
        cotxes.push(noucotxe)

    }else{window.alert("Aquesta ecuderia no existeix")}
    break;
        
        case 2:
            escuderiacotxe = buscarescuderia(arrayEscuderia);
            if(escuderiacotxe != -1){
            model = prompt ("Indica el model");
            cotxeTrobat = buscarcotxe(escuderiacotxe, model);
            cotxeeliminat = escuderiacotxe.getcotxes
            if(cotxeTrobat != -1){ cotxeeliminat.splice(cotxeTrobat, 1);
            window.alert("El cotxe ha sigut eliminat");
            }else(window.alert("El cotxe no existeix"));
        }
        break;
        
        case 3:
            escuderiacotxe = buscarescuderia(arrayEscuderia);
            if(escuderiacotxe != -1){
            model = prompt ("Indica el model");
            cotxeTrobat = buscarcotxe(escuderiacotxe, model);
            cotxeinfo = escuderiacotxe.getcotxes;
            if(cotxeTrobat != -1){window.alert("El model és " + cotxeinfo[cotxeTrobat].getmodel + ", potencia: " +  cotxeinfo[cotxeTrobat].getpotencia + ", velocitat max " + cotxeinfo[cotxeTrobat].getvelocitatmax + ", color: " + cotxeinfo[cotxeTrobat].getcolor + ", preu: " + cotxeinfo[cotxeTrobat].getpreu + "€" );
            }else(window.alert("El cotxe no existeix"));
        }
        break;            
        



}
}while(ordre !=4);

}



function gestionapilot(){

    let escuderiacotxe;
    let ordre = 0;
    let nom;
    let cognom;
    let edat;
    let antiguitat;
    let alçada;
    let pes;
    let nouPilot;
    let pilot;
    let piloteliminat;
    let pilotinfo;


    do{ordre = Number (prompt("1. Introdueix un nou pilot, 2. Elimina un pilot, 3. Veure pilot, 4. Sortir"))
    switch(ordre){
        case 1:
            escuderiacotxe = buscarescuderia(arrayEscuderia);
            if(escuderiacotxe != -1){
                nom = prompt ("Indica el nom del pilot");
                cognom = prompt ("Indica el cognom del pilot");
                edat = Number (prompt("Indica l'edat"))
                antiguitat = Number (prompt ("indica l'antiguitat"));
                alçada = Number (prompt ("indica l'alçada"));
                pes = Number (prompt ("indica el pes"));
                pilotTrobat = buscarpilot(escuderiacotxe, nom, cognom);
                if(pilotTrobat == -1){ 
                nouPilot = new Pilot(nom, cognom, edat, antiguitat, alçada, pes);
                pilot = escuderiacotxe.getpilots
                pilot.push(nouPilot)
            }else{window.alert("Aquesta pilot ja existeix")}
        
        
            }else{window.alert("Aquesta ecuderia no existeix")}
            break;

        case 2:
            escuderiacotxe = buscarescuderia(arrayEscuderia);
            if(escuderiacotxe != -1){
            nom = prompt ("Indica el nom del pilot");
            cognom = prompt ("Indica el cognom del pilot");
            pilotTrobat = buscarpilot(escuderiacotxe, nom, cognom);
            piloteliminat = escuderiacotxe.getpilots
            if(pilotTrobat != -1){ piloteliminat.splice(pilotTrobat, 1);
            window.alert("El pilot ha sigut eliminat");
            }else(window.alert("El pilot no existeix"));
        }
        break;
        
        case 3:
            escuderiacotxe = buscarescuderia(arrayEscuderia);
            if(escuderiacotxe != -1){
            nom = prompt ("Indica el nom del pilot");
            cognom = prompt ("Indica el cognom del pilot");
            pilotTrobat = buscarpilot(escuderiacotxe, nom, cognom);
            pilotinfo = escuderiacotxe.getpilots;
            if(pilotTrobat != -1){window.alert("El pilot es diu " + pilotinfo[pilotTrobat].getnom + " " +  pilotinfo[pilotTrobat].getcognom + ", " + " La seva edad es de " + pilotinfo[pilotTrobat].getedat + "anys,  " + " Medeix " 
            + pilotinfo[pilotTrobat].getalçada + ", te una antiguetat de" + pilotinfo[pilotTrobat].getantiguitat + "anys, i pesa " + pilotinfo[pilotTrobat].getpes + "kg"  + ", el seu salari es de " + pilotinfo[pilotTrobat].soufinal() + "€");
            }else(window.alert("El pilot no existeix"));
        }
        break;            
        
    }
}while(ordre !=4)
 

}



function gestionamecanic(){

    let escuderiacotxe;
    let ordre = 0;
    let nom;
    let cognom;
    let edat;
    let antiguitat;
    let estudis;
    let pilotTrobat;
    let nouMecanic;
    let mec;
    let mecaniceliminat;
    let mecanicinfo;
    

    do{ordre = Number (prompt("1. Introdueix un nou mecanic, 2. Elimina un mecanic, 3. Veure mecanic, 4. Sortir"))
    switch(ordre){
        case 1:
            escuderiacotxe = buscarescuderia(arrayEscuderia);
            if(escuderiacotxe != -1){
                nom = prompt ("Indica el nom del mecanic");
                cognom = prompt ("Indica el cognom");
                edat = Number (prompt("Indica l'edat"))
                antiguitat = Number (prompt ("indica l'antiguitat"));
                estudis = prompt ("Indica si te estudis");
                pilotTrobat = buscarmecanic(escuderiacotxe, nom, cognom);
                if(pilotTrobat == -1){ 
                nouMecanic = new Mecanic(nom, cognom, edat, antiguitat, estudis);
                mec = escuderiacotxe.getmecanics
                mec.push(nouMecanic)
            }else{window.alert("Aquesta mecanic ja existeix")}
        
        
            }else{window.alert("Aquesta ecuderia no existeix")}
            break;

        case 2:
            escuderiacotxe = buscarescuderia(arrayEscuderia);
            if(escuderiacotxe != -1){
            nom = prompt ("Indica el nom del mecanic");
            cognom = prompt ("Indica el cognom");
            mecanicTrobat = buscarmecanic(escuderiacotxe, nom, cognom);
            mecaniceliminat = escuderiacotxe.getmecanics
            if(mecanicTrobat != -1){ mecaniceliminat.splice(mecanicTrobat, 1);
            window.alert("El mecanic ha sigut eliminat");
            }else(window.alert("El mecanic no existeix"));
        }
        break;
        
        case 3:
            escuderiacotxe = buscarescuderia(arrayEscuderia);
            if(escuderiacotxe != -1){
            nom = prompt ("Indica el nom del mecanic");
            cognom = prompt ("Indica el cognom");
            mecanicTrobat = buscarmecanic(escuderiacotxe, nom, cognom);
            mecanicinfo = escuderiacotxe.getmecanics
            if(mecanicTrobat != -1){window.alert("El mecanic es diu " + mecanicinfo[mecanicTrobat].getnom + " " +  mecanicinfo[mecanicTrobat].getcognom + ", " + " La seva edad es de " + mecanicinfo[mecanicTrobat].getedat + "anys,  " + " Medeix "  + ", te una antiguetat de" + mecanicinfo[mecanicTrobat].getantiguitat + "anys, i estudis " + mecanicinfo[mecanicTrobat].getestudis + ", el seu salari es de " + mecanicinfo[mecanicTrobat].soufinalmec() + "€");
            }else(window.alert("El mecanic no existeix"));
        }
        break;            
        
    }
}while(ordre !=4)
 

}












function buscarescuderia(arrayEscuderia){
    let escuderia = -1
    let nom = prompt ("Introdueix el nom de l'escuderia");

for (let i= 0; i < arrayEscuderia.length; i++){
    if (nom == arrayEscuderia[i].getnom){
        escuderia = arrayEscuderia[i];
    }

} return escuderia

}

function buscarpilot(escuderiacotxe, nom, cognom){
    let resposta = -1;
    let pilots = escuderiacotxe.getpilots

for (let i= 0; i < pilots.length; i++){
    if (nom == pilots[i].getnom && cognom == pilots[i].getcognom){
        resposta = i;
    }

} return resposta

}

function buscarmecanic(escuderiacotxe, nom, cognom){
    let resposta = -1;
    let mecanic = escuderiacotxe.getmecanics;

for (let i= 0; i < mecanic.length; i++){
    if (nom == mecanic[i].getnom && cognom == mecanic[i].getcognom){
        resposta = i;
    }

} return resposta

}

function buscarcotxe(escuderiacotxe, model){
    let resposta = -1;
    let cotxe = escuderiacotxe.getcotxes;

for (let i= 0; i < cotxe.length; i++){
    if (model == cotxe[i].getmodel){
        resposta = i;
    }

} return resposta

}