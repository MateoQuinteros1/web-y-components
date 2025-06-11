function main() {
  const headerContainerEl = document.querySelector(".header-cont");
  headerComp(headerContainerEl);

  //Traer data de la presentación desde contentful
  const aboutMeText = document.querySelector(".aboutme__text");
  const aboutMeImg = document.querySelector(".aboutme__img");
  fetch(
    "https://cdn.contentful.com/spaces/tt24g3g0ioox/environments/master/entries?access_token=1oIfLa3VCOQBEgosQEO4tAW25qZWuULThg5xUG2pN1s"
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      const textoDeReemplazo = json.items[0].fields.descripcion;
      aboutMeText.textContent = textoDeReemplazo;
      aboutMeImg.src = json.includes.Asset[2].fields.file.url;
    });

  //Traer data de servicios desde contentful
  const cardsContainer = document.querySelector(".services-container");
  fetch(
    "https://cdn.contentful.com/spaces/tt24g3g0ioox/environments/master/entries?access_token=1oIfLa3VCOQBEgosQEO4tAW25qZWuULThg5xUG2pN1s"
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      cardComp(
        cardsContainer,
        res.includes.Asset[6].fields.file.url,
        res.items[6].fields.titulo,
        res.items[6].fields.descripcion
      );
      cardComp(
        cardsContainer,
        res.includes.Asset[3].fields.file.url,
        res.items[5].fields.titulo,
        res.items[5].fields.descripcion
      );
      cardComp(
        cardsContainer,
        res.includes.Asset[1].fields.file.url,
        res.items[4].fields.titulo,
        res.items[4].fields.descripcion
      );
    });
  const contactMeContainerEl = document.querySelector(".contactme-cont");
  contactMeComp(contactMeContainerEl);
  const footerContainerEl = document.querySelector(".footer-cont");
  footerComp(footerContainerEl);
}

main();

/* cardComp(
  cardsContainer,
  res.includes.Asset[6].fields.file.url,
  res.items[6].fields.titulo,
  res.items[6].fields.descripcion
); */
