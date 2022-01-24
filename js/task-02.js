const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
for (let el of ingredients) {
  const newList = document.createElement("li");
  newList.textContent = el;
  newList.classList.add("item");
  list.appendChild(newList);
}

console.log(list);
