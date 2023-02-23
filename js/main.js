const mobileNav = document.querySelector(".nav__mobile");
const navBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__mobile--item");
const nav = document.querySelector(".nav");

const handleNav = () => {
  mobileNav.classList.toggle("nav__mobile--active");
  console.log("object");
};

const handleObserver = () => {
  const currentSection = window.scrollY;

  if (currentSection >= 60) {
    nav.classList.add("nav--active");
  } else if (currentSection < 60) nav.classList.remove("nav--active");
};

navBtn.addEventListener("click", handleNav);
window, addEventListener("scroll", handleObserver);
