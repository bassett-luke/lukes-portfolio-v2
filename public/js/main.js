// NAVIGATION HAMBURGER ANIMATION
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-right");
hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");
  menu.classList.toggle("is-active");
});
document.querySelectorAll(".menu").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("is-active");
    menu.classList.remove("is-active");
  })
);

var btnContainer = document.getElementById("nav-list");
var navBtns = btnContainer.getElementsByClassName("nav-link");
for (var i = 0; i < navBtns.length; i++) {
  navBtns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("is-active");
    current[0].className = current[0].className.replace(" is-active", "");
    this.className += " is-active";
    hamburger.classList.remove("is-active");
  });
}
// OLD SOLUTION TO NAV LINK ACTIVE STATE LOL
// const home = document.getElementById("home");
// const about = document.getElementById("about");
// const work = document.getElementById("work");
// const contact = document.getElementById("contact");

// document.getElementById("home").addEventListener("click", () => {
//   home.classList.add("is-active");
//   about.classList.remove("is-active");
//   work.classList.remove("is-active");
//   blog.classList.remove("is-active");
//   contact.classList.remove("is-active");
// });
// document.getElementById("about").addEventListener("click", () => {
//   home.classList.remove("is-active");
//   about.classList.add("is-active");
//   work.classList.remove("is-active");
//   blog.classList.remove("is-active");
//   contact.classList.remove("is-active");
// });
// document.getElementById("work").addEventListener("click", () => {
//   home.classList.remove("is-active");
//   about.classList.remove("is-active");
//   work.classList.add("is-active");
//   blog.classList.remove("is-active");
//   contact.classList.remove("is-active");
// });
// document.getElementById("blog").addEventListener("click", () => {
//   home.classList.remove("is-active");
//   about.classList.remove("is-active");
//   work.classList.remove("is-active");
//   blog.classList.add("is-active");
//   contact.classList.remove("is-active");
// });
// document.getElementById("contact").addEventListener("click", () => {
//   home.classList.remove("is-active");
//   about.classList.remove("is-active");
//   work.classList.remove("is-active");
//   blog.classList.remove("is-active");
//   contact.classList.add("is-active");
// });
