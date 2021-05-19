let arrayJugadores = [];






function crearJugadores(){
    if(arrayJugadores < 6){
    let numJug = Number (prompt("Introdueix un número de jugadors, el máxim són 6."))
    let id;
    let nombre;
    let nickname;

    if(numJug > 6){
        numJug = 6
        window.alert("Has superado el límite máximo de jugadores, solanmente se crearan 6.")
    }

    for(let i = 1; i<= numJug; i++){
        id = [i];
        nombre = prompt("Introduce tu nombre");
        nickname = nombre + id;
        jugador = new Jugador(id, nombre);
        arrayJugadores.push(jugador);
    

    }
}window.alert("Ja has superat el màxim de 6 jugadors")
}
    function finJuego(){

        for(let i= 0; i< arrayJugadores.length; i++){
            if(arrayJugadores[i].getVivo == false){
                arrayJugadores.splice([i], 1);
            }else(true)

        }

    }


    function ronda(){

        let disparo;
        let i = 0;
        let revolver = new Revolver();

        do{
        revolver.informa()   
        disparo = arrayJugadores[i].jugar(revolver);
        if(disparo == true){
        window.alert("El jugador " + arrayJugadores[i].getNickname + " " + "s'ha disparat i s'ha mort")
        i = 7
    }else{window.alert("El jugador " + arrayJugadores[i].getNickname + " " + "s'ha disparat i ha sobreviscut")}
    
        i++
        
    }while(arrayJugadores.length > i) 
    }


    function juego(){
        ronda();
        finJuego();
        if(arrayJugadores.length == 1){
            window.alert(arrayJugadores[0].getNickname + " " + "ha guanyat la partida") 
        }

    }





