let progress = document.getElementById("progress");
let dis = document.querySelector(".dis");
let w = document.querySelector(".wR");
let questionCount = document.getElementById("question-count");

let score = 0;
let Next = 0;
let qstn = 1;

let q = document.getElementById("questn");

let o1 = document.getElementById("btn1");
let o2 = document.getElementById("btn2");
let o3 = document.getElementById("btn3");
let o4 = document.getElementById("btn4");

let questions = [
    {
        question: "What is the capital of India?",
        options: ["Delhi", "Mumbai", "Goa", "Bihar"],
        answer: "Delhi"
    },
    {
        question: "Which language runs in the browser?",
        options: ["Java", "Python", "JavaScript", "C++"],
        answer: "JavaScript"
    },
    {
        question: "2 + 2 = ?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Markup Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "Apple"],
        answer: "Netscape"
    }
];


function start() {

    score = 0;
    Next = 0;
    qstn = 1;

    q.innerHTML = `Q ${qstn}. ${questions[Next].question}`;

    o1.innerHTML = questions[Next].options[0];
    o2.innerHTML = questions[Next].options[1];
    o3.innerHTML = questions[Next].options[2];
    o4.innerHTML = questions[Next].options[3];

    w.innerHTML = "";
    dis.innerHTML = `Your score: ${score}/${questions.length}`;

    progress.style.width = "20%";

    questionCount.innerHTML = `Question ${qstn}/${questions.length}`;
}


function next() {

    Next++;

    if (Next < questions.length) {

        qstn++;

        q.innerHTML = `Q ${qstn}. ${questions[Next].question}`;

        o1.innerHTML = questions[Next].options[0];
        o2.innerHTML = questions[Next].options[1];
        o3.innerHTML = questions[Next].options[2];
        o4.innerHTML = questions[Next].options[3];

        progress.style.width =
            ((Next + 1) / questions.length) * 100 + "%";

        questionCount.innerHTML =
            `Question ${qstn}/${questions.length}`;

    } else {

        q.innerHTML = "Quiz Completed! 🎉";

        o1.innerHTML = "";
        o2.innerHTML = "";
        o3.innerHTML = "";
        o4.innerHTML = "";

        w.innerHTML = "Well done!";
        dis.innerHTML =
            `Final Score: ${score}/${questions.length}`;

        progress.style.width = "100%";

        questionCount.innerHTML = "Quiz Complete";
        o1.style.display = "none";
    o2.style.display = "none";
    o3.style.display = "none";
    o4.style.display = "none";
    }
}


function findAnswer(userAnswer) {

    if (Next >= questions.length) {
        return;
    }

    let buttons = [o1, o2, o3, o4];

    if (questions[Next].options[userAnswer] == questions[Next].answer) {

        score++;
        w.innerHTML = "Correct! ✓";
        buttons[userAnswer].style.backgroundColor = "#d1fae5";
        buttons[userAnswer].style.borderColor = "#16a34a";
        buttons[userAnswer].style.color = "#166534";

    } else {

        w.innerHTML = "Wrong! ✗";
        buttons[userAnswer].style.backgroundColor = "#fee2e2";
        buttons[userAnswer].style.borderColor = "#dc2626";
        buttons[userAnswer].style.color = "#991b1b";

        
    }

    dis.innerHTML =
        `Your score: ${score}/${questions.length}`;

    setTimeout(() => {
        buttons[userAnswer].style.backgroundColor = "";
        buttons[userAnswer].style.borderColor = "";
        buttons[userAnswer].style.color = "";

        next();
    }, 700);
}
start();