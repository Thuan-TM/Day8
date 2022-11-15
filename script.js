const btnItem = document.querySelectorAll(".btn_item");
const btnAll = document.querySelector(".Allfood");
const btnSalad = document.querySelector(".Salad");
const btnMeat = document.querySelector(".Meat");
const btnDrink = document.querySelector(".Drinks");
const btnDessert = document.querySelector(".Dessert");
const listImg = document.querySelectorAll(".img");
console.log(listImg);

function handleBtn(btn) {
  btn.classList.forEach((e) => {
    btnItem.forEach((e) => {
      e.classList.remove("active");
    });

    btn.classList.add("active");
  });
}

function find(name) {
  listImg.forEach((e) => {
    e.style.display = "none";
    if (e.firstElementChild.name == name) {
      e.style.display = "block";
    }
  });
}

btnAll.addEventListener("click", function () {
  handleBtn(btnAll);
  listImg.forEach((e) => {
    e.style.display = "block";
  });
});

btnMeat.addEventListener("click", function () {
  handleBtn(btnMeat);
  find(btnMeat.name);
});

btnSalad.addEventListener("click", function () {
  handleBtn(btnSalad);
  find(btnSalad.name);
});

btnDessert.addEventListener("click", function () {
  handleBtn(btnDessert);
  find(btnDessert.name);
});

btnDrink.addEventListener("click", function () {
  handleBtn(btnDrink);
  find(btnDrink.name);
});
