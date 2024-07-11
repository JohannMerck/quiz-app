const form = document.querySelector('[data-js="form-yolo"]');
const mainForm = document.querySelector('[data-js="main-form"]');
const bodyNeu = document.querySelector('[data-js="body-neu"]');
const submitButton = document.querySelector('[data-js="submit-button"]');

const question = document.querySelector('[data-js="question"]');
const answer = document.querySelector('[data-js="answer"]');
const tag = document.querySelector('[data-js="tag"]');

console.log(question, answer, tag);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  //   console.log(data);
  const newCard = document.createElement("div");
  newCard.classList.add("question-card");
  const questionInput = question.value;
  const answerInput = answer.value;
  const tagInput = tag.value;
  newCard.innerHTML = `
  
  <ul class="card-list-new">
        <li class="card-list__item">
          <article class="card">
            <h2 class="card__question">
              ${questionInput}
            </h2>
        
            <p">${answerInput}</p>
            <ul class="card__tag-list">
              <li class="card__tag-list-item">#${tagInput}</li>
            </ul>
  `;

  form.append(newCard);
});

const charactersLeft = document.querySelector('[data-js="charactersLeft"]');

const maxLength = question.getAttribute("maxlength");

const updateAmountLeft = (value) => {
  charactersLeft.innerText = value;
};

updateAmountLeft(maxLength);

question.addEventListener("input", () => {
  updateAmountLeft(maxLength - question.value.length);
});

const charactersLeftAnswer = document.querySelector(
  '[data-js="charactersLeftAnswer"]'
);

const maxLengthAnswer = answer.getAttribute("maxlength");

const updateAmountLeftAnswer = (value) => {
  charactersLeftAnswer.innerText = value;
};

updateAmountLeftAnswer(maxLength);

answer.addEventListener("input", () => {
  updateAmountLeftAnswer(maxLengthAnswer - answer.value.length);
});
