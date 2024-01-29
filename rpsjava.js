function getComputerChoice(){
    let x = Math.floor(Math.random()*3);
    if (x===1){
        return ("rock");
    }else if(x===2){
        return ("paper");
    }else{
        return ("scissor");
    }
};
function rpsRound(playerSelection, computerSelection){
    
    
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

};

let playerScore = 0;
let computerScore = 0;
let result = '';
let i = 0;
const buttons = document.querySelectorAll('button');
let computerSelection = getComputerChoice();
const div = document.createElement('div');
div.classList.add('winner');
buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        computerSelection = getComputerChoice();
        result = rpsRound(button.id,computerSelection);
        if (result === "I don't get it, try again" || result === "It's a Tie!" ){
            i -= 1;
            div.textContent = result;
        }else if(result ===("You Win! Rock beats Scissor") || result === ("You Win! Paper beats Rock") || result === ("You Win! Scissor beats Paper")){
            playerScore += 1;
            div.textContent = result;
            if (playerScore == 5){
                div.textContent = `Congrats!!! You've won`;
                for (button of buttons){
                    button.disabled = true;
                }
            };
        }else if(result === ("You Lose! Paper beats Rock") || result === ("You Lose! Scissor beats Paper") || result === ("You Lose! Rock beats Scissor")){
            computerScore += 1;
            div.textContent = result;
            if (computerScore == 5) {
                div.textContent = `You've Lost :(`;
                for (button of buttons){
                    button.disabled = true;
                }
            };
            
        };
        document.body.appendChild(div);
    
        console.log(playerScore);
        console.log(computerScore);
        i++;
    });
}) ;