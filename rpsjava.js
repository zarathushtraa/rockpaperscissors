function getComputerChoice(){
    let x = Math.floor(Math.random()*3);
    if (x===1){
        return ("rock");
    }else if(x===2){
        return ("paper");
    }else{
        return ("scissor");
    }
}



function rpsRound(playerSelection,computerSelection){

    if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissor"){
        return ("I don't get it, try again");
    }

    if (playerSelection === "rock"){
        if(computerSelection === "paper"){
            return ("You Lose! Paper beats Rock");
        }else if(computerSelection === "scissor"){
            return ("You Win! Rock beats scissor");
        }else{
            return ("It's a Tie!");
        }
    }
    if (playerSelection === "paper"){
        if(computerSelection === "paper"){
            return ("It's a Tie!");
        }else if(computerSelection === "scissor"){
            return ("You Lose! Scissor beats Paper");        
        }else{
            return ("You Win! Paper beats rock");          
        }
    }
    if (playerSelection === "scissor"){
        if(computerSelection === "paper"){
            return ("You Win! Scissor beats Paper");  
        }else if(computerSelection === "scissor"){
            return ("It's a Tie!");
        }else{
            return ("You Lose! Rock beats scissor");
        }
    }

}


computerSelection = getComputerChoice();

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i=1;i<=5;i++){

    let playerSelection = prompt("Enter something").toLowerCase();
    console.log(rpsRound(playerSelection, computerSelection));

    

    }

}

game();