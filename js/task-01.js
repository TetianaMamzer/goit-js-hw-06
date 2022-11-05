const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEl.length}`);
const itemTitle = document.querySelectorAll('#categories h2');
const itemList = document.querySelectorAll('.item ul');
itemEl.forEach(el => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
console.log(`Elements: ${el.secondElementChild.children.length}`);
});
