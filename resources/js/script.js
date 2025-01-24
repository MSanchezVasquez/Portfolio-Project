// Selecciona los elementos necesarios
const backToTopButton = document.createElement("button");
backToTopButton.id = "back-to-top";
backToTopButton.innerText = "↑";

// Agregar el botón al cuerpo
backToTopButton.style.display = "none";
backToTopButton.style.position = "fixed";
backToTopButton.style.bottom = "20px";
backToTopButton.style.right = "20px";
backToTopButton.style.padding = "10px 15px";
backToTopButton.style.fontSize = "20px";
backToTopButton.style.backgroundColor = "#286ef2";
backToTopButton.style.color = "#fff";
backToTopButton.style.border = "none";
backToTopButton.style.borderRadius = "50%";
backToTopButton.style.cursor = "pointer";
backToTopButton.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
backToTopButton.style.transition = "opacity 0.3s ease";

document.body.appendChild(backToTopButton);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
    backToTopButton.style.opacity = "1";
  } else {
    backToTopButton.style.opacity = "0";
  }
});

backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
