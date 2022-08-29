var readlineSync = require("readline-sync");

var score = 0;

function welcomeUser() {
	var userName = readlineSync.question("What is your name? ");

	console.log("\nWelcome " + userName + " to DO YOU KNOW Aritra? \n");
}

var highScores = [
	{
		name: "Tanay",
		score: 4
	}, 
	{
		name: "Ayush",
		score: 6
	}
]

var questions = [
	{
		question: "Who is my favourite music artist? ",
		answer: "Post Malone"
	},
	{
		question: "Which is my favourite football team? ",
		answer: "Manchester United"
	},
	{
		question: "Who is my favourite footballer of all time? ",
		answer: "Cristiano Ronaldo"
	},
	{
		question: "Book which I'm reading currently? ",
		answer: "Atomic Habits"
	},
	{
		question: "Which audio product have I got my eyes on for a long time? ",
		answer: "Sony WH-1000XM4"
	}
]

function playQuiz(question, answer) {
	var userAnswer = readlineSync.question(question);

	if (userAnswer.toLowerCase() === answer.toLowerCase()) {
		console.log("Correct Answer!");
		score++;
	} else {
		console.log("Wrong Answer!");
		console.log("Correct Answer is: " + answer)
	}

	console.log("Current Score is: " + score);
	console.log();
	console.log("-----------------------------------");
	console.log();
}

function askQuestions() {
	for (var i = 0; i < questions.length; i++) {
		playQuiz(questions[i].question, questions[i].answer);
	}
}

function displayScore() {
	if (score < 1) {
		console.log("Your final score is " + score + ". Let\'s get to know each other soon!.");
	} else {
		console.log("Hurrah!! You have scored : " + score + ". You know me pretty well");
	}

	console.log();
	
	console.log("Check out the high scores, if you should be there ping me and I'll update it!");

	console.log();
	
  	highScores.map(score => console.log(score.name, " : ", score.score));
}

welcomeUser();
askQuestions();
displayScore();