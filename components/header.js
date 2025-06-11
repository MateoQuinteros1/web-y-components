function headerComp(container) {
  const newHeaderEl = document.createElement("header");
  newHeaderEl.classList.add("header");
  newHeaderEl.innerHTML = `
      <img class="logo" src="./images/code-svgrepo-com.svg" />
      <img class="burguer-menu" src="./images/burguer-svg.svg" />
      <div class="links-menu">
        <button class="close-links-menu">x</button>
        <div class="links-container">
          <a id="link" href="./porfolio.html">Portfolio</a>
          <a id="link" href="./servicios.html">Servicios</a>
          <a id="link" href="./contacto.html">Contacto</a>
        </div>
      </div>
      <div class="header-links-cont">
        <a id="header-link" href="./portfolio.html">Portfolio</a>
        <a id="header-link" href="./servicios.html">Servicios</a>
        <a id="header-link" href="./contacto.html">Contacto</a>
      </div>
  `;
  const getBurguerMenuEl = newHeaderEl.querySelector(".burguer-menu");
  const getLinksMenuEl = newHeaderEl.querySelector(".links-menu");
  const getCloseLinksMenuEl = newHeaderEl.querySelector(".close-links-menu");
  getBurguerMenuEl.addEventListener("click", () => {
    getLinksMenuEl.style.display = "inherit";
  });

  getCloseLinksMenuEl.addEventListener("click", () => {
    getLinksMenuEl.style.display = "none";
  });

  container.appendChild(newHeaderEl);
}
