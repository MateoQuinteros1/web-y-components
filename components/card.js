function cardComp(container, imgURl, title, text) {
  const newCardEl = document.createElement("div");
  newCardEl.classList.add("card");
  newCardEl.innerHTML = `
        <img class="card__img" src="" />
      <h1 class="card__title"></h1>
      <p class="card__text"></p>
  `;
  const cardTitle = newCardEl.querySelector(".card__title");
  const cardText = newCardEl.querySelector(".card__text");
  const cardImg = newCardEl.querySelector(".card__img");
  cardImg.src = imgURl;
  cardTitle.textContent = title;
  cardText.textContent = text;
  container.appendChild(newCardEl);
}
