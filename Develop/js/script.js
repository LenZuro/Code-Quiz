var quizData = [
{
    question: "When was Javascript Created?",
    a:"1985",
    b:"2001",
    c:"2005",
    d:"1995",
    correct: "d",
}, 
{
    question: "What is not a Datatype?",
    a:"Boolen",
    b:"String",
    c:"Integer",
    d:"Alert",
    correct:"d",
}, 
{
    question: "What goes at the end of a JS line?",
    a:":",
    b:"Nothing",
    c:";",
    d:"Ur mum",
    correct:"c",
},
 {
    question: "What is the purpouse of JS?",
    a:"To be the logic",
    b:"To make things work",
    c:"To make things look pretty",
    d:"to be silly and never work",
    correct:"a",
},
 {
    question: "what grade will I get on this ?",
    a:"95/100",
    b:"100/100",
    c:"50/100",
    d:"0/100",
    correct:"b"
},
];

var scorePoints = 0;

function loadQuestion(jimmy , questionNum) {
    $('.quiz-header').text("question" + questionNum);
    $('.question').text(jimmy.question);
    $("#label-a").text(jimmy.a);
    $("#label-b").text(jimmy.b);
    $("#label-c").text(jimmy.c);
    $("#label-d").text(jimmy.d);
}

function showPage(className) {
    $(".page").hide();
    $(className).show();
}

var questionNum = 0;

showPage(".one");

$(".start-btn").click(function (){
    showPage(".two");
    setTime();
    questionNum = 0;
    loadQuestion(quizData[questionNum], questionNum+1);
});

$('.submit-btn').click(function () {
    var selected = $("input[type='radio']:checked").val();
    console.log(selected);
    if (selected !== quizData[questionNum].correct){
        timeLeft -= 10;
    }else{
        scorePoints += 10;
        $('.points').text("Points: " + scorePoints);
    }
    if (questionNum === 4) {
        endgame();
        return;
    }
    questionNum++;
    loadQuestion(quizData[questionNum], questionNum +1);
});

var timeLeft = 90;
var timerInterval = null;

function endgame() {
    showPage(".three");
    clearInterval(timerInterval);
    timeLeft = 90;
    $("#points").text(scorePoints);
}

var timeEl = document.querySelector(".time");

function setTime() {
    timerInterval = setInterval(function () {
        timeLeft--;
        console.log("Time Left");
        timeEl.textContent = timeLeft + "Time Left";
        if (timeLeft <= 0) {
            endgame();
        }
    }, 1000);
}

var initals = "";

$(".score-btn").click(function () {
    var initals = $("input[type = 'text']").val();
    console.log(typeof localStorage.getItem("points"), "type");

    $(".points").text("Points: " + 0);
        if (localStorage.getItem("points") == null || scorePoints > localStorage.getItem("points")) {
            console.log( "If Block");
            localStorage.setItem("initals" , initals);
            localStorage.setItem("points" , scorePoints);
        }
});

$(".score-btn").click(function () {
    showPage(".four");
    $(".winner").text(localStorage.getItem("initals") + "" + localStorage.getItem("points"));
});

$(".redo-btn").click(function () {
    showPage(".one");
    $(".quiz-header").text("Coding Quiz");
    scorePoints = 0;
    $("input[type = 'text']").val("");
});