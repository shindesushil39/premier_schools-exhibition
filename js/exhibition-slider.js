const track = document.querySelector(".highlights__track");
const cards = document.querySelectorAll(".highlight-card");

const next = document.querySelector(".highlights__button--next");
const prev = document.querySelector(".highlights__button--prev");

let index = 0;

function cardsPerView(){

if(window.innerWidth<600) return 1;

if(window.innerWidth<900) return 2;

if(window.innerWidth<1200) return 3;

return 4;

}

function updateSlider(){

const cardWidth = cards[0].offsetWidth + 24;

track.style.transform =
`translateX(-${index*cardWidth}px)`;

}


    next.addEventListener("click", () => {

const max =
cards.length-cardsPerView();

index=Math.min(index+1,max);

updateSlider();

});

prev.addEventListener("click",()=>{

index=Math.max(index-1,0);

updateSlider();

});

window.addEventListener("resize",updateSlider);

updateSlider();








let autoplay = setInterval(() => {

const max = cards.length - cardsPerView();

index++;

if(index > max){

index = 0;

}

updateSlider();

},2000);



const slider = document.querySelector(".highlights__slider");

slider.addEventListener("mouseenter",()=>{

clearInterval(autoplay);

});

slider.addEventListener("mouseleave",()=>{

autoplay = setInterval(() => {

const max = cards.length - cardsPerView();

index++;

if(index > max){

index = 0;

}

updateSlider();

},2000);

});
