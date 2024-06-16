const cursor = document.querySelector(".cursor");
const holes = [...document.querySelectorAll(".hole")];
const scoreEl = document.querySelector(".score span");
let score = 0;

function run() {
  const i = Math.floor(Math.random() * holes.length);
  const hole = holes[i];
  let timer = null;

  const img = document.createElement("img");
  img.classList.add("mole");
  img.src =
    "https://github.com/0shuvo0/whack-a-mole/blob/main/assets/mole.png?raw=true";

  img.addEventListener("click", () => {
    score += 10;
    scoreEl.textContent = score;
    img.src =
      "https://github.com/0shuvo0/whack-a-mole/blob/main/assets/mole-whacked.png?raw=true";
    clearTimeout(timer);
    setTimeout(() => {
      hole.removeChild(img);
      run();
    }, 500);
  });

  hole.appendChild(img);

  timer = setTimeout(() => {
    hole.removeChild(img);
    run();
  }, 1500);
}
run();

window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});
window.addEventListener("mousedown", () => {
  cursor.classList.add("active");
});
window.addEventListener("mouseup", () => {
  cursor.classList.remove("active");
});