let score = 0;
let updateCPS = 0;

let clickingPower = 1;
let steveCost = 15;
let steveTotal = 0;
let shovelCost = 100;
let shovelTotal = 0;
let ironshovelCost = 1000;
let ironshovelTotal = 0;

function cheeseClicked(value) {
    score += value;// score = score + value, += adds sides together
    document.getElementById("score").innerHTML = score;
}

function updateTheCPS() {
    updateCPS = steveTotal + shovelTotal * 5 + ironshovelTotal * 70;
    document.getElementById("updateCPS").innerHTML = updateCPS;
}

function buySteve() {
    if (score >= steveCost) {
        score -= steveCost;
        steveTotal++;
        steveCost = Math.round(steveCost * 1.15);
        document.getElementById("score").innerHTML = score;
        document.getElementById("steveCost").innerHTML = steveCost;
        document.getElementById("steveTotal").innerHTML = steveTotal;
        updateTheCPS();
    }
}

function buyShovel() {
    if (score >= shovelCost) {
        score -= shovelCost;
        shovelTotal++;
        shovelCost = Math.round(shovelCost * 1.15);
        document.getElementById("score").innerHTML = score;
        document.getElementById("shovelCost").innerHTML = shovelCost;
        document.getElementById("shovelTotal").innerHTML = shovelTotal;
        updateTheCPS();
    }
}

function buyIronshovel() {
    if (score >= ironshovelCost) {
        score -= ironshovelCost;
        ironshovelTotal++;
        ironshovelCost = Math.round(ironshovelCost * 1.15);
        document.getElementById("score").innerHTML = score;
        document.getElementById("ironshovelCost").innerHTML = ironshovelCost;
        document.getElementById("ironshovelTotal").innerHTML = ironshovelTotal;
        updateTheCPS();
    }
}

function loadGame() {
    let savedGame = JSON.parse(localStorage.getItem("gameSave"));
    if (typeof savedGame.score !== "undefined") score = savedGame.score;
    if (typeof savedGame.steveCost !== "undefined") steveCost = savedGame.steveCost;
    if (typeof savedGame.steveTotal !== "undefined") steveTotal = savedGame.steveTotal;
    if (typeof savedGame.shovelCost !== "undefined") shovelCost = savedGame.shovelCost;
    if (typeof savedGame.shovelTotal !== "undefined") shovelTotal = savedGame.shovelTotal;
    if (typeof savedGame.ironshovelCost !== "undefined") ironshovelCost = savedGame.ironshovelCost;
    if (typeof savedGame.ironshovelTotal !== "undefined") ironshovelTotal = savedGame.ironshovelTotal;
    document.getElementById("steveCost").innerHTML = steveCost;
    document.getElementById("steveTotal").innerHTML = steveTotal;
    document.getElementById("score").innerHTML = score;
    document.getElementById("shovelCost").innerHTML = ironshovelCost;
    document.getElementById("shovelTotal").innerHTML = ironshovelTotal;
    document.getElementById("ironshovelCost").innerHTML = ironshovelCost;
    document.getElementById("ironshovelTotal").innerHTML = ironshovelTotal;
    updateTheCPS();
}

function saveGame() {
    let gameSave = { // Filing cabinet gameSave
        score: score, // folder named score, score inside
        clickingPower: clickingPower,
        steveCost: steveCost,
        steveTotal: steveTotal,
        shovelCost: shovelCost,
        shovelTotal: shovelTotal,
        ironshovelCost: ironshovelCost, 
        ironshovelTotal: ironshovelTotal
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

window.onload = function() {
    loadGame();
}


setInterval(function() {
    score += steveTotal;
    score += shovelTotal * 5;
    score += ironshovelTotal * 70;
    document.getElementById("score").innerHTML = score;
    
    document.title = "(" + score + ") Grass Block Miner";
}, 1000); // 1000 ms = 1 second

setInterval(function() {
    saveGame();
}, 30000);

//document.getElementById("score").innerHTML = score;
//Going into 'document' (body, probbaly whatever the script link is in) and getting 'getElementById' from it, which equals whats inside (). Than sets innerHTML (everything inside of span) to score.


// Note to future self. This code wasnt working, 'click' fuction worked when done manually 'click()' but wasnt done by "onclick="click()" because its a RESERVED WORD...fucntion isn't working? CHeck if its a RESERVED WORD!!!