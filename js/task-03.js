const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery");

// images.map((element) => {
//   const imgEl = document.createElement("img");
//   imgEl.alt = element.alt;
//   imgEl.src = element.url;
//   imgEl.classList.add();
//   list.append(imgEl);
// });

const element = images
  .map(
    (image) =>
      `<img class="el__image" src=${image.url} alt="${image.alt}" width = 240>`
  )
  .join("");

list.insertAdjacentHTML("beforeend", element);
console.log(list);
