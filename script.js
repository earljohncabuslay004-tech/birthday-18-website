/* =========================================================
   BIRTHDAY WEBSITE - COMPLETE JAVASCRIPT
========================================================= */


/* =========================================================
   BIRTHDAY NAME
========================================================= */

const birthdayName = "PRECIOUS JOYRELLE";


/* =========================================================
   GET HTML ELEMENTS
========================================================= */

const intro = document.getElementById("intro");
const scene = document.getElementById("birthdayScene");
const startBtn = document.getElementById("startBtn");

const nameIntro = document.getElementById("nameIntro");
const nameMain = document.getElementById("nameMain");

const music = document.getElementById("birthdayMusic");
const musicError = document.getElementById("musicError");
const musicStatus = document.getElementById("musicStatus");

const photoSection = document.getElementById("photoSection");
const carouselImage = document.getElementById("carouselImage");
const dotsContainer = document.getElementById("dots");

const nextButton = document.querySelector(".carousel-btn.next");
const prevButton = document.querySelector(".carousel-btn.prev");

const videoSection = document.getElementById("videoSection");
const birthdayVideo = document.getElementById("birthdayVideo");


/* =========================================================
   SET BIRTHDAY NAME
========================================================= */

if (nameIntro) {
    nameIntro.textContent = birthdayName;
}

if (nameMain) {
    nameMain.textContent = birthdayName;
}


/* =========================================================
   PHOTO FILES
   ONLY PHOTOS GO HERE
========================================================= */

const photos = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg"
];


/* =========================================================
   VIDEO FILE
========================================================= */

const videoFile = "images/video.mp4";


/* =========================================================
   VARIABLES
========================================================= */

let currentPhoto = 0;
let carouselTimer = null;
let videoStarted = false;


/* =========================================================
   SET VIDEO SOURCE
========================================================= */

if (birthdayVideo) {

    const source = birthdayVideo.querySelector("source");

    if (source) {
        source.src = videoFile;
    }

    birthdayVideo.load();
}


/* =========================================================
   CREATE PHOTO DOTS
========================================================= */

photos.forEach((photo, index) => {

    const dot = document.createElement("span");

    dot.className = "dot";

    if (index === 0) {
        dot.classList.add("active");
    }


    dot.addEventListener("click", function () {

        /*
         * Do nothing once the video has started.
         */
        if (videoStarted) {
            return;
        }


        currentPhoto = index;

        showPhoto(currentPhoto);

        restartCarousel();

    });


    dotsContainer.appendChild(dot);

});


/* =========================================================
   SHOW PHOTO
========================================================= */

function showPhoto(index) {

    if (!carouselImage) {
        return;
    }


    currentPhoto = index;


    carouselImage.src = photos[currentPhoto];


    /*
     * Update active dot
     */

    const dots =
        document.querySelectorAll(".dot");


    dots.forEach((dot, i) => {

        dot.classList.toggle(
            "active",
            i === currentPhoto
        );

    });

}


/* =========================================================
   NEXT PHOTO
========================================================= */

function nextPhoto() {

    /*
     * Don't continue after video starts.
     */

    if (videoStarted) {
        return;
    }


    /*
     * If Photo 5 is currently displayed,
     * the next action starts the video.
     */

    if (currentPhoto === photos.length - 1) {

        playBirthdayVideo();

        return;
    }


    /*
     * Go to next photo.
     */

    currentPhoto++;

    showPhoto(currentPhoto);

}


/* =========================================================
   PREVIOUS PHOTO
========================================================= */

function previousPhoto() {

    if (videoStarted) {
        return;
    }


    currentPhoto--;


    /*
     * If already at Photo 1,
     * go back to Photo 5.
     */

    if (currentPhoto < 0) {

        currentPhoto =
            photos.length - 1;

    }


    showPhoto(currentPhoto);

    restartCarousel();

}


/* =========================================================
   START PHOTO CAROUSEL
========================================================= */

function startCarousel() {

    /*
     * Clear existing timer first.
     */

    clearInterval(carouselTimer);


    /*
     * Change photo every 3.5 seconds.
     */

    carouselTimer = setInterval(function () {

        nextPhoto();

    }, 3500);

}


/* =========================================================
   RESTART PHOTO CAROUSEL
========================================================= */

function restartCarousel() {

    startCarousel();

}


/* =========================================================
   STOP HAPPY BIRTHDAY MUSIC
========================================================= */

function stopBirthdayMusic() {

    if (!music) {
        return;
    }


    music.pause();

    music.currentTime = 0;

}


/* =========================================================
   SHOW PLAY BUTTON IF AUTOPLAY IS BLOCKED
========================================================= */

function createVideoPlayButton() {

    /*
     * Check if a button already exists.
     */

    let existingButton =
        document.getElementById("manualVideoPlayBtn");


    if (existingButton) {
        return existingButton;
    }


    /*
     * Create button.
     */

    const button =
        document.createElement("button");


    button.id = "manualVideoPlayBtn";

    button.type = "button";

    button.textContent =
        "▶ Play Special Video";


    /*
     * Basic styling so it works
     * even without extra CSS.
     */

    button.style.display = "inline-block";
    button.style.marginTop = "15px";
    button.style.padding = "13px 24px";
    button.style.border = "none";
    button.style.borderRadius = "999px";
    button.style.background = "#ffffff";
    button.style.color = "#8b3269";
    button.style.fontSize = "16px";
    button.style.fontWeight = "bold";
    button.style.cursor = "pointer";
    button.style.boxShadow =
        "0 8px 20px rgba(70,25,55,.20)";


    /*
     * When user clicks Play,
     * video definitely has a user gesture.
     */

    button.addEventListener("click", async function () {

        if (!birthdayVideo) {
            return;
        }


        try {

            birthdayVideo.muted = false;

            await birthdayVideo.play();

            button.remove();

        } catch (error) {

            console.log(
                "Video could not play:",
                error
            );

        }

    });


    /*
     * Put button under the video.
     */

    if (videoSection) {

        videoSection.appendChild(button);

    }


    return button;
}


/* =========================================================
   PLAY BIRTHDAY VIDEO
========================================================= */

async function playBirthdayVideo() {

    /*
     * Don't start twice.
     */

    if (videoStarted) {
        return;
    }


    videoStarted = true;


    /* ---------------------------------------------
       STOP CAROUSEL
    --------------------------------------------- */

    clearInterval(carouselTimer);


    /* ---------------------------------------------
       STOP HAPPY BIRTHDAY MUSIC
    --------------------------------------------- */

    stopBirthdayMusic();


    /* ---------------------------------------------
       UPDATE STATUS
    --------------------------------------------- */

    if (musicStatus) {

        musicStatus.textContent =
            "🎬 A Special Message For You...";

    }


    /* ---------------------------------------------
       HIDE PHOTO SECTION
    --------------------------------------------- */

    if (photoSection) {

        photoSection.classList.add("hidden");

    }


    /* ---------------------------------------------
       SHOW VIDEO SECTION
    --------------------------------------------- */

    if (videoSection) {

        videoSection.classList.remove("hidden");

    }


    /* ---------------------------------------------
       RESET VIDEO
    --------------------------------------------- */

    if (birthdayVideo) {

        birthdayVideo.currentTime = 0;

        birthdayVideo.controls = true;

        birthdayVideo.muted = false;


        /*
         * Make sure the correct source is loaded.
         */

        birthdayVideo.load();


        /*
         * Wait briefly for the source to load.
         */

        try {

            await birthdayVideo.play();

            /*
             * Autoplay succeeded.
             */

            console.log(
                "Birthday video is playing."
            );

        } catch (error) {

            /*
             * Browser blocked autoplay.
             */

            console.log(
                "Video autoplay was blocked:",
                error
            );


            /*
             * Create manual Play button.
             */

            createVideoPlayButton();

        }


        /* -----------------------------------------
           SCROLL TO VIDEO
        ----------------------------------------- */

        setTimeout(function () {

            videoSection.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 300);

    }

}


/* =========================================================
   START BUTTON
========================================================= */

if (startBtn) {

    startBtn.addEventListener(
        "click",
        async function () {

            /*
             * Hide opening screen.
             */

            intro.classList.add("hidden");


            /*
             * Show birthday scene.
             */

            scene.classList.remove("hidden");


            /*
             * Reset state.
             */

            currentPhoto = 0;

            videoStarted = false;


            /*
             * Show Photo 1.
             */

            showPhoto(0);


            /*
             * Show photo section.
             */

            if (photoSection) {

                photoSection.classList.remove(
                    "hidden"
                );

            }


            /*
             * Hide video.
             */

            if (videoSection) {

                videoSection.classList.add(
                    "hidden"
                );

            }


            /*
             * Remove old manual video button.
             */

            const oldVideoButton =
                document.getElementById(
                    "manualVideoPlayBtn"
                );


            if (oldVideoButton) {

                oldVideoButton.remove();

            }


            /*
             * Reset video.
             */

            if (birthdayVideo) {

                birthdayVideo.pause();

                birthdayVideo.currentTime = 0;

                birthdayVideo.muted = false;

            }


            /* -----------------------------------------
               START MUSIC
            ----------------------------------------- */

            if (music) {

                try {

                    music.currentTime = 0;

                    await music.play();


                    if (musicError) {

                        musicError.classList.add(
                            "hidden"
                        );

                    }

                } catch (error) {

                    console.log(
                        "Music could not start:",
                        error
                    );


                    if (musicError) {

                        musicError.classList.remove(
                            "hidden"
                        );

                    }

                }

            }


            /* -----------------------------------------
               MUSIC STATUS
            ----------------------------------------- */

            if (musicStatus) {

                musicStatus.textContent =
                    "♫ Happy Birthday Music Playing...";

            }


            /* -----------------------------------------
               START CAROUSEL
            ----------------------------------------- */

            startCarousel();

        }
    );

}


/* =========================================================
   NEXT BUTTON
========================================================= */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        function () {

            nextPhoto();

        }
    );

}


/* =========================================================
   PREVIOUS BUTTON
========================================================= */

if (prevButton) {

    prevButton.addEventListener(
        "click",
        function () {

            previousPhoto();

        }
    );

}


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "ArrowRight") {

            nextPhoto();

        }


        if (event.key === "ArrowLeft") {

            previousPhoto();

        }

    }
);


/* =========================================================
   VIDEO EVENTS
========================================================= */

if (birthdayVideo) {


    /*
     * When video starts playing,
     * make absolutely sure music is stopped.
     */

    birthdayVideo.addEventListener(
        "play",
        function () {

            stopBirthdayMusic();

        }
    );


    /*
     * When video ends,
     * keep music stopped.
     */

    birthdayVideo.addEventListener(
        "ended",
        function () {

            stopBirthdayMusic();


            if (musicStatus) {

                musicStatus.textContent =
                    "♡ Thank you for celebrating! ♡";

            }

        }
    );

}


/* =========================================================
   INITIAL PHOTO
========================================================= */

showPhoto(0);
