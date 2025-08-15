
let userScore = 0;
let opponentScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#Opponent_score");
const resetBtn = document.querySelector("#resetBtn");
const userPickImg = document.querySelector("#userPickImg");
const compPickImg = document.querySelector("#compPickImg");



const generateComputerChoice = () => {
    const options = ["Rock","Paper","Scissor"];
    const randInx = Math.floor(Math.random() * 3);
    return options [randInx];

}

const drawGame = () => {
    msg.innerText = "Same choice !Draw!" ;
}

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore ;
        msg.innerText = "You Won !" ;
    }else {
        opponentScore++;
        compScorePara.innerText = opponentScore ;
        msg.innerText = "You lose !" ;
    }
}

const getImagePath = (choice) => {
    if (choice === "Rock") return "Pics/Screenshot 2025-07-05 121758.png";
    if (choice === "Paper") return "Pics/Screenshot 2025-07-05 121817.png";
    if (choice === "Scissor") return "Pics/Screenshot 2025-07-05 121828.png";
};


const playGame = (userChoice) => {
     const compChoice = generateComputerChoice();

     userPickImg.src = getImagePath(userChoice);
     compPickImg.src = getImagePath(compChoice);


     if(userChoice === compChoice){
        drawGame();
     }else {
        let userWin = true;
        if(userChoice === "Rock"){
            userWin = compChoice === "Paper" ? false : true ;
        }else if(userChoice === "Paper"){
            userWin = compChoice === "Scissor" ? false : true ; 
        } else {
            userWin = compChoice === "Rock" ? false : true ;
        }
        showWinner(userWin , userChoice , compChoice);
     }
}

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id")   

        playGame(userChoice);
    });
});


resetBtn.addEventListener("click", () => {
    userScore = 0;
    opponentScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = opponentScore;
    msg.innerText = "_Play Your Move_";
    
    userPickImg.src = "Pics/start-button.png";
    compPickImg.src = "Pics/start-button.png";
});