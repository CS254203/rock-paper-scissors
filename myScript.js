function getComputerChoice(){
    let options=["rock","paper","scissors"];
    let randomValue = Math.floor(Math.random() * (3 - 0) + 0);
    return options[randomValue];
}

function playRound(playerSelection,computerSelection){
    console.log(computerSelection)
    switch(true){
        case computerSelection === "rock" && playerSelection === "rock":
            console.log("tie");
            return "tie";
            break;

        case computerSelection === "rock" && playerSelection === "paper":
            console.log("win");
            return "win";
            break;

        case computerSelection === "rock" && playerSelection === "scissors":
            console.log("lose");
            return "lose";
            break;

        case computerSelection === "paper" && playerSelection === "rock":
            console.log("lose");
            return "lose";
            break;

        case computerSelection === "paper" && playerSelection === "paper":
            console.log("tie");
            return "tie";
            break;

        case computerSelection === "paper" && playerSelection === "scissors":
            console.log("win");
            return "win";
            break;

        case computerSelection === "scissors" && playerSelection === "rock":
            console.log("win");
            return "win";
            break;

        case computerSelection === "scissors" && playerSelection === "paper":
            console.log("lose");
            return "lose";
            break;

        case computerSelection === "scissors" && playerSelection === "scissors":
            console.log("tie");
            return "tie";
            break;
    }
}
//let playerChoice = prompt("Rock,Paper,Scissors ?");

//console.log(playRound(playerChoice,getComputerChoice()));