let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
    // rock, paper, scissors
};

const drawGame = () => {
    msg.innerText = "Game Draw, play again.";
    msg.style.backgroundColor = "steelblue";
};

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorePara.innerHTML = userScore;

        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerHTML = compScore;

        msg.innerText = "You lost.";
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    // Generate computer choice
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        //Draw
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissor, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //scissor, rock
            userWin = compChoice === "scissor" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});



