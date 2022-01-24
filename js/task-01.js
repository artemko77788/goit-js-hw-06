const categories = document.querySelector("#categories");

const categoriesCount = categories.children.length;
console.log("Number of categories:", categoriesCount);

const items = document.querySelectorAll(".item");

for (let item of items) {
  let nameCategory = item.firstElementChild.textContent;
  console.log(`Category: ${nameCategory} `);
  let elements = item.lastElementChild.children.length;
  console.log(`Elements: ${elements}`);
}
