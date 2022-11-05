const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEl.length}`);
const itemTitle = document.querySelectorAll('#categories h2');
const itemList = document.querySelectorAll('.item ul');

console.log(`Category: ${itemTitle[0].textContent}`);
console.log(`Elements: ${itemList[0].children.length}`);

console.log(`Category: ${itemTitle[1].textContent}`);
console.log(`Elements: ${itemList[1].children.length}`);

console.log(`Category: ${itemTitle[2].textContent}`);
console.log(`Elements: ${itemList[2].children.length}`);