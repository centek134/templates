const carouselList = document.querySelector(".carousel__list") as HTMLUListElement;
const arrowPrev = document.querySelector(".carousel__button.prev") as HTMLButtonElement;
const arrowNext = document.querySelector(".carousel__button.next") as HTMLButtonElement;
const controlButtons = document.querySelectorAll(".controls__list .dot") as NodeListOf<HTMLButtonElement>
const animationDuration = 500;
arrowPrev.addEventListener("click",() => slideChange("prev"));
arrowNext.addEventListener("click",() => slideChange("next"));
controlButtons.forEach(button => {
  button.addEventListener("click", () => clickControlButton(button));
});

function slideChange( operation: "prev" | "next" ){
  if(operation === "next"){
    carouselList.appendChild(carouselList.firstElementChild!);
    setControls()
  }
  if(operation === "prev"){
    carouselList.prepend(carouselList.lastElementChild!);
    setControls()
  }
  disableButtonsDuringAnimation()
};

function disableButtonsDuringAnimation() {
  arrowPrev.classList.add("--disabled");
  arrowNext.classList.add("--disabled");

  setTimeout(() => {
    arrowPrev.classList.remove("--disabled");
    arrowNext.classList.remove("--disabled");
  }, animationDuration);
};

function setControls(){
  const actualSlide:number = Number(carouselList.children[1].getAttribute("data-slide-index"));
  controlButtons.forEach(button => button.classList.remove("--active"));
  controlButtons[actualSlide].classList.add("--active")
};

function clickControlButton(button: HTMLButtonElement) {
  const buttonClickedIndex = Number(button.getAttribute("data-slide-index"));
  const currentSlideIndex = Number(carouselList.children[1].getAttribute("data-slide-index"));

  const slideDifference = buttonClickedIndex - currentSlideIndex;

  if (slideDifference === 0) return;

  const direction = slideDifference > 0 ? "next" : "prev";
  const steps = Math.abs(slideDifference);

  for (let i = 0; i < steps; i++) {
    setTimeout(() => slideChange(direction), i * animationDuration);
  }
}