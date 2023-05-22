var menuTrigger = document.querySelector(".menu-trigger");
var menu = document.querySelector(".nav-js");

console.log(menu, menuTrigger);

menuTrigger.addEventListener("click", () => {
  menu.classList.toggle("burger-open");
});

menu.addEventListener("click", () => {
  menu.classList.toggle("burger-open");
});
