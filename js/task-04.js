const counter = {
  counterValu: 0,
  increment() {
    this.counterValu += 1;
  },
  decrement() {
    this.counterValu -= 1;
  },
};

const actions = document.querySelectorAll("#counter button");
const valueEl = document.querySelector("#value");
const counterValu = 0;

actions[1].addEventListener("click", () => {
  counter.increment();
  valueEl.textContent = counter.counterValu;
});
actions[0].addEventListener("click", () => {
  counter.decrement();
  valueEl.textContent = counter.counterValu;
});
