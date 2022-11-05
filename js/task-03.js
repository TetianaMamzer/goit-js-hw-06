const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galeryContainerEl = document.querySelector('.gallery');
const makeGalery = images
  .map((img) => `<li><img src="${img.url}" alt="${img.alt}"></li>`)
  .join("");
galeryContainerEl.insertAdjacentHTML("afterbegin", makeGalery);


// const gallaryCreate = options => {
//   return options.map(image => {
//     const gallaryImg = document.createElement('img');
//     gallaryImg.src = image.url;
//     gallaryImg.alt = image.alt;
//     return gallaryImg;
//   });
// };
// console.log(gallaryCreate);

// const el = gallaryCreate(images);
// console.log(el);
// const galleryMake = make => {
//   return make.map(list => {
//     const galleryList = document.createElement('li');
//     galleryList.append(list);
//     return galleryList;
//   });
// };
// const elements = galleryMake(el);
// console.log(elements);

// const gallaryGroup = document.querySelector('.gallery');
// gallaryGroup.append(...elements);




