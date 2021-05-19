
//Estableix els seients predeterminats que té el cinema
let arraySeients = [new Seient ("1A"), new Seient ("1B"), new Seient ("1C"), new Seient ("1D"), new Seient ("1E"), new Seient ("2A"), new Seient ("2B"), new Seient ("2C"), new Seient ("2D"), new Seient ("2E"), new Seient ("3A"),new Seient ("3B"), new Seient ("3C"), new Seient ("3D"), new Seient ("3E")]
let cine = new Cinema(arraySeients);

//Clients generats

let arrayClients =[];
let arrayNoms = ["Jordi", "Helena", "Fran", "Marina", "Neus", "Miquel", "Blanca", "Marc", "Ester", "Albert"];




// Crea 10 espectadors amb valors d'edat i diners donats a l'atzar
function crearEspectadors(){


let i = 0;
    for(i = 0; i < 10; i++){

        let nom = arrayNoms[i];
        let espectador = new Espectador(nom);
        arrayClients.push(espectador)
        
    }

}

function projectar(){
    let titol = prompt("introdueix el titol");
    let duracio =Number (prompt("Introdueix la duració en minuts"));
    let edatMin = Number (prompt("Introdueix la edad mínima per veure la película"));
    let director = prompt("Introdueix el director");
    let novaPelicula = new Pelicula(titol, duracio, edatMin, director);
    cine.setPelicula = (novaPelicula);
    let preu = Number (prompt("introdueix el preu de la sessió"))
    cine.setPreu = (preu);
    window.alert("S'està projectant la pelicula " + titol + ", te una duració de " + duracio + " min" + ", el director és " + director + ", l'edat mínima serà de " + edatMin + "anys, i el preu de la sessió és de " + preu + "€");

    return [edatMin, preu]

}


function acomodarEspectadors(){

    //edat y preu establerts en la sessió
    let arrayProjectar = projectar()
    let edatMin = arrayProjectar[0];
    let preu = arrayProjectar[1]
    let seientsLl = seientsLliures();
    let arrayFake = [new Seient ("1A"), new Seient ("1B"), new Seient ("1C"), new Seient ("1D"), new Seient ("1E"), new Seient ("2A"),new Seient ("2B"), new Seient ("2C"), new Seient ("2D"), new Seient ("2E"), new Seient ("3A"), new Seient ("3B"), new Seient ("3C"), new Seient ("3D"), new Seient ("3E")]; 
    let nomClient;
    let edatClient;
    let dinersClient;
    let posicioAleatoria;
    let posicioFake;
    let posicioReal;
    let clientAssegut;
    let posicioFinal;

    


    for(let i = 0; i <= arrayClients.length -1; i++){
        nomClient = arrayClients[i].getNom;
        edatClient = arrayClients[i].getEdat;
        dinersClient = arrayClients[i].getDiners;
        seientsLl = seientsLliures();
        

    if(seientsLl > 0){

        if( edatClient >= edatMin && dinersClient >= preu){
           posicioAleatoria = Math.floor((Math.random() * arrayFake.length) + 0);
           posicioFake = arrayFake[posicioAleatoria].getPosicio; //
           posicioReal = buscarposicio(posicioFake);
           clientAssegut = arrayClients[i];
           posicioFinal = posicioReal.getEspectador
           posicioFinal.push(clientAssegut);
           posicioReal.setLliure = false
           arrayFake.splice(posicioAleatoria,1);
           window.alert(nomClient + ", amb una edat de " + edatClient + "anys" +" i amb una quantitat de diners de " + dinersClient + "€" + ", ha sigut acomadada a la butaca " + arraySeients[i].getPosicio);

        }else if(edatClient < edatMin){
            window.alert(nomClient + " no compleix el requisit de l'edat");
        
        }else if(dinersClient < preu){window.alert(nomClient + " no compleix el requisit del preu");
            
        }
    }else{window.alert("No queden seients lliures")}
    

    }
}






function seientsLliures(){
    
    let numseients = 0;
    let seientLliure;
    let salaCinema;
    let a = 0;

    for(a; a <= arraySeients.length -1; a++){
        salaCinema = cine.getSala;
        seientLliure = salaCinema[a].getLliure;

        if(seientLliure == true){
            numseients++
        }
    } return numseients
}


//Busca una posició en l'array real que tingui el mateix nom que la posició de l'array fake

function buscarposicio(posicioFake){
    let resposta;

    for(let i = 0; i < arraySeients.length; i++){

        if(posicioFake == arraySeients[i].getPosicio){

            resposta = arraySeients[i];

        }

    }return resposta
}
