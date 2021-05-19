let arrayHotel = [];
    




function crearHotel(){
let nomH = prompt("Introdueix el nom de l'hotel");
let nombrehabH = Number (prompt ("Introdueix el nombre d'habitacion"));
let nombreplanH = Number (prompt("Introdueix el nombre de plantes"));
let superficietotalH = Number (prompt ("Introdueix la superficie total del hotel en m2"));
let nouHotel = new Hotel (nomH, nombrehabH, nombreplanH, superficietotalH);
arrayHotel.push(nouHotel);
}

function donarDeBaixaHotel(){
let valor = 1;
let nomH = prompt("Introdueix el nom de l'hotel que vols eliminar");
for (let i=0; i<arrayHotel.length; i++){
    
    if (nomH == arrayHotel[i]._nom){
    arrayHotel.splice(i, 1);
    window.alert(nomH + " " + "Ha sigut eliminat");
    valor = 0
    
} 

}if (valor == 1) {window.alert("L'hotel" +  " " + nomH +  " " +  "no existeix")}
}

function veureHotel(){
    let nomH = prompt("Introdueix el nom de l'hotel que vols veure");
    let valor = 1;
    let manteniment;
for (let i=0; i<arrayHotel.length; i++){
    if (nomH == arrayHotel[i]._nom){
        window.alert( 
            "El nom de l'Hotel és " + arrayHotel[i]._nom  + ",  " +
            "disposa de " + arrayHotel[i]._nombrehab + " " + "habitacions" + ",  " +
            arrayHotel[i]._nombreplan + " " + "plantes"  +
            " y la seva superficie és de " +arrayHotel[i]._superficietotal);
            window.alert( manteniment = arrayHotel[i].calcularManteniment());
            valor = 0;

    }

}if (valor == 1) {window.alert("L'hotel" +  " " + nomH +  " " +  "no existeix")}
}

function modificarHotel(){
    let nomH = prompt("Introdueix el nom de l'hotel que vols modificar");
    let valor = 1;
    let pmodificar;
for (let i=0; i<arrayHotel.length; i++){
    if (nomH == arrayHotel[i]._nom){
        valor =0;
        
        do{
        pmodificar = Number (prompt("Quin parametr vols modificar? 1. Nombre d'habitacions, 2. Nombre de plntes, 3. superficie, 4. Surt"));
        switch(pmodificar){
            case 1: let nh = prompt("Introdueix el nombre d'habitacions");
            arrayHotel[i].setnombrehab = nh; 
            break;
            case 2:let np = prompt("Introdueix el nombre de plantes");
            arrayHotel[i].setnombreplan = np; 
            break;
            case 3: let nm2 = prompt("Introdueix els m2");
            arrayHotel[i].setsuperficietotal = nm2; 
            break;
            case 4:window.alert("Has sortit")
            break;
            default: window.alert("El parametre introduit no existeix")
        }
        }while(pmodificar != 4)

        


    }


    }if (valor == 1) {window.alert("L'hotel" +  " " + nomH +  " " +  "no existeix")}


}