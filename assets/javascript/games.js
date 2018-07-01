
var wrongGuess = [];
var guessesLeft = 10;
var goodGuess = false;

var wins = 0;
var losses = 0;
var words = [
    'dog',
    'cat',
    'lizard',
    'fish',
    'rabbit',
    'cow',
    'mouse',
]


var wordChoice = words[Math.floor(Math.random() * words.length)];
console.log(wordChoice);   //NO CHEATING 
var answers = [];
var remainingLetters = words.length;

var strAns;   //puts answer from an array to a string

//creates array for correct answer
for (var i = 0; i < wordChoice.length; i++) {
    answers[i] = "_";
    console.log(answers[i])
}

//puts the ' _ _ _ ' placeholder to window.
strAns = answers.join(" ");
wrongAns = wrongGuess.join(" ");


window.onload = function () {
    document.getElementById("wins").innerHTML    = "Wins: " + wins;
    document.getElementById("losses").innerHTML  = "Losses: " + losses;
    document.getElementById("guesses").innerHTML = "Guesses remaining: " + guessesLeft;
    document.getElementById("answers").innerHTML = "word: " + strAns;
}


document.onkeyup = function (event) {
    var letter = event.key.toLowerCase();

    if ()
    for (var i = 0; i < wordChoice.length; i++) {
        if (wordChoice[i] === letter) {
            answers[i] = letter;
            
        } 
        
    }


    document.getElementById("answers").innerHTML = answers.join(' ');
    document.getElementById("guesses").innerHTML = "Guesses remaining: " + guessesLeft;
    document.getElementById("wrong").innerHTML   = "Wrong letters: "     + wrongGuess;
}

var winLoss = function(){
    if (wordChoice === letter){
        wins++;
    }
    else if ( guessesLeft === 0) {
        losses++;
    }
    document.getElementById("wins").innerHTML   = "Wins: "   + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
}
winLoss();


