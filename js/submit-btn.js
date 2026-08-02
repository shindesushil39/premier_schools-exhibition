const button = document.getElementById("submitBtn");

button.addEventListener("click", function () {

    this.classList.add("active");

    // Remove animation after 1 second
    setTimeout(() => {
        this.classList.remove("active");
    }, 1000);

});