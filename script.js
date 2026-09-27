const birthdayName = "PRECIOUS JOYRELLE";

const photos = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg"
];

const intro = document.getElementById("intro");
const scene = document.getElementById("birthdayScene");
const startBtn = document.getElementById("startBtn");
const music = document.getElementById("birthdayMusic");
const carouselImage = document.getElementById("carouselImage");
const dotsContainer = document.getElementById("dots");

document.getElementById("nameIntro").textContent = birthdayName;
document.getElementById("nameMain").textContent = birthdayName;


// PHOTO CAROUSEL
let currentPhoto = 0;

function showPhoto(index) {
    currentPhoto = (index + photos.length) % photos.length;
    carouselImage.src = photos[currentPhoto];

    document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === currentPhoto);
    });
}

photos.forEach((photo, index) => {
    const dot = document.createElement("span");
    dot.className = "dot";

    if (index === 0) {
        dot.classList.add("active");
    }

    dot.onclick = function () {
        showPhoto(index);
    };

    dotsContainer.appendChild(dot);
});


// START BUTTON
startBtn.onclick = function () {

    console.log("Birthday button clicked!");

    // Hide opening
    intro.classList.add("hidden");

    // Show birthday scene
    scene.classList.remove("hidden");

    // Start music
    music.play().catch(function(error) {
        console.log("Music needs attention:", error);
    });

    // Start carousel
    setInterval(function () {
        showPhoto(currentPhoto + 1);
    }, 3500);
};


// NEXT PHOTO
document.querySelector(".next").onclick = function () {
    showPhoto(currentPhoto + 1);
};


// PREVIOUS PHOTO
document.querySelector(".prev").onclick = function () {
    showPhoto(currentPhoto - 1);
};