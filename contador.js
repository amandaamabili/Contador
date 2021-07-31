

window.addEventListener("load", () => {

//tempo que o cronometro vai executar
let sec = 420;

const contDiv = document.getElementById("timer");


const secpass = () => {

    let min = Math.floor(sec/60);
    let segundosRestantes = sec % 60;
    
    if(segundosRestantes <10){
        segundosRestantes = "0" + segundosRestantes;
    }

    if(min <10){
        min = "0 " +min;
    }
// vai gerrar o formato de 02:59
    contDiv.innerHTML = min + ":" + segundosRestantes
    

    //condição final
    if(sec > 0){
        sec = sec -1;
    }
    else{
        contDiv.innerHTML=  "Acabou o tempo";
    }
};

const countDown = setInterval(() => secpass(), 1000);
});