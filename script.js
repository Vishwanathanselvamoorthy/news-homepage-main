const sidebar = document.querySelector(".sidebar-container");
const closeSideBar = document.querySelector(".close-btn");
const openSideBar = document.querySelector(".open-btn");

closeSideBar.addEventListener("click", (e) => {
  e.preventDefault();
  sidebar.classList.add("hide-side-bar");
});
openSideBar.addEventListener("click", (e) => {
  e.preventDefault();
  sidebar.classList.remove("hide-side-bar");
});
