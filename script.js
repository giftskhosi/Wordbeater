window.addEventListener('load', init);

const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}
//Gobals
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'river',
    'status',
    'statue',
    'wow',
    'this',
    'is',
    'generates',
    'luck',
    'jucky',
    'duck',
    'dicky',
    'licky',
];

//initialize Game
function init(){

    seconds.innerHTML = currentLevel;
    //Load word from array
    showWord(words);
    //start matchingg on word input
    wordInput.addEventListener('input', startMatch);
    //Call countdown every second
    setInterval(countdown, 1000);
    //check game status
    setInterval(checkStatus, 50);
}
//start matching shit
function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
    
}

//Match currentWord to wordInput
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct Answer';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

// Pick and Show Random word
function showWord(words){
    const randIndex = Math.floor(Math.random() * words.length);

    currentWord.innerHTML = words[randIndex];
}

function countdown(){
    //Make sure time does not runn out
    if(time > 0){
        time--;
    } else if(time === 0){
        isPlaying = false;
    }
    //show time
    timeDisplay.innerHTML = time;
}

function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over !!!';
        score = -1
    }
}