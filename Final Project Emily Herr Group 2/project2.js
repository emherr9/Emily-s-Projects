const penTrivia = [
    {
        question: "1. Which type of penguin does not live in Antarctica?",
        a: "Royal",
        b: "Emperor",
        c: "Gentoo",
        d: "Chinstrap",
        correct: "a",
    },
    {
        question: "2. Which of these is an actual type of penguin?",
        a: "Matte Penguin",
        b: "Macaroni Penguin",
        c: "Tuxedo Penguin",
        d: "Cube Penguin",
        correct: "b",
    },
    {
        question: "3. Which one of these is NOT in a penguin's diet?",
        a: "krill",
        b: "eggs of other penguins",
        c: "fish",
        d: "squid",
        correct: "b",
    },
    {
        question: "4. Penguins cannot:",
        a: "fly",
        b: "swim",
        c: "dance",
        d: "bite",
        correct: "a",
    },
    {
        question: "5. How much do the largest Emperor penguin's weigh?",
        a: "88 pounds",
        b: "3 pounds",
        c: "100 pounds",
        d: "5 pounds",
        correct: "a",
    },
    {
    
        question: "6. Penguins are what species of animal?",
         a:"birds",
         b:"reptiles",
         c:"fish",
         d:"insect",
         correct:"a",
    },
    {
        question: "7. Which statement is true?",
        a: "Penguins only live in cold habitats",
        b: "Penguins are not allergic to fish.",
        c: "Penguins are monogomous.",
        d: "Penguins poop once a week.",
        correct: "c",
    },
    {
        question: "8. What is a penguin's average lifespan?",
        a:"10 years",
        b:"22 years",
        c:"40 years",
        d:"20 years",
        correct:"d",
    },
    {
        question: "9. Which statement is false?",
        a: "Penguins mate for life",
        b: "Penguins could fly in the past.",
        c: "Male penguins propose to female mates with a rock.",
        d: "Female penguins are called a Brood ",
        correct: "d",
    },
    {
        question:"10. How often do penguins migrate?",
        a:"Every year",
        b:"Every 5 years",
        c:"Every 10 years",
        d:"Every 4 months",
        correct:"a",
    },
];
 
const trivia = document.getElementById('trivia')
const answerEds = document.querySelectorAll('.answer')
const questIon = document.getElementById('question')
const text_a = document.getElementById('text_a')
const text_b = document.getElementById('text_b')
const text_c = document.getElementById('text_c')
const text_d = document.getElementById('text_d')
const submission = document.getElementById('submit')
 
let triviaNow = 0
let score = 0
 
trivLive()
 
function trivLive() {
    deselectAnswers()
 
    const goTrivia = penTrivia[triviaNow]
 
    questIon.innerText = goTrivia.question
    text_a.innerText = goTrivia.a
    text_b.innerText = goTrivia.b
    text_c.innerText = goTrivia.c
    text_d.innerText = goTrivia.d
}
 
function deselectAnswers() {
    answerEds.forEach(answerEd => answerEd.checked = false)
}
 
function getSelected() {
    let answer
 
    answerEds.forEach(answerEd => {
        if(answerEd.checked) {
            answer = answerEd.id
        }
    })
 
    return answer
} 
submit.addEventListener('click', () => {
    const answer = getSelected()
 
    if(answer) {
        if(answer === penTrivia[triviaNow].correct) {
            score++
        }
 
        triviaNow++
 
        if(triviaNow < penTrivia.length) {
            trivLive()
        } else {
            trivia.innerHTML = `
                <h2>You answered ${score}/${penTrivia.length} questions correctly</h2>
 
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})