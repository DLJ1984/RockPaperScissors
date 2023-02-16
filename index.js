function playerPrompt() {
    let selection = false;

    while (selection == false) {
    
        let input = prompt("rock, paper or scissors?");
        let choice = input.toLowerCase();

        if (choice == "rock" || choice =="paper" || choice == "scissors") {
        
            selection = true;
            let playerSelection = choice;
            return playerSelection;
        
        } else {
        
            window.alert("Please type in a selection of either Rock, Paper or Scissors");

        }

    }

} 

function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * choices.length);
    return choice;
}

function rockPaperScissors(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        
        let result = "Draw!";
        return result;

    } else if (playerSelection == "rock" && computerSelection == "paper") {
        
        let result = "You Lose! paper beats rock!";
        return result;

    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        
        let result = "You Lose! rock beats scissors!";
        return result;

    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        
        let result = "You Lose! scissors beats paper!";
        return result;
        
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        
        let result = "You Win! paper beats rock!";
        return result;

    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        
        let result = "You Win! rock beats scissors!";
        return result;

    } else {
        
        let result = "You Win! scissors beats paper!";
        return result;
    }

}


