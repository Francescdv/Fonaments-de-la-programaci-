let arrayHotel =[]
let arrayCinema =[]
let arrayHospital =[]

function crearedifici(){
    
        let tipusEdifici = Number (prompt ("Quin edifici vols crear? 1.Hotel, 2.Cinema, 3.Hospital"));
        let edifici;
        
        switch(tipusEdifici){
        case 1: 
        let nomH = prompt ("Introdueix el nom de l'edifici");
        edifici = buscarEdifici2(arrayHotel, nomH);
        if(edifici == -1){
        let numero_plantesH = Number (prompt ("Introdueix el número de plantes"));
        let superficieH = Number (prompt ("Introdueix la superficie en m2"));
        let habitacionsH = Number (prompt ("Introdueix el número d'habitacions"));
        let nouHotel = new Hotel (nomH, numero_plantesH, superficieH, habitacionsH);
        arrayHotel.push(nouHotel);
        }else{window.alert("L'edifici ja existeix")}
        
        break;

        case 2:
            let nomC = prompt ("Introdueix el nom de l'edifici");
            edifici = buscarEdifici2(arrayCinema, nomC);
           if(edifici == -1){
            let numero_plantesC = Number (prompt ("Introdueix el número de plantes"));
            let superficieC = Number (prompt ("Introdueix la superficie en m2"));
            let aforamentC = Number (prompt ("Introdueix l'aforament máxim"));
            let nouCinema = new Cinema (nomC, numero_plantesC, superficieC, aforamentC);
            arrayCinema.push(nouCinema);
            }else{window.alert("L'edifici ja existeix")}
        break;
        case 3:
            let nomHP = prompt ("Introdueix el nom de l'edifici");
            edifici = buscarEdifici2(arrayHospital, nomHP);
           if(edifici == -1){
            let numero_plantesHP = Number (prompt ("Introdueix el número de plantes"));
            let superficieHP = Number (prompt ("Introdueix la superficie en m2"));
            let malaltsHP = Number (prompt ("Introdueix el nombre de malalts"));
            let nouHospital = new Hospital (nomHP, numero_plantesHP, superficieHP, malaltsHP);
            arrayHospital.push(nouHospital);
            }else{window.alert("L'edifici ja existeix")}
        break;
        default: window.alert("La operació solicitada no existeix")
    }
}




function destruirEdifici(){
    let arrayedifici = tipusEdifici()
    let i = buscarEdifici(arrayedifici);
    if (( i != -1)){
        arrayedifici.splice(i, 1);
        window.alert("Ha sigut eliminat");
}else{  
window.alert("L'edifici no existeix")}
}


function mostrar(){


    let array = tipusEdifici()
    let edifici;
    let informacio;
   
    

    switch(array){
    case arrayHotel: 
    edifici = buscarEdifici(arrayHotel);
    if(edifici != -1){
    informacio = window.alert("El nom de l'Hotel és " + edifici.getnom + ", " + " té " + edifici.getnumero_plantes + " " + " plantes" + ", " + "una superficie de " + edifici.getsuperficie + "m2" + " " + " y el nombre d'habitacions és " + edifici.gethabitacions);
    }else{(window.alert("Aquest edifici no consta en la nostra base de dades"))};
    
    break;

    case arrayCinema:
        edifici = buscarEdifici(arrayCinema);
        if(edifici != -1){
        informacio = window.alert("El nom de l'Hotel és " + edifici.getnom + ", " + " té " + edifici.getnumero_plantes + " " + " plantes" + ", " + "una superficie de " + edifici.getsuperficie + "m2" + " " + " y el nombre l'aforament és de " + edifici.getaforament);
        }else{(window.alert("Aquest edifici no consta en la nostra base de dades"))}
        
  
    break;
   
    case arrayHospital:
        edifici = buscarEdifici(arrayHospital);
        if(edifici != -1){
        informacio = window.alert("El nom de l'Hotel és " + edifici.getnom + ", " + " té " + edifici.getnumero_plantes + " " + " plantes" + ", " + "una superficie de " + edifici.getsuperficie + "m2" + " " + " y el nombre de malalts és " + edifici.getmalalts);
        }else{(window.alert("Aquest edifici no consta en la nostra base de dades"))}
        
   

    break;
    default: window.alert("La operació solicitada no existeix")
}
}



function utilitzar(){


    let array = tipusEdifici()
    let edifici;
    let neteja;
    let vigilancia;

    switch(array){
    case arrayHotel:
    if(edifici != -1){ 
    edifici = buscarEdifici(arrayHotel);
    neteja = edifici.netejar();
    vigilancia = edifici.calcularCostVigilancia();
    let servei = edifici.serveiHabitacions();
    window.alert(neteja + ",  " + vigilancia + ",  " + servei);
    }else{(window.alert("Aquest edifici no consta en la nostra base de dades"))}

    break;

    case arrayCinema:
    edifici = buscarEdifici(arrayCinema);
    if(edifici != -1){
    sessio = edifici.projectarSessio();
    neteja = edifici.netejar();
    vigilancia = edifici.calcularCostVigilancia();
    window.alert(neteja + ",  " + vigilancia + ",  " +  sessio);
    }else{(window.alert("Aquest edifici no consta en la nostra base de dades"))}
    break;
   
    case arrayHospital:
        
    edifici = buscarEdifici(arrayHospital);
    if(edifici != -1){
    vigilancia = edifici.calcularCostVigilancia();
    neteja = edifici.netejar();
    let menjar = edifici.repartirDinar();
    window.alert(neteja + ",  " + vigilancia + ",  " +  menjar);
    }else{(window.alert("Aquest edifici no consta en la nostra base de dades"))}
    break;
    default: window.alert("La operació solicitada no existeix")
}
}














 function tipusEdifici(){
    let tipusEdifici = Number (prompt ("Indica el tipus d'edifici: 1.Hotel, 2.Cinema, 3.Hospital"));
    let resposta;
    

    switch(tipusEdifici){
    case 1: resposta = arrayHotel
    break;
    case 2:resposta = arrayCinema
    break;
    case 3:resposta = arrayHospital
    break;
    default: window.alert("La operació solicitada no existeix")
    }return resposta
}

    function buscarEdifici(arrayedifici){
        let edifici =-1;
        let nom = prompt ("Introdueix el nom de l'edifici");

    for (let i= 0; i < arrayedifici.length; i++){
        if (nom == arrayedifici[i].getnom){
            edifici = arrayedifici[i];
        }
    } return edifici

 }

 function buscarEdifici2(arrayedifici, nom){
    let edifici =-1;

for (let i= 0; i < arrayedifici.length; i++){
    if (nom == arrayedifici[i].getnom){
        edifici = arrayedifici[i];
    }

} return edifici

}