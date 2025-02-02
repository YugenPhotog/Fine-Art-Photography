// JavaScript Document
document.addEventListener("DOMContentLoaded", function () {
    // Array of Boudoir images with relative paths
    const boudoirImages = [
        "images/Boudoir/boudoir_4.jpg",
        "images/Boudoir/foxie_boudoir.jpg",
        "images/Boudoir/nikki_sultry.jpg",
        "images/Boudoir/nikki_sultry1.jpg",
        "images/Boudoir/nikki_sultry2.jpg",
        "images/Boudoir/nikki_sultry3.jpg",
        "images/Boudoir/Sera_lingerie.jpg",
        "images/Boudoir/Sera_lingerie1.jpg",
        "images/Boudoir/whitney_candlelit_boudoir_1.jpg",
        "images/Boudoir/April_Backlit_Beauty.jpg",
        "images/Boudoir/April_Backlit_Beauty1.jpg",
        "images/Boudoir/April_RedFabric-9367.jpg",
        "images/Boudoir/artful_intimacy-1.jpg",
        "images/Boudoir/artful_intimacy-2.jpg",
        "images/Boudoir/artful_intimacy-3.jpg",
        "images/Boudoir/artful_intimacy-4.jpg",
        "images/Boudoir/artful_intimacy-5.jpg",
        "images/Boudoir/artful_intimacy-6.jpg",
        "images/Boudoir/artful_intimacy-7.jpg",
        "images/Boudoir/artful_intimacy-8.jpg",
        "images/Boudoir/artful_intimacy-9.jpg",
        "images/Boudoir/artful_intimacy-10.jpg",
        "images/Boudoir/artful_intimacy-11.jpg",
        "images/Boudoir/artful_intimacy-12.jpg",
        "images/Boudoir/artful_intimacy-13.jpg",
        "images/Boudoir/artful_intimacy-14.jpg",
        "images/Boudoir/artful_intimacy-15.jpg",
        "images/Boudoir/artful_intimacy-16.jpg",
        "images/Boudoir/artful_intimacy-17.jpg",
        "images/Boudoir/artful_intimacy-18.jpg",
        "images/Boudoir/artful_intimacy-19.jpg",
        "images/Boudoir/artful_intimacy-20.jpg",
        "images/Boudoir/boudoir_2.jpg",
        "images/Boudoir/boudoir_3.jpg"
    ];

    // Select the carousel elements by ID
    const carouselInner = document.querySelector("#carouselBoudoir .carousel-inner");
    const carouselIndicators = document.querySelector("#carouselBoudoir .carousel-indicators");

    if (!carouselInner || !carouselIndicators) {
        console.error("Carousel elements not found in the DOM!");
        return;
    }

    // Clear any existing carousel content
    carouselInner.innerHTML = "";
    carouselIndicators.innerHTML = "";

    // Loop through the images array and add each image as a carousel item
    boudoirImages.forEach((image, index) => {
        // Create a carousel item element
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        if (index === 0) {
            carouselItem.classList.add("active");
        }
        carouselItem.innerHTML = `<img src="${image}" class="d-block w-100" alt="Boudoir Image ${index + 1}">`;
        carouselInner.appendChild(carouselItem);

        // Create a corresponding carousel indicator
        const indicator = document.createElement("li");
        indicator.setAttribute("data-target", "#carouselBoudoir");
        indicator.setAttribute("data-slide-to", index);
        if (index === 0) {
            indicator.classList.add("active");
        }
        carouselIndicators.appendChild(indicator);
    });

    console.log("Boudoir carousel successfully updated!");
});
