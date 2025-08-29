let users = 0;
let comps = 0;
let mess = document.querySelector("#mess");
const choices = document.querySelectorAll(".choice");
let user = document.querySelector("#user-s");
let comp = document.querySelector("#comp-s");
let re = document.querySelector("#re");
let round = parseInt(prompt("enter the number of rounds."));
let currround = 0;

const compchoice = () => {
    const option = ["rock", "scizzors", "paper"];
    const rand = Math.floor(Math.random() * 3);
    return option[rand];
};


const draw = () => {
    mess.innerText = "It was a DRAW";
    mess.style.backgroundColor = "blue";
}

const showWinner = (userwin) => {
    if (userwin === true) {
    mess.innerText = "YOU WON";
    users++;
    user.innerText = users;
    mess.style.backgroundColor = "green";
    }
    else {
    mess.innerText = "COMPUTER WON";
    comps++;
    comp.innerText = comps;
    mess.style.backgroundColor = "red";  
    }
}

const finalresult = () => {
    if (users == comps) {
        mess.innerText = "Final Result: It was a DRAW";
        mess.style.backgroundColor = "blue";
    }
    else if(users > comps) {
        mess.innerText = "Final Result: YOU WON";
        mess.style.backgroundColor = "green";
    }
    else {
        mess.innerText = "Final Result: COMPUTER WON";
        mess.style.backgroundColor = "red"; 
    }
}

const playgame = (userchoice) => {
    if(currround >= round){
        mess.innerText = "Round over";
        mess.style.backgroundColor = "black";
        return; 
    }
    const compcho = compchoice();
    if (userchoice === compcho) {
        draw();
    }
    else {
        let userwin = true;
        if (userchoice === "rock"){
            userwin = compcho === "scizzors" ? true : false ;
        }
        else if(userchoice === "paper"){
            userwin = compcho === "scizzors" ? false : true ;
        }
        else {
            userwin = compcho === "rock" ? false : true ;
        }
        showWinner(userwin);
    }
    currround++;
    if(currround == round){
        finalresult();
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

re.addEventListener("click",() => {
    users = 0;
    comps = 0;
    currround = 0;
    user.innerText = users;
    comp.innerText = comps;
    round = parseInt(prompt("enter the number of rounds."));
    if (isNaN(round) || round <= 0) {
        round = 3;
        alert("Invalid input, defaulting to 3 rounds.");
    }
    mess.innerText = "Play your move.";  
    mess.style.backgroundColor = "#081b31";
});

