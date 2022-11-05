function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('[type="number"]'),
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),

};

 function createBoxes (amount) {
  const basicSize = 30;

for (let i = 0; i <= amount; i += 1) {
  const boxList = document.createElement("div");
  const size = basicSize + i * 10;

  boxList.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
  refs.boxes.appendChild(boxList);
}
 };

 function onInputSum (e) {
  let number = 0;
  number = Number(e.currentTarget.value);
  createBoxes(number);
}


 function destroyBoxes(e) {
  refs.boxes.textContent = '';
}

refs.destroy.addEventListener('click', destroyBoxes);
refs.create.addEventListener('click', createBoxes);
refs.input.addEventListener('input', onInputSum);
