//these are elements we have already created on the screen through html
let timer = document.querySelector('#time');
let startBtn = document.querySelector('#start');
let container = document.querySelector('#container')

//these are elements created through JS
let question = document.createElement('div');
let options = document.createElement('div');

//we want an event listener at the top to determine when the start button has been clicked. We want to listen for click and then employ the callback function "start game"
startBtn.addEventListener('click', startGame)

question.classList.add('question');
options.classList.add('options');

//object for the questions to live in. You can call on these with an iteration
let questions = [
    //Question 1
    {
        question: "You might know water bears as what scientific name?",
        answers: [
            {option: "1. Tardigrades", value:true},
            {option: "2. Microfauna", value:false},
            {option: "3. Rotifers", value:false},
            {option: "4. Limnognathia", value:false}
        ]
    },
    //Question 2
    {
        question: "Why were these little critters named water bears?",
        answers: [
            {option: "1. They are brown and fluffy", value:false},
            {option: "2. Their hibernation cycle resembles that of a bear's", value:false},
            {option: "3. The way they walk resembles a bear's gait", value:true},
            {option: "4. Water bears are in the same family as actual bears", value:false}
        ]
    },
    //Question 3
    {
        question: "Tardigrades are among the ______ animals.",
        answers: [
            {option: "1. Largest", value:false},
            {option: "2. Meanest", value:false},
            {option: "3. Hardiest", value:true},
            {option: "4. Laziest", value:false}
        ]
    },
    //Question 4
    {
        question: "Are female tardigrades more common than male tardigrades?",
        answers: [
            {option: "1. No, there are more male than female tardigrades", value:false},
            {option: "2. Yes, there are more female than male tardigrades", value:true},
            {option: "3. No, there is a 50/50 ratio of male to female tardigrades", value:false},
            {option: "4. No, tardigrades do not have sexes", value:false}
        ]
    },
    //Question 5
    {
        question: "Tardigrades can endure what extremes?",
        answers: [
            {option: "1. Tempuratures as low as -200C and as high as 151C", value:false},
            {option: "2.Boiling alcohol", value:false},
            {option: "3. Extreme dehydration", value:false},
            {option: "4. The vacuum of space", value:false},
            {option: "5. Levels of X-ray radiation 1000x the lethal human dose", value:false},
            {option: "5. All the answers are correct", value:true}
        ]
    },
    //Question 6
    {
        question: "True or false: Tardigrades are true extremophiles",
        answers: [
            {option: "1. True", value:false},
            {option: "2. False", value:true}
        ]
    },
    //Question 7
    {
        question: "True or False: Scientists have successfully froze a tardigrade to within a fraction of a degree Kelvin.",
        answers: [
            {option: "1. True", value:true},
            {option: "2. False", value:false}
        ]
    },
    //Question 8
    {
        question: "True or False: Tardigrades can suspend their metabolism.",
        answers: [
            {option: "1. True", value:true},
            {option: "2. False", value:false}
        ]
    },
    //Question 9
    {
        question: "True or False: Tardigrades don't have eyes",
        answers: [
            {option: "1. True", value:true},
            {option: "2. False", value:false}
        ]
    },
    //Question 10
    {
        question: "True or False: Tardigrades can't change their shapes.",
        answers: [
            {option: "1. True", value:false},
            {option: "2. False", value:true}
        ]
    }

]

let questionNumber = 0;
let time = 150;
let correctAnswers = 0;

//function that starts the game. WHat we want is the question and options to show, the score, and the timer.
function startGame(){
    container.innerHTML = '';
    container.append(question);
    container.append(options);
    addQuestions();
}

function addQuestions(){
    question.innerHTML = questions[questionNumber].question;
    options.innerHTML = '';

    //this will iterate through the questions in the array we made
    for(let i = 0; i<questions.length; i++){
        var answerBtn = document.createElement('button');
        options.append(answerBtn);
        answerBtn.setAttribute('data-value', questions[questionNumber].answers[i].value);
        answerBtn.textContent = questions[questionNumber].answers[i].option;
        answerBtn.addEventListener('click',onward);
    }

    function onward(){
        questionNumber++;
        if(this.attributes[1].value){
            if (questionNumber>=questions.length){
                endGame();
            }
            else{
                addQuestions();
            }
        }

        else{
            if (questionNumber>=questions.length){
                endGame();
            }
            else{
                addQuestions();
            }
        }
        
    }
}



