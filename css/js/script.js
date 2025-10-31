// === script.js ===
document.addEventListener("DOMContentLoaded", () => {

  // --- 1️⃣ Efecto en las tarjetas ---
  const cards = document.querySelectorAll(".tarjeta");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      alert(Has seleccionado: ${cardquerySelector("h3")textContent});
    });
  });

  // --- 2️⃣ Enviar formulario de contacto ---
  const form = document.querySelector(".formulario");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Evita recargar
      const nombre = form.nombre.value;
      const correo = form.correo.value;

      alert(Gracias, ${nombre}. Tu mensaje fue enviado correctamente.\nTe contactaremos a ${correo}.);
      form.reset();
    });
  }

  // --- 3️⃣ Año automático en el pie de página ---
  const footer = document.querySelector("footer p");
  if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = © ${year} - Sitio educativo sobre autos de carrera;
  }

});