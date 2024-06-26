import { closeSidebar } from "./sidebar";

const experienceLink = document.querySelector("#experience a");
const contactLink = document.querySelector("#contact a");

const experienceSection = document.querySelector(".experience");
const contactSection = document.querySelector(".contact");

experienceLink.addEventListener("click", function (event) {
  event.preventDefault();

  experienceSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  closeSidebar();
});

contactLink.addEventListener("click", function (event) {
  event.preventDefault();
  contactSection.scrollIntoView({
    behavior: "smooth",
    block: "end",
  });
  closeSidebar();
});
