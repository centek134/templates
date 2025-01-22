// carousel controls
const prevButton = document.querySelector(".arrow.--prev") as HTMLButtonElement;
const nextButton = document.querySelector(".arrow.--next") as HTMLButtonElement;

const carouselList = document.querySelector(".item-list") as HTMLUListElement;

prevButton.addEventListener("click", () => slideChange("prev"));
nextButton.addEventListener("click", () => slideChange("next"));

function slideChange(operation: "prev" | "next"){
  if( operation === "prev" ){
    carouselList.prepend(carouselList.lastChild!)
  };
  if( operation === "next" ){
    carouselList.appendChild(carouselList.firstChild!)
  };
}