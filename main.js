const hiddenMobileMenu = document.querySelector("#navbarNavAltMarkup");
const burgerIcon = document.querySelector(".navbar-toggler-icon");
const closeIcon = document.querySelector(".navbar-toggler-icon-close");
const myNavLogo = document.querySelector(".myNavLogo");
const hiddenMenuSocials = document.querySelector(".mobile-overlay-socials");
const overlayNavbar = document.querySelector(".overlay-navbar");

burgerIcon.addEventListener("click", () => {
  hiddenMenuSocials.classList.add("active");
  burgerIcon.style.display = "none";
  overlayNavbar.classList.add("active");
  hiddenMobileMenu.classList.add("mobile-menu");
});

closeIcon.addEventListener("click", () => {
  hiddenMenuSocials.classList.remove("active");
  hiddenMobileMenu.classList.remove("show");
  hiddenMobileMenu.classList.remove("mobile-menu");
  burgerIcon.style.display = "block";
  overlayNavbar.classList.remove("active");
});
