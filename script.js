let audio = new Audio('./assets/hino.mp3')

//Variáveis
const messages = {
    0: "Realize o óbvio, pense no improvável e conquiste o impossível..",
    1: "Você sempre será a sua melhor companhia!",
    2: "A sorte favorece a mente bem preparada",
    3: "Acredite em milagres, mas não dependa deles",
    4: "Nada é por acaso… Acredite em seus sonhos e nos seus potenciais….Na vida tudo se supera",
    5: "A nossa vida tem 4 sentidos… Amar, Sofrer, Lutar e Vencer. Ame muito, sofra pouco, lute bastante e vença sempre!",
    6: "Não acredite mais em pessoas especiais, mas em momentos especiais com pessoas normais",
    7: "A inspiração vem dos outros. A motivação vem de dentro de nós",
    8: "O que empobrece o ser humano, não é a falta de dinheiro, mais sim, a falta de fé,motivação e criatividade",
    9: "Pare de procurar eternamente; a felicidade está mesmo aqui ao seu lado",
}

const container = document.querySelector(".container")

const container2 = document.querySelector(".container2")
const btn = document.querySelector("#btn")
const cookie = document.querySelector("#cookie")
let message = document.querySelector(".message")

let random

//events

cookie.addEventListener('click', ClickonCookie)
btn.addEventListener('click', backtoHome)


function ClickonCookie(){
    container2.classList.toggle("hide")
    container.classList.toggle("hide")
    randonNumber()
    randomMessage(random)
    message.classList.add('appear')
    audio.play();
    diminuir_volume()
    

}

function diminuir_volume(){
    if( audio.volume > 0)  audio.volume -= 0.9;
}

function backtoHome(){
    container2.classList.toggle("hide")
    container.classList.toggle("hide") 
      
}

function randonNumber(){
    random = Math.random() * 10
    random = Math.trunc(random)     
    console.log(random)
}

function randomMessage(index){
    message.textContent = messages[index]
}


 
    