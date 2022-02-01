const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
// for (let el of ingredients) {
//   const newList = document.createElement("li");
//   newList.textContent = el;
//   newList.classList.add("item");
//   list.appendChild(newList);
// }

const newList = ingredients.map((item) => {
  const newEl = document.createElement("li");
  newEl.textContent = `${item}`;
  newEl.classList.add("item");
  return newEl;
});

list.append(...newList);
