const hiddenMobileMenu = document.querySelector("#navbarNavAltMarkup");
const burgerIcon = document.querySelector(".navbar-toggler-icon");
const closeIcon = document.querySelector(".navbar-toggler-icon-close");
const myNavLogo = document.querySelector(".myNavLogo");

console.log(hiddenMobileMenu.classList.contains("show"));

let active = false;

// if (hiddenMobileMenu.classList.contains("show")) {
//   closeIcon.classList.add("active");
//   myNavLogo.classList.add("active");
// }

burgerIcon.addEventListener("click", () => {
  closeIcon.classList.add("active");
  myNavLogo.classList.add("active");
  burgerIcon.style.display = "none";
});

closeIcon.addEventListener("click", () => {
  closeIcon.classList.remove("active");
  myNavLogo.classList.remove("active");
  hiddenMobileMenu.classList.remove("show");
  burgerIcon.style.display = "block";
});
