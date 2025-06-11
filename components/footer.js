function footerComp(container) {
  const newFooterEl = document.createElement("footer");
  newFooterEl.classList.add("footer");
  newFooterEl.innerHTML = `
        <img id="footer-logo" class="logo" src="./images/code-svgrepo-com.svg" />
      <div class="footer-links-cont">
        <div class="links-group">
          <img id="link-img" src="./images/home-svg.svg" />
          <a href="./index.html" class="link-text">Home</a>
        </div>
        <div class="links-group">
          <img id="link-img" src="./images/user-svg.svg" />
          <a href="./servicios.html" class="link-text">Servicios</a>
        </div>
        <div class="links-group">
          <img id="link-img" src="./images/phone-svg.svg" />
          <a href="./contacto.html" class="link-text">Contacto</a>
        </div>
      </div>
      <div class="social-links-cont">
        <a href="https://linkedin.com" class="social-link">
          <img src="./images/svg-linkedin.svg" />
        </a>
        <a href="https://github.com" class="social-link">
          <img src="./images/svg-github.svg" />
        </a>
        <a href="https://x.com" class="social-link">
          <img src="./images/twitter-svg.svg" />
        </a>
      </div>
      <p class="rights-reserved">©2022 - https://apx.school</p>
  `;
  container.appendChild(newFooterEl);
}
