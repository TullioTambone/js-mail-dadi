// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const mails = ["email.funzionante@email.com", "prova@gmail.com"];
console.log(mails);


//controllo della presenza dell'email
function registro(){

    //var controllo
    let a = false;

    for(let i = 0; i < mails.length; i++){
        
        // validazione della presenza
        if (mails[i] == document.getElementById('type-mail').value){
            a = true; 
        }
    }

    if ( a ){
        //l'email è già presente

        console.log(mails);
        document.getElementById('alert').innerHTML = 'Mail già presente.. GIOCA!!';
    } else {
        //salva l'eamil se non presente

        mails.push(document.getElementById('type-mail').value);
        document.getElementById('alert').innerHTML = 'email registrata';
        console.log(mails);
    }
    
}


//validazione per giocare 
function playGame(){

    //var controllo
    let x = false;

    for (let i = 0; i < mails.length; i++){
        
        if (mails[i] == document.getElementById('type-mail').value){
            x = true; 
        }
    }
    
    if ( x ){
        document.getElementById('alert').innerHTML = `
        <div class="game">
            <div class="user-1">
                <h2>You</h2>
                <h5 class="estrazione-dado estr-1">
                
                </h5>
            </div>
            <input type="button" value="Play" id="play" onclick="playDadi()">
            <div class="user-2">
                <h2>PC</h2>
                <h5 class="estrazione-dado estr-2">
                
                </h5>
            </div>
            <div class="risultato">
                <h1 class="w-l-drago"></h1>
            </div>
        </div>
        `

    } else {
        document.getElementById('alert').innerHTML = 'Email non trovata... Registrati';
    }
}

//giochiamo

function playDadi(){

    
    //genero numeri random da 1 a 6
    let userNum = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.estr-1').innerHTML = `${userNum}`;

    let computerNum = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.estr-2').innerHTML =  `${computerNum}`;

     //logica gioco

     if (userNum == computerNum){
        // hai pareggiato 
        console.log('Hai pareggiato');
        document.querySelector('.w-l-drago').innerHTML = 'PAREGGIO';

     } else if (userNum > computerNum){
        // hai vinto
        console.log('hai vinto');
        document.querySelector('.w-l-drago').innerHTML = 'HAI VINTO';

     } else if (userNum < computerNum){
        // hai perso
        console.log('hai perso');
        document.querySelector('.w-l-drago').innerHTML = 'HAI PERSO';
     }
}