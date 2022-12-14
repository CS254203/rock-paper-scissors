function getComputerChoice(){
    let options=["rock","paper","scissors"];
    let randomValue = Math.floor(Math.random() * (3 - 0) + 0);
    return options[randomValue];
}

function playRound(playerSelection,computerSelection){
    console.log(computerSelection);
    switch(true){
        case computerSelection === "rock" && playerSelection === "rock":
            console.log("tie");
            return "tie";

        case computerSelection === "rock" && playerSelection === "paper":
            console.log("win");
            return "win";

        case computerSelection === "rock" && playerSelection === "scissors":
            console.log("lose");
            return "lose";

        case computerSelection === "paper" && playerSelection === "rock":
            console.log("lose");
            return "lose";

        case computerSelection === "paper" && playerSelection === "paper":
            console.log("tie");
            return "tie";

        case computerSelection === "paper" && playerSelection === "scissors":
            console.log("win");
            return "win";

        case computerSelection === "scissors" && playerSelection === "rock":
            console.log("win");
            return "win";

        case computerSelection === "scissors" && playerSelection === "paper":
            console.log("lose");
            return "lose";

        case computerSelection === "scissors" && playerSelection === "scissors":
            console.log("tie");
            return "tie";
    }
}

function getRockButtonValue(){    
    const rockValue = document.querySelector("#rock-button").value;
    changescore(playRound(rockValue,getComputerChoice()));
   
}

function getPaperButtonValue(){    
    const paperValue = document.querySelector("#paper-button").value;
    changescore( playRound(paperValue,getComputerChoice()));
}

function getScissorsButtonValue(){    
    const scissorsValue = document.querySelector("#scissor-button").value;
    changescore(playRound(scissorsValue,getComputerChoice()));
}


let playerScore = 0;
let computerScore = 0;

function changescore(playRound){
    if(playerScore >=4 ){
        document.getElementById("score").innerHTML = "YOU WIN !";
        return;
    }

    if(computerScore >=4){
        document.getElementById("score").innerHTML = "YOU LOSE !";
        return;
    }

    if(playRound==="win"){
        playerScore+=1
        document.getElementById("score").innerHTML = playerScore + " - " + computerScore;
    }

    else if(playRound==="lose"){
        computerScore+=1;
        document.getElementById("score").innerHTML = playerScore + " - " + computerScore;
    }

    else{
        document.getElementById("score").innerHTML = playerScore + " - " + computerScore;
    }
}