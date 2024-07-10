const bodyElement = document.querySelector('[data-js="body"]');

const bookMarkButton = document.querySelector(
  '[data-js="button-bookmark-empty"]'
);

bookMarkButton.addEventListener("click", () => {
  bookMarkButton.classList.toggle("bookmark--active");
});

const answerButton = document.querySelector('[data-js="answer-button"]');
const answerHidden = document.querySelector('[data-js="answer-hidden"]');

answerButton.addEventListener("click", () => {
  answerHidden.classList.toggle("card__answer--active");
  if (answerButton.textContent === "Hide Answer") {
    answerButton.textContent = "Show Answer";
  } else {
    answerButton.textContent = "Hide Answer";
  }
});
