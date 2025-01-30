// JavaScript Document
document.addEventListener("DOMContentLoaded", function () {
    const imageFolderPath = "images/maternity";
    
    const abbyImages = [
        "abby_maternity_001.jpg", "abby_maternity_002.jpg", "abby_maternity_003.jpg", "abby_maternity_004.jpg",
        "abby_maternity_005.jpg", "abby_maternity_006.jpg", "abby_maternity_007.jpg", "abby_maternity_008.jpg",
        "abby_maternity_009.jpg", "abby_maternity_010.jpg", "abby_maternity_011.jpg", "abby_maternity_012.jpg",
        "abby_maternity_013.jpg", "abby_maternity_014.jpg", "abby_maternity_015.jpg", "abby_maternity_016.jpg",
        "abby_maternity_017.jpg", "abby_maternity_018.jpg", "abby_maternity_019.jpg"
    ];
    
    const carolineImages = [
        "caroline_maternity_001.jpg", "caroline_maternity_002.jpg", "caroline_maternity_003.jpg", "caroline_maternity_004.jpg",
        "caroline_maternity_005.jpg", "caroline_maternity_006.jpg", "caroline_maternity_007.jpg", "caroline_maternity_008.jpg",
        "caroline_maternity_009.jpg", "caroline_maternity_010.jpg", "caroline_maternity_011.jpg", "caroline_maternity_012.jpg",
        "caroline_maternity_013.jpg", "caroline_maternity_014.jpg", "caroline_maternity_015.jpg", "caroline_maternity_016.jpg",
        "caroline_maternity_017.jpg", "caroline_maternity_018.jpg", "caroline_maternity_019.jpg", "caroline_maternity_020.jpg",
        "caroline_maternity_021.jpg"
    ];
    
    function getRandomImages(imageArray, count) {
        const shuffled = [...imageArray].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
    
    function getDailySelection() {
        const today = new Date().toDateString();
        let selection;

        try {
            selection = JSON.parse(localStorage.getItem("dailyImageSelection"));
        } catch (error) {
            selection = null;
        }

        if (!selection || selection.date !== today || !Array.isArray(selection.images)) {
            selection = { date: today, images: [] };

            const selectedAbbyImages = getRandomImages(abbyImages, 5);
            const selectedCarolineImages = getRandomImages(carolineImages, 5);

            selection.images = [...selectedAbbyImages, ...selectedCarolineImages];

            localStorage.setItem("dailyImageSelection", JSON.stringify(selection));
        }

        console.log("Selected Images for Carousel:", selection.images);

        return Array.isArray(selection.images) ? selection.images : [];
    }

    function updateCarousel() {
        const selectedImages = getDailySelection();

        console.log("Debug: Selected Images Type:", typeof selectedImages);
        console.log("Debug: Selected Images Content:", selectedImages);

        if (!Array.isArray(selectedImages)) {
            console.error("ERROR: selectedImages is NOT an array!", selectedImages);
            return;
        }

        const carouselInner = document.querySelector("#carouselExampleIndicators .carousel-inner");
        const carouselIndicators = document.querySelector("#carouselExampleIndicators .carousel-indicators");

        if (!carouselInner || !carouselIndicators) {
            console.error("ERROR: Carousel elements not found in DOM!");
            return;
        }

        carouselInner.innerHTML = "";
        carouselIndicators.innerHTML = "";

        let isFirst = true;
        let index = 0;

        selectedImages.forEach(image => {
            const imageUrl = `${imageFolderPath}/${image}`;
            console.log(`Adding Image to Carousel: ${imageUrl}`);

            const carouselItem = document.createElement("div");
            carouselItem.classList.add("carousel-item");
            if (isFirst) {
                carouselItem.classList.add("active");
                isFirst = false;
            }
            carouselItem.innerHTML = `<img src="${imageUrl}" class="d-block w-100" alt="${image}">`;
            carouselInner.appendChild(carouselItem);

            const indicator = document.createElement("li");
            indicator.setAttribute("data-target", "#carouselExampleIndicators");
            indicator.setAttribute("data-slide-to", index);
            if (index === 0) {
                indicator.classList.add("active");
            }
            carouselIndicators.appendChild(indicator);

            index++;
        });

        console.log("Carousel successfully updated!");
    }

    updateCarousel();
});
