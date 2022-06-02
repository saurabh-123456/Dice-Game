console.log("welcome to my game")
let masterRoll = document.getElementById("btn");
let result = document.getElementById("result");
let player1 = document.getElementById("img1");
let player2 = document.getElementById("img2");

let player1nm = document.getElementById("player1");
let player2nm = document.getElementById("player2");
let Dice = [{ img:"images/dice1.png"},
{ img:"images/dice2.png"},
{ img:"images/dice3.png" },
{ img:"images/dice4.png" },
{ img:"images/dice5.png" },
{ img:"images/dice6.png" }];

var player1name = prompt("Enter Player 1 name"); 
var player2name = prompt("Enter Player 2 name"); 
player1nm.getElementsByTagName("h3")[0].innerText = player1name;
player2nm.getElementsByTagName("h3")[0].innerText = player2name;
var totalGames = 0;
var player1win =0;
var player2win =0;
masterRoll.addEventListener('click', () => {
    totalGames++;
    var x = Math.random() * 6;
    x = Math.floor(x);
    x++;
    var y = Math.random() * 6;
    y = Math.floor(y);
    y++;
    console.log(x);
    console.log(y);
    document.getElementsByClassName("totalRolls")[0].innerText = "Total Games: "+ totalGames;
    player1.src = Dice[x-1].img;
    player2.src = Dice[y-1].img;
    result.style.visibility = "visible";
    document.getElementsByClassName("overallWinner")[0].style.visibility = "visible";
    if(x>y)
    {
        result.innerText = "⛳ Result: "+player1name+" has won the game 🥳";
        player1win++;
    }
    else if(y>x)
    {
        result.innerText = "⛳ Result: " +player2name+ " has won the game 🥳";
        player2win++;
    }
    else 
    {
        result.innerText = "⛳ Result: Oops! Game Tied";
    }
    if(player1win>player2win)
    {
        document.getElementsByClassName("overallWinner")[0].innerText = player1name+" is winning";
    }
    else if(player2win>player1win)
    {
        document.getElementsByClassName("overallWinner")[0].innerText = player2name+" is winning";
    }
    else
    {
        document.getElementsByClassName("overallWinner")[0].innerText = "Score Tie";
    }
    document.getElementById("score1").innerText = "Score: "+ player1win;
    document.getElementById("score2").innerText = "Score: "+ player2win;

})