function getComputerChoice(){
    let options=["rock","paper","scissors"];
    let randomValue = Math.floor(Math.random() * (3 - 0) + 0);
    return options[randomValue];
}

