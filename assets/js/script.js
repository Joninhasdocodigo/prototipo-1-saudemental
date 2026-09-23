const linksInternos = document.querySelectorAll('a[href^="#"]');

linksInternos.forEach((link) => {
  link.addEventListener("click", (evento) => {
    const idDestino = link.getAttribute("href");
    const secaoDestino = document.querySelector(idDestino);

    if (secaoDestino === null) {
      evento.preventDefault();
      alert("Esse recurso ainda está em desenvolvimento.");
      return;
    }

    evento.preventDefault();

    secaoDestino.scrollIntoView({
      behavior: "smooth"
    });
  });
});