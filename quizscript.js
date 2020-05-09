



const questionNumberSpan=document.querySelector(".question-num-value");
const totalQuestionSpan=document.querySelector(".total-question");
const question=document.querySelector(".question");
const op1=document.querySelector(".option1");
const op2=document.querySelector(".option2");
const op3=document.querySelector(".option3");
const op4=document.querySelector(".option4");
const op5=document.querySelector(".option5");
let questionIndex = 0;
let index = 0;


const questions=[
    {
        q:'What is the longest that an elephant has ever lived? (That we know of)',
        options:['17 years','49 years','86 years','42 years'],
        answer:2
    },
    {
        q:'What are the main colors on the flag of Nigeria?',
        options:['Black and yellow','Green and White','Blue and White','Red and Yellow'],
        answer:1
    },
    {
        q:'Which of these countries did NOT fight in World War II??',
        options:['Finland','Greece','Ireland','Italy'],
        answer:0
    },
    {
        q:'Which of the following dows not belong ?',
        options:['Horse','Sheep','Duck','Donkey'],
        answer:2
    },
    {
        q:'Which of the following is not a European country ?',
        options:['Zurich','Athens','Brussels','Lagos'],
        answer:3
    }

]


function load(){
    questionNumberSpan.innerHTML=index+1;
    question.innerHTML=questions[questionIndex].q;
    op1.innerHTML=questions[questionIndex].options[0];
    op2.innerHTML=questions[questionIndex].options[1];
    op3.innerHTML=questions[questionIndex].options[2];
    op4.innerHTML=questions[questionIndex].options[3];
    op5.innerHTML=questions[questionIndex].options[4];
    index++;
}

window.onload = function(){
    load();
}

