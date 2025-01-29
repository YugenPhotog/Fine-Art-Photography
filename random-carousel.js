// JavaScript Document
document.addEventListener("DOMContentLoaded", function () {
    const imageFolders = {
        "Abby/bw": [
            "abby_miracleoflife-10.jpg", "abby_miracleoflife-1.jpg", "abby_miracleoflife--3.jpg",
            "abby_miracleoflife--4.jpg", "abby_miracleoflife--5.jpg", "abby_miracleoflife-7.jpg",
            "abby_miracleoflife-9.jpg"
        ],
        "Abby/fashion": [
            "abby_miracleoflife-4428.jpg", "abby_miracleoflife--6.jpg",
            "abby_miracleoflife--7.jpg", "abby_miracleoflife-4404.jpg"
        ],
        "Abby/flowers": [
            "abby_miracleoflife-4507.jpg", "abby_miracleoflife-4501.jpg"
        ],
        "Abby/glow": [
            "abby_miracleoflife-4626.jpg", "abby_miracleoflife-4586.jpg", "abby_miracleoflife-4601.jpg"
        ],
        "Abby/shear": [
            "SLA_4607.jpg", "abby_miracleoflife-4341.jpg", "abby_miracleoflife-4345.jpg",
            "abby_miracleoflife-4377.jpg"
        ],
        "Caroline/elegance": [
            "caroline_miracleoflife-5688.jpg", "caroline_miracleoflife-5550.jpg", "caroline_miracleoflife-5579.jpg",
            "caroline_miracleoflife-5581.jpg", "caroline_miracleoflife-5583.jpg", "caroline_miracleoflife-5603.jpg",
            "caroline_miracleoflife-5632.jpg", "caroline_miracleoflife-5658.jpg", "caroline_miracleoflife-5682.jpg",
            "caroline_miracleoflife-5685.jpg"
        ],
        "Caroline/luminous": [
            "caroline_miracleoflife-11.jpg", "caroline_miracleoflife-.jpg", "caroline_miracleoflife-2.jpg",
            "caroline_miracleoflife-3.jpg", "caroline_miracleoflife-4.jpg", "caroline_miracleoflife-5.jpg",
            "caroline_miracleoflife-6.jpg", "caroline_miracleoflife-7.jpg", "caroline_miracleoflife-8.jpg",
            "caroline_miracleoflife-9.jpg", "caroline_miracleoflife-10.jpg"
        ],
        "Caroline/elegance": [
            "caroline_miracleoflife-5829.jpg", "caroline_miracleoflife-5814.jpg", "caroline_miracleoflife-5823.jpg"
        ]
    };

    function getRandomImageFromFolder(folder) {
        const images = imageFolders[folder];
        return images[Math.floor(Math.random() * images.length)];
    }

    function getDailySelection() {
        const today = new Date().toDateString();
        let selection;

        try {
            selection = JSON.parse(localStorage.getItem("dailyImageSelection"));
        } catch (error) {
            selection = null;
        }

        if (!selection || selection.date !== today) {
            selection = { date: today, images: {} };
            for (const folder in imageFolders) {
                selection.images[folder] = getRandomImageFromFolder(folder);
            }
            localStorage.setItem("dailyImageSelection", JSON.stringify(selection));
        }
        return selection.images;
    }

    function updateCarousel() {
        const selectedImages = getDailySelection();
        const carouselInner = document.querySelector("#carouselExampleIndicators .carousel-inner");
        const carouselIndicators = document.querySelector("#carouselExampleIndicators .carousel-indicators");

        carouselInner.innerHTML = "";
        carouselIndicators.innerHTML = ""; // Clear previous indicators

        let isFirst = true;
        let index = 0;

        for (const folder in selectedImages) {
            const imageUrl = `images/Maternity/${folder}/${selectedImages[folder]}`;
            
            // Create carousel item
            const carouselItem = document.createElement("div");
            carouselItem.classList.add("carousel-item");
            if (isFirst) {
                carouselItem.classList.add("active");
                isFirst = false;
            }
            carouselItem.innerHTML = `<img src="${imageUrl}" class="d-block w-100" alt="${selectedImages[folder]}">`;
            carouselInner.appendChild(carouselItem);

            // Create corresponding indicator
            const indicator = document.createElement("li");
            indicator.setAttribute("data-target", "#carouselExampleIndicators");
            indicator.setAttribute("data-slide-to", index);
            if (index === 0) {
                indicator.classList.add("active");
            }
            carouselIndicators.appendChild(indicator);

            index++;
        }
    }

    updateCarousel();
});
