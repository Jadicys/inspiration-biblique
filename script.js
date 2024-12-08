const verses = [
    { text: "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle.", reference: "Jean 3:16" },
    { text: "L'Éternel est mon berger: je ne manquerai de rien.", reference: "Psaumes 23:1" },
    { text: "Je puis tout par celui qui me fortifie.", reference: "Philippiens 4:13" },
    { text: "Ne crains point, car je suis avec toi; Ne promène pas des regards inquiets, car je suis ton Dieu.", reference: "Ésaïe 41:10" },
    { text: "L'Éternel donne la force à son peuple; l'Éternel bénit son peuple par la paix.", reference: "Psaumes 29:11" }
];

const topicVerses = {
    peace: [
        { text: "Je vous laisse la paix, je vous donne ma paix; je ne vous donne pas comme le monde donne.", reference: "Jean 14:27" },
        { text: "L'Éternel donne la force à son peuple; l'Éternel bénit son peuple par la paix.", reference: "Psaumes 29:11" }
    ],
    faith: [
        { text: "Car nous marchons par la foi et non par la vue.", reference: "2 Corinthiens 5:7" },
        { text: "Si vous avez de la foi comme un grain de moutarde, vous direz à cette montagne: Transporte-toi d'ici là, et elle se transportera.", reference: "Matthieu 17:20" }
    ],
    forgiveness: [
        { text: "Supportez-vous les uns les autres, et, si l'un a sujet de se plaindre de l'autre, pardonnez-vous réciproquement.", reference: "Colossiens 3:13" },
        { text: "Si nous confessons nos péchés, il est fidèle et juste pour nous les pardonner, et pour nous purifier de toute iniquité.", reference: "1 Jean 1:9" }
    ],
    guidance: [
        { text: "Confie-toi en l'Éternel de tout ton cœur, et ne t'appuie pas sur ta sagesse.", reference: "Proverbes 3:5" },
        { text: "Ta parole est une lampe à mes pieds, et une lumière sur mon sentier.", reference: "Psaumes 119:105" }
    ]
};

const quizQuestions = [
    { question: "Qui a écrit les Actes des Apôtres ?", answers: ["Pierre", "Paul", "Luc", "Jean"], correct: 2 },
    { question: "Quel est le premier livre de la Bible ?", answers: ["Genèse", "Exode", "Lévitique", "Nombres"], correct: 0 },
    { question: "Quelle est la dernière parole de Jésus sur la croix ?", answers: ["Il est accompli", "Mon Dieu, mon Dieu, pourquoi m'as-tu abandonné ?", "Père, entre tes mains je remets mon esprit", "Tout est fait"], correct: 0 },
    { question: "Combien de livres contient le Nouveau Testament ?", answers: ["24", "27", "39", "66"], correct: 1 },
    { question: "Qui a trahi Jésus ?", answers: ["Jean", "Pierre", "Judas", "Thomas"], correct: 2 },
    { question: "Dans quel livre de la Bible trouve-t-on le Psaume 23 ?", answers: ["Proverbes", "Psaumes", "Isaïe", "Ecclésiaste"], correct: 1 },
    { question: "Qui a été le premier roi d'Israël ?", answers: ["David", "Saül", "Salomon", "Saül"], correct: 1 },
    { question: "Quel apôtre a écrit l'Apocalypse ?", answers: ["Jean", "Pierre", "Paul", "Matthieu"], correct: 0 },
    { question: "Quel est le plus grand commandement selon Jésus ?", answers: ["Aime ton prochain", "Aime Dieu de tout ton cœur", "Honore ton père et ta mère", "Ne tue pas"], correct: 1 },
    { question: "Combien de jours Jésus est-il resté dans le désert ?", answers: ["30 jours", "40 jours", "50 jours", "20 jours"], correct: 1 }
];

const dailyVerse = document.getElementById('daily-verse');
const newVerseButton = document.getElementById('new-verse');
const topicSelect = document.getElementById('topic-select');
const topicVerseContainer = document.getElementById('topic-verse');
const quizAnswers = document.querySelectorAll('.quiz-answer');
const quizResult = document.getElementById('quiz-result');
const questionText = document.getElementById('question');

// Afficher un verset aléatoire
function showRandomVerse() {
    const randomIndex = Math.floor(Math.random() * verses.length);
    const verse = verses[randomIndex];
    dailyVerse.innerHTML = `\"${verse.text}\" <strong>- ${verse.reference}</strong>`;
}

newVerseButton.addEventListener('click', showRandomVerse);

// Afficher un verset en fonction du sujet sélectionné
topicSelect.addEventListener('change', () => {
    const selectedTopic = topicSelect.value;
    const verses = topicVerses[selectedTopic];
    if (verses) {
        const randomVerse = verses[Math.floor(Math.random() * verses.length)];
        topicVerseContainer.innerHTML = `\"${randomVerse.text}\" <strong>- ${randomVerse.reference}</strong>`;
    } else {
        topicVerseContainer.innerHTML = "Aucun verset disponible pour ce sujet.";
    }
});

// Gestion du quiz
let currentQuestion = 0;

function loadQuizQuestion() {
    const question = quizQuestions[currentQuestion];
    questionText.innerHTML = question.question;
    quizAnswers.forEach((button, index) => {
        button.innerHTML = question.answers[index];
        button.setAttribute('data-answer', index);
    });
}

quizAnswers.forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.getAttribute('data-answer');
        const correctAnswer = quizQuestions[currentQuestion].correct;

        if (answer == correctAnswer) {
            quizResult.innerHTML = "Bonne réponse !";
        } else {
            quizResult.innerHTML = "Mauvaise réponse, essayez encore !";
        }

        currentQuestion++;
        if (currentQuestion < quizQuestions.length) {
            setTimeout(loadQuizQuestion, 1500);
        } else {
            setTimeout(() => {
                quizResult.innerHTML = "Le quiz est terminé ! Merci d'avoir participé.";
            }, 1500);
        }
    });
});

// Initialisation
showRandomVerse();
loadQuizQuestion();


document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".playlist-category h3");

    categories.forEach(category => {
        category.addEventListener("click", () => {
            const songs = category.nextElementSibling;
            songs.style.display = songs.style.display === "none" ? "block" : "none";
        });
    });
});

// Liste des questions avec les réponses correctes
const questions = [
    { question: "Quel est le premier livre de la Bible?", answers: ["A. Exode", "B. Genèse", "C. Lévitique", "D. Psaumes"], correct: "B" },
    { question: "Combien de commandements Dieu a-t-il donnés à Moïse?", answers: ["A. 5", "B. 10", "C. 12", "D. 20"], correct: "B" },
    { question: "Qui a tué Goliath?", answers: ["A. Saül", "B. David", "C. Salomon", "D. Samson"], correct: "B" },
    { question: "Quel prophète a été avalé par un grand poisson?", answers: ["A. Élie", "B. Jonas", "C. Jérémie", "D. Daniel"], correct: "B" },
    { question: "Quelle femme est devenue reine et a sauvé les Juifs?", answers: ["A. Ruth", "B. Esther", "C. Marie", "D. Déborah"], correct: "B" },
    { question: "Quelle est la prière enseignée par Jésus?", answers: ["A. Notre Père", "B. Je vous salue Marie", "C. Credo", "D. Psaumes"], correct: "A" },
    { question: "Combien d'apôtres Jésus avait-il?", answers: ["A. 10", "B. 12", "C. 14", "D. 7"], correct: "B" },
    { question: "Quel disciple a trahi Jésus?", answers: ["A. Pierre", "B. Jean", "C. Judas", "D. Thomas"], correct: "C" },
    { question: "Quel était le métier de Jésus?", answers: ["A. Pêcheur", "B. Charpentier", "C. Berger", "D. Fermier"], correct: "B" },
    { question: "Qui a conduit les Israélites hors d'Égypte?", answers: ["A. Moïse", "B. Joseph", "C. Josué", "D. Aaron"], correct: "A" },
    { question: "Combien de jours Jésus a-t-il jeûné dans le désert?", answers: ["A. 30 jours", "B. 40 jours", "C. 50 jours", "D. 20 jours"], correct: "B" },
    { question: "Quel est le fruit de l'Esprit selon Galates?", answers: ["A. Foi", "B. Amour", "C. Joie", "D. Toutes ces réponses"], correct: "D" },
    { question: "Qui a écrit la majorité des lettres du Nouveau Testament?", answers: ["A. Pierre", "B. Paul", "C. Jean", "D. Jacques"], correct: "B" },
    { question: "Quel est le signe de l'alliance de Dieu avec Noé?", answers: ["A. Une étoile", "B. Une colombe", "C. Un arc-en-ciel", "D. Une montagne"], correct: "C" },
    { question: "Où Jésus a-t-il changé l'eau en vin?", answers: ["A. Jérusalem", "B. Cana", "C. Nazareth", "D. Béthanie"], correct: "B" },
    { question: "Qui a reçu les tables de la Loi sur le mont Sinaï?", answers: ["A. Josué", "B. Moïse", "C. Aaron", "D. David"], correct: "B" },
    { question: "Combien de jours Lazare était-il mort avant d'être ressuscité?", answers: ["A. 1 jour", "B. 2 jours", "C. 3 jours", "D. 4 jours"], correct: "D" },
    { question: "Dans quelle mer Moïse a-t-il ouvert un passage?", answers: ["A. Méditerranée", "B. Rouge", "C. Morte", "D. Galilée"], correct: "B" },
    { question: "Quelle fête commémore la résurrection de Jésus?", answers: ["A. Noël", "B. Pâques", "C. Pentecôte", "D. Ascension"], correct: "B" },
    { question: "Qui a été la mère de Jésus?", answers: ["A. Marie", "B. Ruth", "C. Sarah", "D. Élisabeth"], correct: "A" }
];

// Générer les questions dynamiquement
const quizContainer = document.getElementById("quiz-container");

questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("quiz-question");
    questionDiv.innerHTML = `
        <p>${index + 1}. ${q.question}</p>
        <button class="quiz-answer" data-answer="A">${q.answers[0]}</button>
        <button class="quiz-answer" data-answer="B">${q.answers[1]}</button>
        <button class="quiz-answer" data-answer="C">${q.answers[2]}</button>
        <button class="quiz-answer" data-answer="D">${q.answers[3]}</button>
        <p class="quiz-result"></p>
    `;
    quizContainer.appendChild(questionDiv);
});

// Vérification des réponses
document.querySelectorAll('.quiz-answer').forEach(button => {
    button.addEventListener('click', (e) => {
        const selectedAnswer = e.target.dataset.answer;
        const questionText = e.target.parentElement.querySelector('p').innerText;
        const questionIndex = questions.findIndex(q => questionText.includes(q.question));
        const correctAnswer = questions[questionIndex].correct;

        const resultText = e.target.parentElement.querySelector('.quiz-result');
        if (selectedAnswer === correctAnswer) {
            resultText.innerText = "Correct! Bonne réponse.";
            resultText.style.color = "green";
        } else {
            resultText.innerText = "Incorrect! La bonne réponse était " + correctAnswer + ".";
            resultText.style.color = "red";
        }
    });
});
