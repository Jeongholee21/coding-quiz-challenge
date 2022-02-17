var menu = document.querySelector(".menu");
var main = document.querySelector(".main");
var quiz = document.querySelector(".quiz");

var choice0 = document.querySelector(".btn0");
var choice1 = document.querySelector(".btn1");
var choice2 = document.querySelector(".btn2");
var choice3 = document.querySelector(".btn3");

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
// Making Randomizer all Questions : Extra
var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with __________.",
        choices: ["1. quotes", "2. curly brackets", "3. paranthesis", "4. square brackets"],
        answer: "3. paranthesis"
    },
    {
        question: "Arrays in Javascript can be used to store ____.",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "4. all of the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        answer: "3. quotes"
    },
    {
        question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["1. Javascript", "2. terminal / bash", "3. for loops", "4. console log"],
        answer: "4. console log"
    },
];

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
        
        var btn0 = document.getElementsByClassName("btn0")
        var btn1 = document.getElementsByClassName("btn1")
        var btn2 = document.getElementsByClassName("btn2")
        var btn3 = document.getElementsByClassName("btn3")
    
        
        checkAnswer();
};


var checkAnswer = function () {
    if (quizQuestions[quizCounter].answer === questions[quizCounter].choices[answer]) {
        correctAns++;
    } else {
        totalTime -= 10;
    }
    questionIndex++;
    if (quizCounter < quizQuestions.length) {
        getQuestions();
    }else {
        //game over();
    }
};
start()

// Event Listeners
