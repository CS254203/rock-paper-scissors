function getComputerChoice(){
    let options=["rock","paper","scissors"];
    let randomValue = Math.floor(Math.random() * (3 - 0) + 0);
    return options[randomValue];
}

function playRound(playerSelection,computerSelection){
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

function getButtonValue(){
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    console.log("GETBUTTONVALUE = " + button.value);
    return button.value;
  });
});
}

