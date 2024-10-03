const blockOne = document.querySelector('.select__block-1');
const blockTwo = document.querySelector('.select__block-2');
const blockThree = document.querySelector('.select__block-3');
const blockFour = document.querySelector('.select__block-4');
const header = document.querySelector('.select__header');
const footer = document.querySelector('.select__footer');
const blockFourImage = document.querySelector('.select__block-4-image');
const currentPage = document.querySelector('.select__page');

const nextStepButton = document.querySelector('.select__button');
const selectSubmitButton = document.querySelector('.select__block-4-body-button');

nextStepButton.addEventListener('click', nextStep);
selectSubmitButton.addEventListener('click', () => {
   blockFourImage.classList.add('submit');
})

function nextStep() {
   
   if(getComputedStyle(blockOne).display === 'block') {
    blockOne.style.display = 'none';
    blockTwo.style.display = 'block';
    currentPage.textContent = '2 из 3'
   } else if(getComputedStyle(blockTwo).display === 'block') {
    blockTwo.style.display = 'none';
    blockThree.style.display = 'block';
    currentPage.textContent = '3 из 3'
   } else if(getComputedStyle(blockThree).display === 'block') {
      blockThree.style.display = 'none';
      blockFour.style.display = 'block';
      header.style.display = 'none';
      footer.style.display = 'none';
   }
}
