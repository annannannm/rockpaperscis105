var rps = ["rock", "paper", "scissors"]
compScore = 0;
userScore = 0;
tie = 0;
let playHistory = [];
function user(choose){
let computachoice = computa();

if (choose === "end"){
    document.getElementById("score0").remove()
    document.getElementById("score1").remove()
    document.getElementById("tie").remove()
    document.getElementById("score").remove()
    
    if (Number(compScore)>Number(userScore)){
        let winnerC = document.getElementById("winnerC");
        winnerC.innerText = "COMPUTER wins";
    }

    else if (Number(compScore)<Number(userScore)){
        let winnerU = document.getElementById("winnerU");
        winnerU.innerText = "USER wins";
    }
    else if (Number(compScore) === Number(userScore)){
        let winnerT = document.getElementById("winnerT");
        winnerT.innerText = "ITS A TIE";
    }
    else {}


    let list = document.getElementById('history');
    list.innerHTML = "";
    playHistory.forEach(function (play) {
        let item = document.createElement('li');
        item.textContent = `You - ${play.you} Computer-${play.computer}`;
        list.appendChild(item);
    })
    return;}

playHistory.push({
    you: choose, computer:computachoice
});
let swag =  document.getElementById('score');
let userans = document.getElementById('result');
let compans = document.getElementById('computer-choice');

let text = "";


if(choose === computachoice){
    text = "its a tie!";
    tie++;
    document.getElementById('score0').innerText = "Computer Score : " + compScore;
    document.getElementById('score1').innerText = "Your Score : "+ userScore;
    document.getElementById('tie').innerText = "Tie : "+ tie;
    
}
else if(choose === "rock" && computachoice === "paper"){
   text = "you lose, computa wins";
   compScore++;
   document.getElementById('score0').innerText = "Computer Score : " + compScore;
   document.getElementById('score1').innerText = "Your Score : "+ userScore;
   document.getElementById('tie').innerText = "Tie : "+ tie;
    }
else if(choose === "rock" && computachoice === "scissors"){
    text = "you win, comoputa loses";
    userScore++;
    document.getElementById('score0').innerText = "Computer Score : " + compScore;
    document.getElementById('score1').innerText = "Your Score : "+ userScore;
    document.getElementById('tie').innerText = "Tie : "+ tie;
}
else if(choose === "paper" && computachoice === "rock"){
   text = "you win, computa loses";
   userScore++;
    document.getElementById('score0').innerText = "Computer Score : " + compScore;
    document.getElementById('score1').innerText = "Your Score : "+ userScore;
    document.getElementById('tie').innerText = "Tie : "+ tie;
}
else if(choose === "paper" && computachoice === "scissors"){
   text = "you lose, computa wins";
   compScore++;
    document.getElementById('score0').innerText = "Computer Score : " + compScore;
    document.getElementById('score1').innerText = "Your Score : "+ userScore;
    document.getElementById('tie').innerText = "Tie : "+ tie;
}
else if(choose === "scissors" && computachoice === "paper"){
   text = "you win, computa loses";
   userScore++;
    document.getElementById('score0').innerText = "Computer Score : " + compScore;
   document.getElementById('score1').innerText = "Your Score : "+ userScore;
   document.getElementById('tie').innerText = "Tie : "+ tie;
}
else if (choose === "scissors" && computachoice === "rock"){
   text = "you lose, computa wins";
   compScore++
    document.getElementById('score0').innerText = "Computer Score : " + compScore;
    document.getElementById('score1').innerText = "Your Score : "+ userScore;
    document.getElementById('tie').innerText = "Tie : "+ tie;
}
userans.textContent = "you chose "  + choose;
compans.textContent = "computa chose " + computachoice;
swag.textContent = text;
text = [computa()]
}





function computa(){
    let random = Math.floor(Math.random()*rps.length);
    return rps[random];
}