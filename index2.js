
let questions = [
    {
        prompt: "What is the maximum horsepower output of the BMW M5 CS?",
        options: [
           " a) 600 hp",
"b) 625 hp",
"c) 650 hp",
"d) 700 hp",


        ],
        answer: "c) 650 hp"
    },

	{
		prompt: `What does the "CS" stand for in BMW M5 CS?`,
		options: [
			"a) Comfort Sport",
"b) Competition Series",
"c) Carbon Special",
"d) Custom Speed",


		],
		answer:"b) Competition Series"
	},
	{
		prompt: "Which Japanese automaker is known for the iconic sports car, the Nissan GT-R?",
		options: [
			"a) Honda",
"b) Toyota",
"c) Nissan",
"d) Subaru",
		],

		answer: "c) Nissan"
	},

	{
		prompt: `What does "JDM" stand for in the context of cars?`,
		options: [
			"a) Just Drive More",
"b) Japanese Domestic Market",
"c) Joyful Driving Machines",
"d) Juxtaposed Design Models",


		],
		answer: "b) Japanese Domestic Market"
	},

	{
		prompt: `What does "BMW" stand for in German?`,
		options: [
			"a) Berliner Motor Werke",
"b) Bayerische Motoren Werke",
"c) Bremer Motor Wagen",
"d) Baden-Württembergische Maschinenfabrik",


			],
		answer: "b) Bayerische Motoren Werke"
	},
    {
        prompt: `Among the BMW M Series, which model is known for its impressive top speed and performance, often referred to as the "Ultimate Driving Machine"?`,
        options: [
            "a) BMW M2 Competition",
"b) BMW M4",
"c) BMW M5 Competition",
"d) BMW M8",
        ],
        answer: "c) BMW M5 Competition"
    },

    {
        prompt: `In the luxury car segment in India, which model is often considered one of the most prestigious and luxurious, offering a blend of advanced technology, comfort, and performance?`,
        options: [
			"a) Rolls-Royce Phantom",
"b) Bentley Continental GT",
"c) Mercedes-Maybach S-Class",
"d) Audi A8 L",


        ],
        answer: "c) Mercedes-Maybach S-Class"
    },

    {
        prompt: "How many units of the Lamborghini Veneno were produced, making it an extremely rare and limited-edition supercar?",
        options: [
			"a) 5 units",
"b) 10 units",
"c) 13 units",
"d) 20 units",
        ],
        answer: "a) 5 units"
    },

    {
        prompt: "What is a common type of car modification seen in Kerala due to its varying road conditions and scenic terrain?",
        options: [
			"a) Engine tuning for speed",
			"b) Suspension modification for off-road capability",
			"c) Aesthetic changes with custom decals",
			"d) Upgrading to larger wheels for city driving",
		    ],
        answer: "b) Suspension modification for off-road capability",
			
    },
{
	prompt: "In India, which type of car modification is often sought after to enhance a vehicle's performance, including improvements in horsepower and efficiency?",
	options:[
		"a) Suspension upgrades for better ride comfort",
		"b) Aesthetic changes with custom decals",
"c) Performance enhancements like engine tuning",
"d) Wheel and tire modifications for a unique look",
	],
	answer:"c) Performance enhancements like engine tuning",

},










];


let hta=document.querySelector(".conta")
let questionsEl = 
	document.querySelector( 
		"#questions"
	); 
let timerEl = 
	document.querySelector("#timer"); 
let choicesEl = 
	document.querySelector("#options"); 
let submitBtn = document.querySelector( 
	"#submit-score"
); 
let startBtn = 
	document.querySelector("#start"); 
let nameEl = 
	document.querySelector("#name"); 
	let bmw=document.querySelector(".containerNew")
let feedbackEl = document.querySelector( 

	"#feedback"
); 
let reStartBtn = 
	document.querySelector("#restart"); 
let p=document.querySelector("para")
let currentQuestionIndex = 0; 
let time = questions.length * 15; 
let timerId; 


function quizStart() { 
	timerId = setInterval( 
		clockTick, 
		1000 
	); 
	timerEl.textContent = time; 
	let landingScreenEl = 
		document.getElementById( 
			"start-screen"
		); 
	landingScreenEl.setAttribute( 
		"class", 
		"hide"
	); 
	questionsEl.removeAttribute( 
		"class"
	); 
	getQuestion(); 
} 

function getQuestion() { 
	let currentQuestion = 
		questions[currentQuestionIndex]; 
	let promptEl = 
		document.getElementById( 
			"question-words"
		); 
	promptEl.textContent = 
		currentQuestion.prompt; 
	choicesEl.innerHTML = ""; 
	currentQuestion.options.forEach( 
		function (choice, i) { 
			let choiceBtn = 
				document.createElement( 
					"button"
				); 
			choiceBtn.setAttribute( 
				"value", 
				choice 
			); 
			choiceBtn.textContent = 
				i + 1 + ". " + choice; 
			choiceBtn.onclick = 
				questionClick; 
			choicesEl.appendChild( 
				choiceBtn 
			); 
		} 
	); 
} 


function questionClick() { 
	if ( 
		this.value !== 
		questions[currentQuestionIndex] 
			.answer 
	) { 
		time -= 10; 
		if (time < 0) { 
			time = 0; 
		} 
		timerEl.textContent = time; 
		feedbackEl.textContent = `Wrong! The correct answer was 
		${questions[currentQuestionIndex].answer}.`; 
		feedbackEl.style.color = "red"; 
	} else { 
		feedbackEl.textContent = 
			"Correct!"; 
		feedbackEl.style.color = 
			"green"; 
	} 
	feedbackEl.setAttribute( 
		"class", 
		"feedback"
	); 
	setTimeout(function () { 
		feedbackEl.setAttribute( 
			"class", 
			"feedback hide"
		); 
	}, 2000); 
	currentQuestionIndex++; 
	if ( 
		currentQuestionIndex === 
		questions.length 
	) { 
		quizEnd(); 
	} else { 
		getQuestion(); 
	} 
} 


function quizEnd() { 
	clearInterval(timerId); 
	let endScreenEl = 
		document.getElementById( 
			"quiz-end"
		); 
	endScreenEl.removeAttribute( 
		"class"
	); 
	let finalScoreEl = 
		document.getElementById( 
			"score-final"
		); 
	finalScoreEl.textContent = time; 
	questionsEl.setAttribute( 
		"class", 
		"hide"
	); 
} 


function clockTick() { 
	// time--; 
	timerEl.textContent = time; 
	if (time <= 0) { 
		quizEnd(); 
	} 
} 


function saveHighscore() { 
	let name = nameEl.value.trim(); 
	if (name !== "") { 
		let highscores = 
			JSON.parse( 
				window.localStorage.getItem( 
					"highscores"
				) 
			) || []; 
		let newScore = { 
			score: time, 
			name: name, 
		}; 
		highscores.push(newScore); 
		// window.localStorage.setItem( 
		// 	// "highscores", 
		// 	JSON.stringify(highscores) 
		// ); 
		alert( 
			"Your Score has been Submitted"
		); 
	} 
} 


function checkForEnter(event) { 
	if (event.key === "Enter") { 
		saveHighscore(); 
		alert( 
			"Your Score has been Submitted"
		); 
	} 
} 
nameEl.onkeyup = checkForEnter; 


submitBtn.onclick = saveHighscore; 


startBtn.onclick = quizStart;

startBtn.addEventListener("click",()=>{
hta.style.display="none"
bmw.style.width="80%"
bmw.style.left="50%"

})
