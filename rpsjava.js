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
            return ("You Win! Rock beats Scissor");
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
            return ("You Win! Paper beats Rock");          
        }
    }
    if (playerSelection === "scissor"){
        if(computerSelection === "paper"){
            return ("You Win! Scissor beats Paper");  
        }else if(computerSelection === "scissor"){
            return ("It's a Tie!");
        }else{
            return ("You Lose! Rock beats Scissor");
        }
    }

}





function game(){
    let playerScore = 0;
    let computerScore = 0;
    

    for (let i=1;i<=5;i++){

    let computerSelection = getComputerChoice();

    let playerSelection = prompt("Enter something").toLowerCase();
    let result = rpsRound(playerSelection, computerSelection);
    console.log(result);

    if (result === "I don't get it, try again" || result === "It's a Tie!" ){
        i -= 1;
    }else if(result ===("You Win! Rock beats Scissor") || result ===("You Win! Paper beats Rock") || result ===("You Win! Scissor beats Paper")){
        playerScore += 1;
        if (playerScore == 3) break;
    }else {
        computerScore += 1;
        if (computerScore == 3) break;
    }

    console.log(playerScore);
    console.log(computerScore);

    }

    console.log(playerScore);
    console.log(computerScore);
    
    if (playerScore>computerScore){
        console.log(`Congrats!!! You've won`);
    }else{
        console.log(`You've Lost :(`);
    }

}

game();

