// import functions and grab DOM elements
import { renderPastPoll } from "./render-utils.js";

const optionForm = document.querySelector('#option-form');

const optionAAddButton = document.querySelector('#add-option-a');
const optionBAddButton = document.querySelector('#add-option-b');
const optionAUndoButton = document.querySelector('#undo-option-a');
const optionBUndoButton = document.querySelector('#undo-option-b');


const optionAVotesEl = document.querySelector('#option-b-count');
const optionBVotesEl = document.querySelector('#option-b-count');
const optionATitleAEl = document.querySelector('#option-a-title');
const optionBTitleEl = document.querySelector('#option-b-title');

const questionEl = document.querySelector('#poll-question');
const closePollEl = document.querySelector('#close-poll');

const pastPollsEl = document.querySelector('#display-past-polls');




// let state
let question = '';
let voteA = '';
let voteB = '';
let optionA = '';
let optionB = '';

let pastPollsArray = [];


// set event listeners 

optionForm.addEventListener('submit', (e) => {
    e.prevenDefault();


    const formData = new FormData(optionForm);

    question = formData.get('question');
    optionA = formData.get('optionA');
    optionB = formData.get('optionB');

    displayCurrentPoll();
    optionForm.reset();

});

optionAAddButton.addEventListener('click', () => {
    optionA++;

    optionAVotesEl.textContent = optionA;
});

optionBAddButton.addEventListener('click', () => {
    optionB++;

    optionBVotesEl.textContent = optionB;
});

optionAUndoButton.addEventListener('click', () => {
    optionA--;

    optionAVotesEl.textContent = optionA;
});

optionBUndoButton.addEventListener('click', () => {
    optionB--;

    optionBVotesEl.textContent = optionB;
});

closePollEl.addEventListener('click', () => {
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
