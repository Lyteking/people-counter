let countel = document.getElementById("count-el");
let count = 0;
let total = 0;

function increment() {
  count += 1;
  countel.innerText = count;
}

function save() {
  let paragraphEl = document.getElementById("save");
  paragraphEl.textContent += count + ", "
  console.log(count);
  total = total + count
  countel.innerText = 0;
  count = 0;
}
function totaler() {
  let totalel = document.getElementById("totala");
  totalel.textContent = total
}
function reset() {
  total = 0
  let totalel = document.getElementById("totala")
  let paragraphEl = document.getElementById("save")
  totalel.textContent = 0
  paragraphEl.textContent = "Previous entries: "
}