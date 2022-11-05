const incrementBtn = document.querySelector("[data-action='increment']");
const decrementBtn =  document.querySelector("[data-action='decrement']");
const value =  document.querySelector('#value');

let counterValue = 0;
const increment = () => {
  value.textContent = counterValue +=1;
};

const decrement = () => {
  value.textContent = counterValue -=1;
};
incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);

