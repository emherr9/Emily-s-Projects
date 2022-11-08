

const questions = [
    {
        question: "Which type of penguin does not live in Antartica?",
        optionA: "Royal Penguin",
        optionB: "Emperor Penguin",
        optionC: "Gentoo Penguin",
        optionD: "Chinstrap Penguin",
        correctOption: "optionA"
    },

    {
        question: "Which of these is an actual type of penguin?",
        optionA: "Matte Penguin",
        optionB: "Macaroni Penguin",
        optionC: "Tuxedo Penguin",
        optionD: "Cube Penguin",
        correctOption: "optionB"
    },

    {
        question: "Which one of these is NOT in a Penguin's diet?",
        optionA: "krill",
        optionB: "eggs of other penguins",
        optionC: "fish",
        optionD: "squid",
        correctOption: "optionD"
    },

    {
        question: "Penguins cannot...",
        optionA: "dance",
        optionB: "swim",
        optionC: "fly",
        optionD: "bite",
        correctOption: "optionC"
    },

    {
        question: "Penguins are what species of animal?",
        optionA: "insects",
        optionB: "reptiles",
        optionC: "fish",
        optionD: "birds",
        correctOption: "optionD"
    },

    {
        question: "What is the Penguin's average lifespan?",
        optionA: "20 years",
        optionB: "22 years",
        optionC: "44 years",
        optionD: "40 years",
        correctOption: "optionA"
    },

    {
        question: "How fast can penguins swim underwater?" ,
        optionA:"999mph",
        optionB: "18mph",
        optionC: "6mph",
        optionD: "30mph",
        correctOption: "optionC"
    },

    {
        question:"How often do penguins migrate?",
        optionA: "Every year",
        optionB: "Every 5 years",
        optionC: "Every 10 years",
        optionD: "Every 4 months",
        correctOption: "optionA"
    },

    {
        question: "How much do large Emperor penguins's weigh?",
        optionA: "11 pounds",
        optionB: "3 pounds",
        optionC: "5 pounds",
        optionD: "88 pounds",
        correctOption: "optionD",
    },

    {
        question: "Which statement is false?",
        optionA: "Penguins mate for life",
        optionB: "Penguins could fly in the past",
        optionC: "Male penguins propose to female mates with a rock",
        optionD: "Female penguins are called a Brood",
        correctOption: "optionD"
    },


]

let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}

let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let indexNumber = 0 //will be used in displaying next question

let currentQuestion;

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}

function checkForAnswer() {
    currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
       falseee=  document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            playerScore = playerScore + 1000; //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            let end = document.getElementsByTagName("h3")
            //set to delay question number till when next question loads
            setTimeout(() => {
                for(let i=0; i<end.length; i++){
                    let element= end[i];
                    element.innerText= "That's incorrect. You're going home with "+ playerScore + " dollars!";
                    
                }
            }, 1000)

            
        }
      
    })
}

//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {

        
         if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
    //    else {
    //         handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
    //     }
    
    }, 1000);
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

function hint1(){
   alert("hint is " + currentQuestion.correctOption);
   document.getElementById("hint1").remove()
}
function hint2(){
    let otherOption = currentQuestion.optionA;
    if(currentQuestion.correctOption === "optionA") {
        otherOption = currentQuestion.optionB;
    }

    alert("it is either "+ currentQuestion.correctOption + " or " + otherOption);
    document.getElementById("hint2").remove()
 }

 function hint3(){
    let thirdOption = currentQuestion.optionA;
    if(currentQuestion.correctOption === "optionA") {
        thirdOption = currentQuestion.optionB;
    }
    alert("it is not "+ thirdOption);
    document.getElementById("hint3").remove()
 }