function main() {
  const headerContainerEl = document.querySelector(".header-cont");
  headerComp(headerContainerEl);
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
  const footerContainerEl = document.querySelector(".footer-cont");
  footerComp(footerContainerEl);
}
main();
