// Selecionando elementos do DOM
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const milisecondsEl = document.querySelector("#miliseconds");
const startEl = document.querySelector("#startBtn");
const pauseEl = document.querySelector("#pauseBtn");
const resumeEl = document.querySelector("#resumeBtn");
const resetEl = document.querySelector("#resetBtn");

// Variáveis para o cronômetro
let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false; /*false pq começa pausado*/

// Event listeners para os botões
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

 //setInterval serve pra repetir a execução acada tanto tempo, vc define o tempo
 // Função para iniciar o cronômetro
function startTimer() {
    interval = setInterval(() => {

        if (!isPaused) {
            miliseconds += 10;

            if (miliseconds === 1000) {
                seconds++;
                miliseconds = 0;
            }

            if(seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            milisecondsEl.textContent = formatMiliseconds(miliseconds);
        }
    }, 10);

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
};
// Função para pausar o cronômetro
function pauseTimer() {
    isPaused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}
// Função para retomar o cronômetro
function resumeTimer() {
    isPaused = false; 
    pauseBtn.style.display = "block";
    resumeEl.style.display = "none";
}
// Função para resetar o cronômetro
function resetTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    miliseconds = 0;

    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    milisecondsEl.textContent = "000";

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
}

// Função para formatar o tempo (minutos e segundos)
//essa função esta garantindo q todos os nmeros abaixo de 10 tenham um 0 ao seu lado
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
// Função para formatar os milissegundos e garantir que numeros abaixo de 100 e 10 tenham 0 à sua esquerda
function formatMiliseconds(time) {
    return time < 100 ? time.padStart(3, "0") : time;
}


