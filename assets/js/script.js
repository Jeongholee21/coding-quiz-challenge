var menu = document.querySelector(".menu");
var main = document.querySelector(".main");
var quiz = document.querySelector(".quiz");

var start = function () {
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
        timeCount();
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

// Timer
var timeCount = function () {
quizCounter = 0;
totalTime = 75;
timeLeft.textContent = totalTime;

    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if (totalTime <= 0) {
            clearInterval(startTimer);
            if (quizCounter < quizQuestions.length - 1) {
                //gmaeOver();
            }
        }
    },1000);

    getQuestions();
};

// A Question on the screen
var getQuestions = function() {
    var questionContainer = document.createElement("div");
    var questionPEl = document.createElement("p");
    var buttonContainer = document.createElement("div");
    var button0 = document.createElement("button");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    
        questionPEl.textContent = quizQuestions[quizCounter].question;
        button0.textContent = quizQuestions[quizCounter].choices[0];
        button1.textContent = quizQuestions[quizCounter].choices[1];
        button2.textContent = quizQuestions[quizCounter].choices[2];
        button3.textContent = quizQuestions[quizCounter].choices[3];

        questionContainer.className = "question";
        buttonContainer.className = "btns";
        button0.className = "btn btn0";
        button1.className = "btn btn1";
        button2.className = "btn btn2";
        button3.className = "btn btn3";


        quiz.appendChild(questionContainer);
        quiz.appendChild(buttonContainer);
        questionContainer.appendChild(questionPEl);
        questionContainer.appendChild(buttonContainer);
        buttonContainer.appendChild(button0);
        buttonContainer.appendChild(button1);
        buttonContainer.appendChild(button2);
        buttonContainer.appendChild(button3);
        
};



start()