const header = document.querySelector("header");

/* ===== Loader ===== */
window.addEventListener("load", () => {
  const contenedorLoader = document.querySelector(".container--loader");
  contenedorLoader.style.opacity = 0;
  contenedorLoader.style.visibility = "hidden";
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scroling", window.scrollY > 0);
});
