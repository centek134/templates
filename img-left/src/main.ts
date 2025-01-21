const list = document.querySelectorAll(".item__text-content") as NodeListOf<HTMLDivElement>;
const imgList = document.querySelectorAll(".item__image") as NodeListOf<HTMLDivElement>;
const controlButtons = document.querySelectorAll(".control__btn") as NodeListOf<HTMLDivElement>;
const slideList = document.querySelectorAll(".wrapper .item") as NodeListOf<HTMLDivElement>;

controlButtons.forEach((btn,i) => btn.addEventListener("click", () => {
    btn.classList.add("--clicked");
    slideList.forEach(slide => {
        for(let i = 0; i < slideList.length; i++){
            btn.classList.remove("--clicked");
            slide.classList.remove(`--slide${i}`);
        };
        slide.classList.add(`--slide${i}`);
    });
}));
list.forEach((el,i) => el.addEventListener("mouseover", () => {
    list.forEach(el => el.classList.remove("--active"));
    imgList.forEach(el => el.classList.remove("--visible"));
    imgList[i].classList.add("--visible");
    el.classList.add("--active");
}));