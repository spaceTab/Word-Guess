
var word = [      
    'fish',
    'dog',
    'cat',
    'frog',
    'rabbit',
    'kappybara',
    'elephant',
    'lion',
    'deer'
]

//Picks random word from the words array
var wordPicker;

//empty array to store answer & wrong guesses.
var answerArray   = [];
var incorrectLTRS = [];
var answer;   //convers answer from an array to string.
var guessLimit = 10;
var gameWins   = 0;
var gameLoss   = 0;

var answer = answerArray.join(" ");

//loads stats on page load / refresh



function gameInitialize() {
    //Chooses a random word from the words array
    wordPicker = words[Math.floor(Math.random() * words.length)];
    console.log(wordPicker);


    for (var i = 0; i < wordPicker.length; i++){
        answerArray[i] = '_';
    }
    console.log(answerArray[i]);

    answer = answerArray.join(" ");
    wrong


}


gameInitialize();
window.onload = function () {
    document.getElementById("wins").innerHTML    = "Wins: " + gameWins;
    document.getElementById("losses").innerHTML  = "Losses: " + gameLoss;
    document.getElementById("guesses").innerHTML = "Guesses remaining: " + guessLimit;
    document.getElementById("answers").innerHTML = "word: " + answer;
}