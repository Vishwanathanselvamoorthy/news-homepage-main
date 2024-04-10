const sidebar = document.querySelector(".sidebar-container");
const closeSideBar = document.querySelector(".close-btn");
const openSideBar = document.querySelector(".open-btn");
const blankSpaceContainer = document.querySelector(".blank");
const navbarContent = document.querySelector(".navbar-content");



closeSideBar.addEventListener("click", (e) => {
  e.preventDefault();
  sidebar.classList.add("hidden-class");
  blankSpaceContainer.classList.add("hidden-class");
});
openSideBar.addEventListener("click", (e) => {
  e.preventDefault();
  sidebar.classList.remove("hidden-class");
  blankSpaceContainer.classList.remove("hidden-class");
});
