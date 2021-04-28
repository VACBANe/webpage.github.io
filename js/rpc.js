let botValue = null;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const your = document.getElementById("you");
const bot = document.getElementById("bot");

//0 - rock
//1 - paper
//2 - scissors



function play (value) {
    botValue = Math.floor(Math.random() * 3);
    console.log(botValue)
    switch(value){
        case 0:
            return botValue == 1? "You loose": (botValue == 2)?"You won" : "Draws"
        case 1:
            return botValue == 2? "You loose": (botValue == 0)?"You won" : "Draws"
        case 2:
            return botValue == 0? "You loose": (botValue == 1)?"You won" : "Draws"
    }
}

rock.onclick = () => {
    console.log(play(0))
    bot.href = "url('https://static.thenounproject.com/png/88666-200.png')";
}
paper.onclick = () => {
    console.log(play(1))
}
scissors.onclick = () => {
    console.log(play(2))
}
