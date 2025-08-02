const Home = document.querySelector(".Home");
const worm = document.querySelector(".worm");
const level = 10;
const numberOfFoods = 5;
const foodSize = 60;
const margin = 50;

let areaWidth = window.innerWidth;
let areaHeight = window.innerHeight;
let fullWidth = areaWidth * level;

Home.style.width = fullWidth + "px";
Home.style.height = areaHeight + "px";

// create random number for every food

for (let page = 0; page < level; page++) {
  for (let i = 0; i < numberOfFoods; i++) {
    const food = document.createElement("div");
    food.classList.add("food");

    const x =
      Math.floor(Math.random() * (areaWidth - foodSize - 2 * margin)) + page * areaWidth +
      margin;
    const y =
      Math.floor(Math.random() * (areaHeight - foodSize - 2 * margin)) + margin;

    food.style.left = x + "px";
    food.style.top = y + "px";

    Home.appendChild(food);
  }
}
const foods = document.querySelectorAll(".food");
// create random number for every food
// نسبت به صفحه اصلی

foods.forEach((food, i) => {
  const left = food.offsetLeft;
  const top = food.offsetTop;

});
// نسبت به صفحه اصلی
// key
let wormX = 100;
let wormY = 100;
const speed = 20;
const wormWidth = worm.offsetWidth;
const wormHeight = worm.offsetHeight;


document.addEventListener("keydown", (e) => {
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
    // e.preventDefault();
  }

  if (e.key === "ArrowRight") {
    worm.style.transform = "scaleX(1)"; // حالت عادی
    wormX += speed;
  } else if (e.key === "ArrowLeft" && wormX > 0) {
    wormX -= speed;
    worm.style.transform = "scaleX(-1)"; // چرخش افقی عکس
  } else if (e.key === "ArrowUp" && wormY - speed >= 50) {
    wormY -= speed;
  } else if (e.key === "ArrowDown" && wormY + wormHeight + speed <= Home.offsetHeight - 50) {
    wormY += speed;
  }

  worm.style.left = wormX + "px";
  worm.style.top = wormY + "px";

  window.scrollTo({
  left: wormX - window.innerWidth / 2 + worm.offsetWidth / 2,
  behavior: "smooth"
});

  checkCollision();
});
// key
 
// 


function checkCollision(){
  foods.forEach((food) => {
    const foodX = food.offsetLeft;
    const foodY = food.offsetTop;

    const isCloseX = Math.abs(wormX - foodX) < foodSize;
    const isCloseY = Math.abs(wormY - foodY) < foodSize;

    if (isCloseX && isCloseY) {
      food.style.opacity = "0";
      // یا food.remove();
    }
  });
}
