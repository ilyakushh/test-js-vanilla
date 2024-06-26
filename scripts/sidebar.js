export function openSidebar() {
  document.querySelector(".sidenav").classList.add("active");
  document.querySelector(".overlay").classList.add("active");
}

export function closeSidebar() {
  document.querySelector(".sidenav").classList.remove("active");
  document.querySelector(".overlay").classList.remove("active");
}

document
  .querySelector(".header__menu_toggle")
  .addEventListener("click", openSidebar);

document
  .querySelector(".sidenav__close-icon")
  .addEventListener("click", closeSidebar);
