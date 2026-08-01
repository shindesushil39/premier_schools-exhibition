const schoolSlider = document.querySelector("#schoolSlider");
const schoolCards = document.querySelectorAll(".school-card");
const schoolDots = document.querySelectorAll(".school-category__dot");

if (schoolSlider) {

    function updatePagination() {

        const cardWidth = schoolCards[0].offsetWidth + 16;

        const currentIndex = Math.round(
            schoolSlider.scrollLeft / cardWidth
        );

        schoolDots.forEach(dot => {
            dot.classList.remove("is-active");
        });

        if (schoolDots[currentIndex]) {
            schoolDots[currentIndex].classList.add("is-active");
        }

    }

    schoolSlider.addEventListener("scroll", updatePagination);

    schoolDots.forEach((dot,index)=>{

        dot.addEventListener("click",()=>{

            schoolSlider.scrollTo({

                left: schoolCards[index].offsetLeft,

                behavior:"smooth"

            });

        });

    });

}