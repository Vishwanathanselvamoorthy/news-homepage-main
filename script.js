const sidebar = document.querySelector(".sidebar-container");
const closeSideBar = document.querySelector(".close-btn");
const openSideBar = document.querySelector(".open-btn");
const blankSpaceContainer = document.querySelector(".blank");

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
