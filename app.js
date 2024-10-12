const header = document.querySelector("header");
const section_elements = document.querySelectorAll("section");
const links = document.querySelectorAll(".link");

/* ===== Loader ===== */
window.addEventListener("load", () => {
  const contenedorLoader = document.querySelector(".container--loader");
  contenedorLoader.style.opacity = 0;
  contenedorLoader.style.visibility = "hidden";

  setTimeout(() => {
    links[0].classList.add("link-active"); // Agregar la clase al enlace Home
  }, 500);
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scroling", window.scrollY > 0);
});

const observer = new IntersectionObserver(
  (entryes) => {
    entryes.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((link) => {
          const href = link.getAttribute("href").split("#")[1];
          const id = entry.target.id;
          if (href == id) {
            link.classList.add("link-active");
          } else {
            link.classList.remove("link-active");
          }
        });
      }
    });
  },
  { threshold: 0.8 }
);

section_elements.forEach((element) => observer.observe(element));