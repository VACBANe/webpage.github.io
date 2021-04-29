const rock = document.getElementById("rock");       //0 - rock
const paper = document.getElementById("paper");     //1 - paper
const scissors = document.getElementById("scissors");//2 - scissors
const your = document.getElementById("yourImg");
const bot = document.getElementById("botImg");
const yourScoreText = document.getElementById("yourScoreText");
const botScoreText = document.getElementById("botScoreText");
let botValue = null;
let yourScore = 0;
let botScore = 0;
function play (value) {
    if(yourScore === 5 || botScore === 5) {
        return 0;
    }
    botValue = Math.floor(Math.random() * 3);
    (value === 0)? your.src = 'images/rock.png'
        : value === 1? your.src = 'images/paper.png'
        : your.src = 'images/scissors.png';
    (botValue === 0)? bot.src = 'images/rock.png'
        : botValue === 1? bot.src = 'images/paper.png'
        : bot.src = 'images/scissors.png';
    console.log(botValue);
    switch(value){
        case 0:
            if(botValue === 1) {
                botScore++;
            } else if(botValue === 2) {
                yourScore++;
            }
            break;
        case 1:
            if(botValue === 2) {
                botScore++;
            } else if(botValue === 0) {
                yourScore++;
            }
            break;
        case 2:
            if(botValue === 0) {
                botScore++;
            } else if(botValue === 1) {
                yourScore++;
            }
            break;
    }
    changeScore(yourScore, botScore);
    if(yourScore === 5 || botScore === 5) {
        endGame(yourScore);
    }
}

rock.onclick = () => {
    play(0);
}
paper.onclick = () => {
    play(1);
}
scissors.onclick = () => {
    play(2);
}

const changeScore = (a,b) => {
    yourScoreText.textContent = a.toString();
    botScoreText.textContent = b.toString();
}

// HUD
const startbtn = document.getElementById("start_btn")
const playbtns = document.getElementById("play_buttons")
const restartbtn = document.getElementById("restart_btn")
const result = document.getElementById("res");

startbtn.onclick = () => {
    startbtn.style.display = "none";
    playbtns.style.display = "block";
}

restartbtn.onclick = () => {
    yourScore = botScore = 0;
    bot.src = your.src = result.textContent = "";
    restartbtn.style.display = "none";
    changeScore(yourScore, botScore);
}

const endGame = (d) => {
    if(d === 5){
        result.style.color = "green";
        result.textContent = "You won! Congratulations!";
    } else {
        result.style.color = "red";
        result.textContent = "Fail...";
    }
    restartbtn.style.display = "block";
}

