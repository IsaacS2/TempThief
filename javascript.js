function myFunction() {
    console.log("Nice");
}

console.log(window);

x = Math.floor(Math.random() * 100);
y = Math.floor(Math.random() * 100);
z = Math.floor(Math.random() * 100);
rBomb = Math.floor(Math.random() * 100);

/*
x = 1;
y = 98;
z = 1;
rBomb = 40;
*/

xtext = x.toString();
ytext = y.toString();
ztext = z.toString();

function startGame() {
    window.location.href = "game.html";
    //window.location.href = "index.html";
}

function changeText() {
    x = document.getElementById("click on me!").innerHTML;
    console.log(x);
    newValue = "changed text";
    document.getElementById("click on me!").innerHTML = newValue;
}

function timer() {
    
   setTimeout(function(){
        timer();
        changeText();
    }, parseInt(sessionStorage.getItem("rateOfTimer")));
}

function changeText(){
    value = parseInt(sessionStorage.getItem("counter"));

    if (value == 0) {
        window.location.href = "gameOver.html";
        sessionStorage.setItem("counter", -1);
    }
    else if (value > 0){
        newValue = "Time until feds show: " + (value - 1);
        // Display
        document.getElementById("timerVal").innerHTML = newValue;
        sessionStorage.setItem("counter", value - 1);
    }
}

function thisShouldShowUpInTheWindow() {
    console.log("Yup")
}

function clearOptions() {
    document.getElementById("firstChoice").innerHTML = "";
    document.getElementById("secondChoice").innerHTML = "";
    document.getElementById("thirdChoice").innerHTML = "";
    document.getElementById("fourthChoice").innerHTML = "";
    document.getElementById("fifthChoice").innerHTML = "";
    document.getElementById("firstChoice").removeAttribute("onClick");
    document.getElementById("secondChoice").removeAttribute("onClick");
    document.getElementById("thirdChoice").removeAttribute("onClick");
    document.getElementById("fourthChoice").removeAttribute("onClick");
    document.getElementById("fifthChoice").removeAttribute("onClick");
}

function returnOptions() {
    clearOptions();
    if (sessionStorage.getItem("rateOfTimer") == "1000") {
        document.getElementById("firstChoice").innerHTML = "[Tell Grunt to blow up door]";
        document.getElementById("firstChoice").setAttribute("onClick", "gruntDoor();");
    } else if (sessionStorage.getItem("rateOfTimer") == "500") {
        document.getElementById("firstChoice").innerHTML = "[Insult Grunt]";
        document.getElementById("firstChoice").setAttribute("onClick", "insult();");
    }
    document.getElementById("secondChoice").innerHTML = "[Look around]";
    document.getElementById("thirdChoice").innerHTML = "[Talk]";
    document.getElementById("fourthChoice").innerHTML = "";
    document.getElementById("fifthChoice").innerHTML = "";
    document.getElementById("secondChoice").setAttribute("onClick", "lookAround();");
    document.getElementById("thirdChoice").setAttribute("onClick", "talk();");
}

/*
function passBomb() {
    clearOptions();
    document.getElementById("firstChoice").innerHTML = "You sure about this, Boss?";
    document.getElementById("secondChoice").innerHTML = "Yes";
    document.getElementById("secondChoice").setAttribute("onClick", "changeTimer();");
    document.getElementById("thirdChoice").innerHTML = "No";
    document.getElementById("thirdChoice").setAttribute("onClick", "returnOptions();");
}
*/

function changeTimer() {
    sessionStorage.setItem("rateOfTimer", "300");
    vaultOpen();
}

function lookAround() {
    clearOptions();
    document.getElementById("firstChoice").innerHTML = "You see a vase, a painting, a potted plant, and a desk";
    document.getElementById("secondChoice").innerHTML = "[OK]";
    document.getElementById("secondChoice").setAttribute("onClick", "lookAroundOptions();");
}

function lookAroundOptions() {
    clearOptions();
    document.getElementById("firstChoice").innerHTML = "[\"Nevermind\"]";
    document.getElementById("firstChoice").setAttribute("onClick", "returnOptions();");
    document.getElementById("secondChoice").innerHTML = "[\"Check the vase, Grunt\"]";
    document.getElementById("secondChoice").setAttribute("onClick", "checkVase();");
    document.getElementById("thirdChoice").innerHTML = "[\"Check the painting, Grunt\"]";
    document.getElementById("thirdChoice").setAttribute("onClick", "checkPainting();");
    document.getElementById("fourthChoice").innerHTML = "[\"Check the desk, Grunt\"]";
    document.getElementById("fourthChoice").setAttribute("onClick", "checkDesk();");
    document.getElementById("fourthChoice").innerHTML = "[\"Check the desk, Grunt\"]";
    document.getElementById("fourthChoice").setAttribute("onClick", "checkDesk();");
    document.getElementById("fifthChoice").innerHTML = "[\"Check the plant, Grunt\"]";
    document.getElementById("fifthChoice").setAttribute("onClick", "checkPlant();");
}

function checkVase() {
    clearOptions();
    if (y > 50) {
        document.getElementById("firstChoice").innerHTML = "Boss, I see a number under the vase that says " + ytext;
        document.getElementById("secondChoice").innerHTML = "[\"Nice\"]";
    } else if (y <= 50) {
        document.getElementById("firstChoice").innerHTML = "There's nothing here, Boss...";
        document.getElementById("secondChoice").innerHTML = "[\"Drats; nevermind about looking around...\"]";
    }
    document.getElementById("secondChoice").setAttribute("onClick", "returnOptions();");
    document.getElementById("thirdChoice").innerHTML = "[Keep telling Grunt to look at stuff]";
    document.getElementById("thirdChoice").setAttribute("onClick", "lookAroundOptions();");
}

function checkPainting() {
    clearOptions();
    document.getElementById("firstChoice").innerHTML = "Yo Boss, there's a crinkle on this painting";
    document.getElementById("secondChoice").innerHTML = "[\"It's probably nothing\"]";
    document.getElementById("secondChoice").setAttribute("onClick", "returnOptions();");
    document.getElementById("thirdChoice").innerHTML = "[\"Check that crinkle, Grunt!\"]";
    document.getElementById("thirdChoice").setAttribute("onClick", "checkCrinkle();");
}

function checkCrinkle() {
    clearOptions();
    if (y <= 50) {
        document.getElementById("firstChoice").innerHTML = "Hey, I found some numbers, Boss: " + ytext;
        document.getElementById("secondChoice").innerHTML = "[\"Competent work, Grunt\"]";
    } else if (y > 50) {
        document.getElementById("firstChoice").innerHTML = "'Nothing here but a roach...'";
        document.getElementById("secondChoice").innerHTML = "[\"Dang; forget it...\"]";
        document.getElementById("fourthChoice").innerHTML = "[Interrogate Roach]";
        document.getElementById("fourthChoice").setAttribute("onClick", "interrogateRoach();");
    }
    document.getElementById("secondChoice").setAttribute("onClick", "returnOptions();");
    document.getElementById("thirdChoice").innerHTML = "[Keep telling Grunt to look at stuff]";
    document.getElementById("thirdChoice").setAttribute("onClick", "lookAroundOptions();");
}

function interrogateRoach() {
    clearOptions();
    if (y > 97 && x < 2 && z < 2) {
        document.getElementById("firstChoice").innerHTML = "Don't hurt me, man! Here's the code: " + xtext + " " + ytext + " " +  ztext;
        document.getElementById("secondChoice").innerHTML = "[\"Knew it; back to the safe, then.\"]";
    } else {
        document.getElementById("firstChoice").innerHTML = "'Boss, it's just a roach.";
        document.getElementById("secondChoice").innerHTML = "[\"Fine, forgot about looking around.\"]";
    }
    document.getElementById("secondChoice").setAttribute("onClick", "returnOptions();");
    document.getElementById("thirdChoice").innerHTML = "[Keep telling Grunt to look at stuff]";
    document.getElementById("thirdChoice").setAttribute("onClick", "lookAroundOptions();");
}

function checkDesk() {
    clearOptions();
    document.getElementById("firstChoice").innerHTML = "'There's lots of drawers here, Boss.'";
    document.getElementById("secondChoice").innerHTML = "[\"Alright\"]";
    document.getElementById("secondChoice").setAttribute("onClick", "continueCheckDesk();");
}

function continueCheckDesk() {
    clearOptions();
    document.getElementById("firstChoice").innerHTML = "'Which do I check?'";
    document.getElementById("secondChoice").innerHTML = "[\"Top drawer\"]";
    document.getElementById("secondChoice").setAttribute("onClick", "topDrawer();");
    document.getElementById("thirdChoice").innerHTML = "[\"Bottom drawer\"]";
    document.getElementById("thirdChoice").setAttribute("onClick", "bottomDrawer();");
    document.getElementById("fourthChoice").innerHTML = "[\"Your nose\"]";
    document.getElementById("fourthChoice").setAttribute("onClick", "noseDrawer();");
    document.getElementById("fifthChoice").innerHTML = "[\"Actually, forget looking around.\"]";
    document.getElementById("fifthChoice").setAttribute("onClick", "returnOptions();");
}

function topDrawer() {
    clearOptions();
    if (z > 50) {
        document.getElementById("firstChoice").innerHTML = "'Here's a number!' " + ztext;
        document.getElementById("secondChoice").innerHTML = "[\"Nice\"]";
    } else {
        document.getElementById("firstChoice").innerHTML = "'Nope, not here'";
        document.getElementById("secondChoice").innerHTML = "[\"Drats; forget it!\"]";
        document.getElementById("thirdChoice").innerHTML = "[\"Drats; check another drawer!\"]";
        document.getElementById("thirdChoice").setAttribute("onClick", "continueCheckDesk();");
    }
    document.getElementById("secondChoice").setAttribute("onClick", "returnOptions();");
}

function bottomDrawer() {
    clearOptions();
    if (z <= 50 && z > 2) {
        document.getElementById("firstChoice").innerHTML = "'Here's one!' " + ztext;
        document.getElementById("secondChoice").innerHTML = "[\"Nice\"]";
    } else {
        document.getElementById("firstChoice").innerHTML = "'Nope, not here'";
        document.getElementById("secondChoice").innerHTML = "[\"Drats; forget it!\"]";
        document.getElementById("thirdChoice").innerHTML = "[\"Drats; check another drawer!\"]";
        document.getElementById("thirdChoice").setAttribute("onClick", "continueCheckDesk();");
    }
    document.getElementById("secondChoice").setAttribute("onClick", "returnOptions();");
}

function noseDrawer() {
    clearOptions();
    if (z < 2) {
        document.getElementById("firstChoice").innerHTML = "'Very fun--hey, how'd that get in there?!' " + ztext;
        document.getElementById("secondChoice").innerHTML = "[HA!]";
    } else {
        document.getElementById("firstChoice").innerHTML = "Very funny, Boss...";
        document.getElementById("secondChoice").innerHTML = "[\"Ha. Ok, forget the drawers\"]";
        document.getElementById("thirdChoice").innerHTML = "[\"Ha. Ok, check a drawer\"]";
        document.getElementById("thirdChoice").setAttribute("onClick", "continueCheckDesk();");
    }
    document.getElementById("secondChoice").setAttribute("onClick", "returnOptions();");
}

function checkPlant() {
    clearOptions();
    document.getElementById("firstChoice").innerHTML = "'Boss, I see a paper with some math.'";
    document.getElementById("secondChoice").innerHTML = "[\"What's it say, Grunt?\"]";
    document.getElementById("secondChoice").setAttribute("onClick", "plantFormula();");
    document.getElementById("thirdChoice").innerHTML = "[\"Eww, math's gross; forget the plant.\"]";
    document.getElementById("thirdChoice").setAttribute("onClick", "returnOptions();");
}

function plantFormula() {
    clearOptions();
    if (x > 75) {
        document.getElementById("firstChoice").innerHTML = "'It says \"One code # = " + (x + 32) + " - 20 + 5 - 17\"'";
    } else if (x > 50) {
        document.getElementById("firstChoice").innerHTML = "'It says \"One code # = " + (x - 123) + " + 130 - 1 - 6\"'";
    } else if (x > 25) {
        document.getElementById("firstChoice").innerHTML = "'It says \"One code # = (" + x + " x 4 - 5 + 6 - 1) / 4\"'";
    } else if (x <= 25) {
        document.getElementById("firstChoice").innerHTML = "'It says \"One code # = 0 + 40000 / 10000 + 70 - (35 x 2) - 4 + " + x + "\"'";
    }
    document.getElementById("secondChoice").innerHTML = "[\"Interesting...back to the safe.\"]";
    document.getElementById("secondChoice").setAttribute("onClick", "returnOptions();");
    document.getElementById("thirdChoice").innerHTML = "[\"Keep telling Grunt to look at stuff.\"]";
    document.getElementById("thirdChoice").setAttribute("onClick", "returnOptions();");
}

function gruntDoor() {
    clearOptions();
    if (rBomb > 4) {
        document.getElementById("firstChoice").innerHTML = "BOOOOMMM!!!";
        document.getElementById("secondChoice").innerHTML = "[\"I meant the vault door, dummy! They're running here now!\"]";
        sessionStorage.setItem("rateOfTimer", "500");
        document.getElementById("secondChoice").setAttribute("onClick", "returnOptions();");
    }
    else if (rBomb <= 4) {
        vaultOpen();
    }
}

function insult() {
    clearOptions();
    document.getElementById("firstChoice").innerHTML = "\"You idiot!\"";
    document.getElementById("secondChoice").innerHTML = "['Sorry, Boss']";
    document.getElementById("secondChoice").setAttribute("onClick", "returnOptions();");
}

function talk() {
    clearOptions();
    document.getElementById("firstChoice").innerHTML = "[\"Nevermind\"]";
    document.getElementById("secondChoice").innerHTML = "[\"What was your best heist, Grunt?\"]";
    document.getElementById("thirdChoice").innerHTML = "[\"Did you even finish high school, Grunt?\"]";
    document.getElementById("fourthChoice").innerHTML = "[\"What're you buying with the money, Grunt?\"]";
    
    document.getElementById("firstChoice").setAttribute("onClick", "returnOptions();");
    document.getElementById("secondChoice").setAttribute("onClick", "heistQuestion();");
    document.getElementById("thirdChoice").setAttribute("onClick", "educationQuestion();");
    document.getElementById("fourthChoice").setAttribute("onClick", "moneyQuestion();");    
}

function moneyQuestion() {
    clearOptions();
    document.getElementById("firstChoice").innerHTML = "'Well, I thought I would use it to adopt a dog.'";
    document.getElementById("secondChoice").innerHTML = "[\"I guess that's a solid plan, Grunt.\" (back to heist)]";
    document.getElementById("thirdChoice").innerHTML = "[\"What would you name it?\"]";

    document.getElementById("secondChoice").setAttribute("onClick", "returnOptions();");
    document.getElementById("thirdChoice").setAttribute("onClick", "nameDog()");
}

function nameDog() {
    clearOptions();
    document.getElementById("firstChoice").innerHTML = "'...\"Boss\".'";
    document.getElementById("secondChoice").innerHTML = "[\"That's nice, Grunt.\"]";
    document.getElementById("thirdChoice").innerHTML = "[\"That's weird, Grunt\"]";

    document.getElementById("secondChoice").setAttribute("onClick", "returnOptions();");
    document.getElementById("thirdChoice").setAttribute("onClick", "returnOptions();");
}

function heistQuestion() {
    clearOptions();
    document.getElementById("firstChoice").innerHTML = "'I stole $5 from my Mom one time.'";
    document.getElementById("secondChoice").innerHTML = "[\"...Impressive(?)\"]";
    document.getElementById("secondChoice").setAttribute("onClick", "returnOptions();");
}

function educationQuestion() {
    clearOptions();
    document.getElementById("firstChoice").innerHTML = "'Yeah, I have a PhD, Boss.'";
    document.getElementById("secondChoice").innerHTML = "[\"...You're kidding.\"]";
    document.getElementById("secondChoice").setAttribute("onClick", "educationResponse();");
}

function educationResponse() {
    clearOptions();
    document.getElementById("firstChoice").innerHTML = "'Of course not, I take education very seriously...did you graduate high school, Boss?'";
    document.getElementById("secondChoice").innerHTML = "[\"...Let's get back to the heist.\"]";
    document.getElementById("secondChoice").setAttribute("onClick", "returnOptions();");
}

function vaultOpen() {
    clearOptions();
    if (parseInt(sessionStorage.getItem("counter")) >= 100) {
        window.location.href = "bestEnding.html";
    } else if (parseInt(sessionStorage.getItem("counter")) >= 80) {
        window.location.href = "awesomeEnding.html";
    } else if (parseInt(sessionStorage.getItem("counter")) >= 60) {
        window.location.href = "greatEnding.html";
    } else if (parseInt(sessionStorage.getItem("counter")) >= 40) {
        window.location.href = "goodEnding.html";
    } else if (parseInt(sessionStorage.getItem("counter")) >= 20) {
        window.location.href = "okEnding.html";
    } else {
        window.location.href = "sadEnding.html";
    }
}

