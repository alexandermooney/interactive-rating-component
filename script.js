const container = document.querySelector('.cpt-container');
const inputContent = document.querySelector('.cpt-rating__input');
const submittedContent = document.querySelector('.cpt-rating__submitted');
const ratingChoices = document.querySelector(".cpt-rating__rate-container");
const ratingButtons = ratingChoices.children;
const submitBtn = document.querySelector('.cpt-rating__submit');
const ratingResult = document.querySelector('.cpt-rating__result');

let rating;

ratingChoices.addEventListener('click', (e) => {
  for (button of ratingButtons) {
    button.classList.add('bg-darkblue', 'clr-grey');
    button.classList.remove('bg-darkgrey', 'clr-white');
  }
  e.target.classList.add('bg-darkgrey', 'clr-white');
  e.target.classList.remove('bg-darkblue', 'clr-grey');

  rating = e.target.textContent;
});

submitBtn.addEventListener('click', () => {
  if (!rating) {
    container.classList.add('action-needed');
    setTimeout(() => {
      container.classList.remove('action-needed');
    }, 201);
    return;
  }
  ratingResult.textContent = ratingResult.textContent.replace('$rating', rating);
  inputContent.classList.add('hidden');
  submittedContent.classList.remove('hidden');
});