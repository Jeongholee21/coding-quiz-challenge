var menu = document.querySelector(".menu");
var main = document.querySelector(".main");


var start = function () {
    // VIEW HIGHSCORE (START PAGE)
    var viewScoreEl = document.createElement("div");
    var viewScorePEl = document.createElement("p");
    viewScorePEl.textContent = "View Highscores";
    viewScorePEl.className = "view-score";

    menu.appendChild(viewScoreEl);
    viewScoreEl.appendChild(viewScorePEl);

    // TIMER (START PAGE)
    var timeEl = document.createElement("div");
    var timePEl = document.createElement("p");
    var timeSpanEl = document.createElement("span")

    timePEl.textContent = "Time: ";
    timeSpanEl.textContent = "0";

    timeSpanEl.className = "time";

    menu.appendChild(timeEl);
    timeEl.appendChild(timePEl);
    timePEl.appendChild(timeSpanEl);

    // INTRODUCE CODING CHALLENGE (START PAGE)
    var introContainer = document.createElement("div");
    var h1El = document.createElement("h1");
    var pEl = document.createElement("p");
    var buttonEl = document.createElement("button");

    h1El.textContent = "Coding Quiz Challenge";
    pEl.textContent = "Try to answer the following code-relrated questions within the time limit. Keep in mind that incorrect answers will penaltize your score time by 10 seconds"
    buttonEl.textContent = "Start Quiz"

    introContainer.className = "intro-main";
    h1El.className = "intro-title";
    pEl.className = "intro-info";
    buttonEl.className = "start-button";

    main.appendChild(introContainer);
    introContainer.appendChild(h1El);
    introContainer.appendChild(pEl);
    introContainer.appendChild(buttonEl);

    //BUTTON 
    buttonEl.addEventListener("click", function () {
        introContainer.remove();
        getQuestions();
        //startTimer();
    });
};

//QUIZ QUESTIONS
// Making Array and object all Questions
// Making Randomizer all Questions
var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts"
    },
    {
        question: "What does HTML stand for?",
        choices: ["1. Hypertext Machine Language", "2. Hypertext Tools Markup Links", "3. Hypertext Markup Language", "4. High-Tech Markup Lists"],
        answer: "3. Hypertext Markup Language"
    },
    {
        question: "What does DOM stand for?",
        choices: ["1. Document Object Model", "2. Display Object Management", "3. Digital Ordinance Model", "4. Desktop Oriented Mode"],
        answer: "1. Document Object Model"
    },
    {
        question: "How do you create a function in JavaScript?",
        choices: ["1. function = myFunction()", "2. function:myFunction()", "3. function myFunction()", "4. $Function()"],
        answer: "1. function myFunction()"
    }
]

// A Question on the screen
var getQuestions = function() {
    var questionContainer = document.createElement("div");
    var questionItem = document.createElement("ol");
    var questionChoicesEl = document.createElement("li");

    for (var i = 0; i < quizQuestions.length; i++) {
        questionItem.textContent = "quizQuestions[i].question";
        questionChoicesEl.textContent = quizQuestions[i].choices;
    
        questionContainer.appendChild(questionItem);
        questionItem.appendChild(questionChoicesEl);
    
        console.log(questionItem.textContent);
        console.log(questionChoicesEl.textContent);
    }
};

start()