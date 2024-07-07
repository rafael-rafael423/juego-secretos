let numerosecreto = 0;
let intentos = 0;
let listanumerossorteados = [];
let numeromaximo = 10;

function asignartextoelemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarintento(){
    let numerodeusuario = parseInt(document.getElementById('valorusuario').value);
    console.log(intentos);
    
    if(numerodeusuario === numerosecreto){
        asignartextoelemento('p',`acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    }else{
        if(numerodeusuario > numerosecreto){
            asignartextoelemento('p','el numero secreto es menor');
        }else{
            asignartextoelemento('p','el numero secreto es mayor');
        }
        intentos++;
        limpiarcaja();
    }
    return;
}

function limpiarcaja(){
    document.querySelector('#valorusuario').value = '';
}

function generarnumerosecreto(){
    let numerogenerado = Math.floor(Math.random()*numeromaximo)+1;
    console.log(numerogenerado);
    console.log(listanumerossorteados);

    if(listanumerossorteados.length == numeromaximo){
        asignartextoelemento('p','ya se sortearon todos los numeros posibles');

    }else{ 
       if(listanumerossorteados.includes(numerogenerado)){
           return generarnumerosecreto();

        }else{
            listanumerossorteados.push(numerogenerado);
            return numerogenerado;
        }
    }

}
function condicionesiniciales(){
    asignartextoelemento("h1","juego del numero secreto!");
    asignartextoelemento("p",`indica un numero del 1 al ${numeromaximo}`);
    numerosecreto = generarnumerosecreto();
    intentos = 1;

}

function reiniciarjuego(){
    limpiarcaja();
    condicionesiniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesiniciales();

