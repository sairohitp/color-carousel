const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[randInt()];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function randInt() {
  return Math.floor(Math.random() * hex.length);
}

const rstbtn = document.getElementById("rst");
rstbtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "#E6E6FA";
  color.textContent = "#E6E6FA";
});
