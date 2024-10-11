const header = document.querySelector("header");
const elements_experience = [...document.getElementsByClassName("hidden-left")];
const elements_experience2 = document.getElementsByClassName("hidden-right");

const allElements_experience = elements_experience.concat(
  Array.from(elements_experience2)
);

/* ===== Loader ===== */
window.addEventListener("load", () => {
  const contenedorLoader = document.querySelector(".container--loader");
  contenedorLoader.style.opacity = 0;
  contenedorLoader.style.visibility = "hidden";
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scroling", window.scrollY > 0);
});

const observer = new IntersectionObserver(
  (entries) => {
    const width = window.innerWidth;

    entries.forEach((entry) => {
      if (entry.isIntersecting && width <= 1000) {
        entry.target.classList.add("hidden-right");
        entry.target.classList.add("show_Element");
      } else if (entry.isIntersecting && width >= 1000) {
        entry.target.classList.remove("hidden-right","hidden-left");
      } else {
        entry.target.classList.remove("show_Element");
      }
    });
  },
  { threshold: 0.5 }
);


allElements_experience.forEach((element) => observer.observe(element));