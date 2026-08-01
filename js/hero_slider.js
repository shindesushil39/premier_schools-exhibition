const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function moveSlider(){

    index++;

    if(index>=slides.length){
        index=0;
    }

    track.style.transform=`translateX(-${index*100}%)`;

}

function prevSlide(){

    index--;

    if(index<0){
        index=slides.length-1;
    }

    track.style.transform=`translateX(-${index*100}%)`;

}

next.addEventListener("click",moveSlider);
prev.addEventListener("click",prevSlide);

let auto=setInterval(moveSlider,4000);

const slider=document.querySelector(".dual-slider");

slider.addEventListener("mouseenter",()=>{

clearInterval(auto);

});

slider.addEventListener("mouseleave",()=>{

auto=setInterval(moveSlider,4000);

});

let startX=0;

slider.addEventListener("touchstart",e=>{

startX=e.touches[0].clientX;

});

slider.addEventListener("touchend",e=>{

let endX=e.changedTouches[0].clientX;

if(startX-endX>50){

moveSlider();

}

if(endX-startX>50){

prevSlide();

}

});

slider.addEventListener("keydown",e=>{

if(e.key==="ArrowRight"){

moveSlider();

}

if(e.key==="ArrowLeft"){

prevSlide();

}

});

slider.setAttribute("tabindex","0");