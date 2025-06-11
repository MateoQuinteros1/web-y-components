function main() {
  const headerContainerEl = document.querySelector(".header-cont");
  headerComp(headerContainerEl);
  const worksContainerEl = document.querySelector(".works-container");
  fetch(
    "https://cdn.contentful.com/spaces/tt24g3g0ioox/environments/master/entries?access_token=1oIfLa3VCOQBEgosQEO4tAW25qZWuULThg5xUG2pN1s"
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      cardComp(
        worksContainerEl,
        json.includes.Asset[0].fields.file.url,
        json.items[3].fields.titulo,
        json.items[3].fields.descripcion
      );
      cardComp(
        worksContainerEl,
        json.includes.Asset[4].fields.file.url,
        json.items[1].fields.titulo,
        json.items[1].fields.descripcion
      );
      cardComp(
        worksContainerEl,
        json.includes.Asset[5].fields.file.url,
        json.items[2].fields.titulo,
        json.items[2].fields.descripcion
      );
    });
  const footerContainerEl = document.querySelector(".footer-cont");
  footerComp(footerContainerEl);
}

main();
