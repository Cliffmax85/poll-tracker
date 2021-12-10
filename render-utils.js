// export funciton renderPoll(poll) {
//     const pollDiv = document.createElement('div');
//     const question = document.createElement('p');
//     question.textContent = 

// }

export function renderPastPoll(pastPoll) {
    const container = document.createElement('div');
    const pQuestionEl = document.createElement('p');
    const pTitleA = document.createElement('p');
    const pTitleB = document.createElement('p');
    const pVotesA = document.createElement('p');
    const pVotesB = document.createElement('p');

  
    container.classList.add('past-poll');
    pQuestionEl.textContent = pastPoll.question;
    pTitleA.textContent = pastPoll.optionA;
    pTitleB.textContent = pastPoll.optionB;
    pVotesA.textContent = pastPoll.voteA;
    pVotesB.textContent = pastPoll.voteB;

  
    container.append(pQuestionEl, pTitleA, pTitleB, pVotesA, pVotesB);

    // return the DOM element
    return container;
}