let rodando = false;
let segundosP = 60;
let minutosP=24;
let segundosD = 60;
let minutosD = 4;
let tocando = false;
let naoReset = true;

let fundo = document.querySelector('body');
let audio = document.querySelector('audio');
let min = document.getElementsByTagName('p')[0];
let sec = document.getElementsByTagName('p')[1];



// document.getElementById("teste").style.display = "";




    function parar(){
        
        clearInterval(interval);
        tocando = false;
        rodando = false;
        document.getElementById("teste").style.backgroundColor = "";
        document.getElementById("work").style.backgroundColor = "";
        
    }



function atualizarTimer(){
    if(minutosP>=0){
        
        segundosP --;
        sec.innerHTML = segundosP
        min.innerHTML = `${minutosP}:`
        
        if(segundosP==0){
            // sec.innerHTML = '00'
            minutosP --;
            segundosP = 60
        }else if(segundosP<10){
            sec.innerHTML = `0${segundosP}`
        }else if(minutosP ==0){
            window.setTimeout(tocarAudio,60000)
            document.getElementById("teste").style.backgroundColor = "green";
            
        }
        }
}

function iniciarPomodoro(){
    if(rodando == false){
    interval = setInterval(atualizarTimer, 1000)
    rodando = true
    fundo.style.backgroundImage = "url('https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"
        }
    }



function iniciarDescanso(){
    if(rodando == false){
        interval = setInterval(atualizarTimerDescanso, 1000)
        rodando = true

        fundo.style.backgroundImage = "url('https://images.unsplash.com/photo-1541188495357-ad2dc89487f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')"
        }
}

function atualizarTimerDescanso(){
    if(minutosD >=0){
        segundosD --;
        sec.innerHTML = segundosD
        min.innerHTML = `${minutosD}:`
    }if(segundosD ==0){
        minutosD --;
        segundosD = 60
    }else if(segundosD<10){
        sec.innerHTML = `0${segundosD}`
}
if(minutosD ==0){
    // como nao sei como bugou que nao consigo selecionar minuto 0 segundo 0, e sim somente quando atinge o minuto 0, vou adicionar um delay ao alarme pra tocar apos 1 minuto
    document.getElementById("work").style.backgroundColor = "green";
    window.setTimeout(tocarAudio,60000)
}
}

function resetar(){
    document.getElementById("teste").style.backgroundColor = "";
    document.getElementById("work").style.backgroundColor = "";
    minutosD = 4;
    segundosD = 60;
    segundosP = 60;
    minutosP = 24
    naoReset = false
    tocando = true;

}



function tocarAudio(){
    if(tocando = true){
        audio.play()
    }
    
}

// function atualizarText(){
//     let h = document.getElementsByTagName('h1')[0];

//     h.innerHTML = ` ${numero}`;
//     numero++;
//     }