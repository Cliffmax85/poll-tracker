// import functions and grab DOM elements
import { renderPastPoll } from './render-utils.js';

const optionForm = document.querySelector('#option-form');

const optionAAddButton = document.querySelector('#add-option-a');
const optionBAddButton = document.querySelector('#add-option-b');
const optionAUndoButton = document.querySelector('#undo-option-a');
const optionBUndoButton = document.querySelector('#undo-option-b');


const optionAVotesEl = document.querySelector('#option-a-count');
const optionBVotesEl = document.querySelector('#option-b-count');
const optionATitleAEl = document.querySelector('#option-a-title');
const optionBTitleEl = document.querySelector('#option-b-title');

const questionEl = document.querySelector('#poll-question');
const closePollEl = document.querySelector('#close-poll');

const pastPollsEl = document.querySelector('#display-past-polls');




// let state
let question = '';
let voteA = 0;
let voteB = 0;
let optionA = '';
let optionB = '';

let pastPollsArray = [];


// set event listeners 

optionForm.addEventListener('submit', (e) => {
    e.preventDefault();


    const formData = new FormData(optionForm);

    question = formData.get('question');
    optionA = formData.get('option-a');
    optionB = formData.get('option-b');

    displayCurrentPoll();
    optionForm.reset();

});

optionAAddButton.addEventListener('click', () => {
    voteA++;

    optionAVotesEl.textContent = voteA;
});

optionBAddButton.addEventListener('click', () => {
    voteB++;

    optionBVotesEl.textContent = voteB;
});

optionAUndoButton.addEventListener('click', () => {
    voteA--;

    optionAVotesEl.textContent = voteA;
});

optionBUndoButton.addEventListener('click', () => {
    voteB--;

    optionBVotesEl.textContent = voteB;
});

closePollEl.addEventListener('click', () => {
    optionForm.reset();
    const poll = makePoll();
    pastPollsArray.push(poll);
    displayAllPolls();
    resetState();
    displayCurrentPoll();
});
  // get user input

function displayCurrentPoll() {
    questionEl.textContent = question;
    optionAVotesEl.textContent = voteA;
    optionBVotesEl.textContent = voteB;
    optionATitleAEl.textContent = optionA;
    optionBTitleEl.textContent = optionB;

}

function makePoll() {
    return {
        question: question,
        optionA: optionA,
        optionB: optionB,
        voteA: voteA,
        voteB: voteB,
    
    };
}
function resetState() {
    question = '';
    optionA = '';
    optionB = '';
    voteA = 0;
    voteB = 0;
}

function displayAllPolls() {
    pastPollsEl.textContent = '';

    for (let poll of pastPollsArray) {
        const container = renderPastPoll(poll);

        pastPollsEl.append(container);
    }


}
  // use user input to update state 
  // update DOM to reflect the new state
//Why it no work?
