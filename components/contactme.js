function contactMeComp(container) {
  const newContactMeSectionEl = document.createElement("section");
  newContactMeSectionEl.classList.add("contactme");
  newContactMeSectionEl.innerHTML = `
        <h1 class="contactme__title">Escribime</h1>
      <form class="contactme__form">
        <div class="name-email-cont">
          <div class="form__group">
            <label class="form__label" for="nombre">Nombre</label>
            <input
              id="nombre"
              class="form__input"
              placeholder="Tu nombre"
              type="text"
              name="nombre"
            />
          </div>
          <div class="form__group">
            <label class="form__label" for="email">Email</label>
            <input
              placeholder="tu@mail.com"
              id="email"
              class="form__input"
              type="text"
              name="email"
            />
          </div>
        </div>
        <div class="form__group">
          <label for="mensaje" class="form__label">Mensaje</label>
          <textarea class="form__input" name="mensaje" id="mensaje"></textarea>
        </div>
        <button class="form__button">
          Enviar <img class="form__button-img" src="./images/send-svg.svg" />
        </button>
      </form>
  `;
  const getFormEl = newContactMeSectionEl.querySelector(".contactme__form");
  getFormEl.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const formData = new FormData(getFormEl);
    const objData = Object.fromEntries(formData.entries());
    const newObj = {
      to: objData.email,
      message: objData.mensaje,
    };
    fetch("https://apx.school/api/utils/email-to-student", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newObj),
    }).then(() => {
      console.log("Form enviado correctamente");
    });
  });
  container.appendChild(newContactMeSectionEl);
}
