function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('[type="number"]'),
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),

};
let array = [];
const basicSize = 30;
 function createBoxes (amount) {
array = [];
if (amount === 0) {
  return;
} else {
  for (let i = 0; i < amount; i += 1) {
    const boxList = document.createElement("div");
    const size = basicSize + i * 10;
  
    boxList.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    array.push(boxList);
  }
};

 };

 function create() {
createBoxes(Number(refs.input.value));
return refs.boxes.append(...array);
 };

 function destroyBoxes(e) {
  refs.boxes.textContent = '';
}

refs.destroy.addEventListener('click', destroyBoxes);
refs.create.addEventListener('click', create);

