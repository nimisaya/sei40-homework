// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
const wordLetters = [
  "T",
  "E",
  "S",
  "T"
];
const guessLetters = [
  "_",
  "_",
  "_",
  "_"
];
let counter = 0;
// Write a function called guessLetter that will:

const guessLetter = function(str){
    console.log(`Letter guessed: ${str}`);
  for(let i = 0;i < wordLetters.length; i++){
    const currLetter = wordLetters[i];
    const currGuessLetter = guessLetters[i];

    if(str === wordLetters[i])
    {
      guessLetters[i] = str;
      console.log("Well Done");
    }
  } // End For

  for(let i = 0;i < wordLetters.length; i++){
    if(guessLetters[i] === "_"){
    //  console.log("Carry on");
      counter++;
    }else{
      //console.log("Well Done")
    }
  }
  if(counter > 0){
    console.log("Carry on");
  }
  return guessLetters;
};

// console.log(guessLetters);
// guessLetter("S");
// console.log(guessLetters);
// guessLetter("Z");
// console.log(guessLetters);
// guessLetter("E");
// console.log(guessLetters);
// guessLetter("T");
// console.log(guessLetters);


// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
