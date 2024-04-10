const sidebar = document.querySelector(".sidebar-container");
const closeSideBar = document.querySelector(".close-btn");
const openSideBar = document.querySelector(".open-btn");
const blankSpaceContainer = document.querySelector(".blank");

// document.addEventListener("DOMContentLoaded", function () {
  let mainImg = document.querySelector(".main-img");

  if (window.innerWidth <= 768) {
    mainImg.src = "./assets/images/image-web-3-mobile.jpg";
  } else if (window.innerWidth >= 1024) {
    mainImg.src = "./assets/images/image-web-3-desktop.jpg";
  }
// });

closeSideBar.addEventListener("click", (e) => {
  e.preventDefault();
  sidebar.classList.add("hide-side-bar");
  blankSpaceContainer.classList.remove("blank-layer");
});
openSideBar.addEventListener("click", (e) => {
  e.preventDefault();
  sidebar.classList.remove("hide-side-bar");
  blankSpaceContainer.classList.add("blank-layer");
});
