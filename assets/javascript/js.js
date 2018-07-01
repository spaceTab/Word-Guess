var wordBank = [
    ''
]
var chosenWord   = " ";         //Current word chosen for game
var wrongLetters = [];  
var placeholder  = [];                           //Empty to store wrong letters
var chars;                    //Holds word seperated into character string
var correctGuess = false;
var guessAmount  = 10;


var wins = 0, losses = 0;


var gameInit = function(){
    //Generating random word from wordBank
    chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(chosenWord);

    for (var i = 0; i < chosenWord.length; i++){
        placeholder[i].push('_');
    }
    char = placeholder.split(' ');
    //puts string into individual letters
    //char = chosenWord.split('');    
    window.onload = function(){
    document.getElementById("wins").innerHTML    = "Wins: "   + wins;
    document.getElementById("losses").innerHTML  = "Losses: " + losses;
    document.getElementById("guesses").innerHTML = "Guesses remaining: " + guessAmount;
    document.getElementById("answers").innerHTML  = "Word: " + char;
    }
}

var comparison = function(letter){

    var alphaOnly = event.keyCode >= 65 && event.keyCode <= 99 && event.key.toLowerCase(); //Disables non-alphabetic keys

    if (alphaOnly == true){
        
        for (var j = 0; j < chosenWord.length; j++){     //iterates through length of word
            if (chosenWord[i] === letter){              //Checks for equality to word and guessed letter
                correctGuess = true;                   //changes boolean to true
                answer[i]    = letter;
            }
            else {
                correctGuess = false;           
                answer[i]    = wrongLetters;        //answer into wrongLetters array.
            }
        }      
    }
}


var gameStart = function(){
    gameInit();
    comparison();
}
gameStart();



