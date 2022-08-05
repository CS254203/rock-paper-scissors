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
    playRound(rockValue,getComputerChoice());
}

function getPaperButtonValue(){    
    const paperValue = document.querySelector("#paper-button").value;
    playRound(paperValue,getComputerChoice());
}

function getScissorsButtonValue(){    
    const scissorsValue = document.querySelector("#scissor-button").value;
    playRound(scissorsValue,getComputerChoice());
}
