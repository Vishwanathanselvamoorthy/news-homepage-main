const sidebar = document.querySelector(".sidebar-container");
const closeSideBar = document.querySelector(".close-btn");
const openSideBar = document.querySelector(".open-btn");
const blankSpaceContainer = document.querySelector(".blank");
const navbarContent = document.querySelector(".navbar-content");

// if (window.innerWidth >= 1024) {
//   sidebar.classList.add("hidden-class");
//   openSideBar.classList.add("hidden-class");
//   navbarContent.classList.remove("hidden-class");
// }

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
