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

$(".stat-btn").click(function (){
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

