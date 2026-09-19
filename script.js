const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => navMenu.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

/* Smoothly prevent empty placeholder buttons from jumping to the top. */
document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener("click", (event) => event.preventDefault());
});
