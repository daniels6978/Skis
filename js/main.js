const mobileNav = document.querySelector(".nav__mobile");
const navBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__mobile--item");
const nav = document.querySelector(".nav");
const videoHeader = document.querySelector(".header__video");

const handleNav = () => {
  mobileNav.classList.toggle("nav__mobile--active");

  allNavItems.forEach((item) => {
    item.addEventListener("click", () =>
      mobileNav.classList.remove("nav__mobile--active")
    );
  });
};

const handleObserver = () => {
  const currentSection = window.scrollY;

  if (currentSection >= 60) {
    nav.classList.add("nav--active");
  } else if (currentSection < 60) nav.classList.remove("nav--active");
};

navBtn.addEventListener("click", handleNav);
window, addEventListener("scroll", handleObserver);
window.onload = () => {
  videoHeader.play();
};
