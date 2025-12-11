//*Alize Jackson WEB 118 Final Project Javascript*//
//*Quiz Questions Section*//
//*Where all the questions and answers are stored. No cheating!*//
const quizData = [
    {
      question: "What monster is she the daughter to? Hint: She has a lot of stitches.",
      options: ["Dr.Frankenstein", "Dr.Frankenstein's Monster", "Zombie", "Ghost"],
      correct: "Dr.Frankenstein's Monster",
      image: "/Frankie_Stein.png"
    },
    {
      question: "What monster is she the daughter to? Hint: She is pink and has fangs.",
      options: ["Bat", "Vampire", "Troll", "Succubus"],
      correct: "Vampire",
      image: "/Profile_art_-_Draculaura.png"
    },
    {
      question: "What monster is she the daughter to? Hint: She is quite furry.",
      options: ["Werecat", "Werewolf", "Skeleton", "Plant Monster"],
      correct: "Werewolf",
      image: "/Clawdeen_Wolf 3F.png"
    },
    {
      question: "What monster is she the daughter to? Hint: She's the best swimmer amongst the group.",
      options: ["Siren", "Sea monster", "Ghost", "Phantom"],
      correct: "Sea monster",
      image: "/Mh_2010_lagoona_blue_2_by_figyalova-dau34b7.png"
    },
    {
      question: "What monster is she the daughter to? Hint: She's from a very sandy place. ",
      options: ["Mummy", "Zombie", "Ghoul", "Trick question! She's still a human"],
      correct: "Mummy",
      image: "/Profile_art_-_Cleo_full_face.png"
    }
];

//*Element ID Section*//
//*Holds all the const elements needed for the function and const.*//
//*Had to look up and research a lot for this section to make my quiz like how I wanted.*//
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
const imageElement = document.getElementById("questionImage");

//*Quiz Function Section*//
//*The core of the quiz: the functions. Neded to make the actual quiz "function" correctly. (get it?)*//
let currentQuestion = 0;
let score = 0;
  
function showQuestion() {
  const question = quizData[currentQuestion];
  questionElement.innerText = question.question;
  optionsElement.innerHTML = "";
  
  question.options.forEach(option => {
    const button = document.createElement("button");
    button.classList.add('option');
    button.innerText = option;
    optionsElement.appendChild(button);
    button.innerHTML = `
            <input type="radio" name="answer" value="${option}">
            ${option}
        `;
    submitButton.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const answer = quizData[currentQuestion].correct;
  
  if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
}
  
function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
}

showQuestion();

