
// =================================
// FRESHERS DAY 2026 WEBSITE
// =================================

document.addEventListener("DOMContentLoaded", function () {

    // 1. WELCOME COVER

    const welcomeCover = document.getElementById("welcomeCover");
    const enterInvitation = document.getElementById("enterInvitation");

    document.body.classList.add("no-scroll");

    if (welcomeCover && enterInvitation) {

        enterInvitation.addEventListener("click", function () {

            welcomeCover.classList.add("closed");
            document.body.classList.remove("no-scroll");

            setTimeout(function () {
                welcomeCover.style.display = "none";
            }, 850);

        });

    } else {
        document.body.classList.remove("no-scroll");
    }


    // 2. MOBILE NAVIGATION

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });

        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
            });

        });

    }


    // 3. SCROLL REVEAL ANIMATION

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(function (element) {
            observer.observe(element);
        });

    } else {

        revealElements.forEach(function (element) {
            element.classList.add("visible");
        });

    }


    // 4. RSVP FORM

    const rsvpForm = document.getElementById("rsvpForm");
    const guestName = document.getElementById("guestName");
    const attendance = document.getElementById("attendance");
    const rsvpMessage = document.getElementById("rsvpMessage");

    if (rsvpForm) {

        rsvpForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = guestName.value.trim();
            const response = attendance.value;

            if (name === "" || response === "") {

                rsvpMessage.textContent =
                    "Please fill in all the details.";

                return;

            }

            rsvpMessage.textContent =
                "Thank you, " + name + "! Your response: " + response + ".";

            rsvpForm.reset();

        });

    }


    // 5. SMOOTH SCROLL

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    // 6. CONSOLE MESSAGE

    console.log("Freshers Day 2026 Website Loaded Successfully!");


// =====================================
// ADDITIONAL FRESHERS DAY FEATURES
// Paste before the final }); of your
// existing DOMContentLoaded function.
// =====================================


// 1. LIVE COUNTDOWN TIMER

// CHANGE THIS TO YOUR ACTUAL EVENT DATE AND TIME
const eventDate = new Date(
    "2026-11-15T09:30:00+05:30"
).getTime();

const countdownTimer = setInterval(function () {

    const now = new Date().getTime();
    const difference = eventDate - now;

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
    const message = document.getElementById("countdownMessage");

    if (difference <= 0) {

        clearInterval(countdownTimer);

        if (message) {
            message.textContent = "The celebration has arrived!";
        }

        [days, hours, minutes, seconds].forEach(function (item) {
            if (item) item.textContent = "00";
        });

        return;
    }

    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const m = Math.floor((difference / (1000 * 60)) % 60);
    const s = Math.floor((difference / 1000) % 60);

    if (days) days.textContent = String(d).padStart(2, "0");
    if (hours) hours.textContent = String(h).padStart(2, "0");
    if (minutes) minutes.textContent = String(m).padStart(2, "0");
    if (seconds) seconds.textContent = String(s).padStart(2, "0");

}, 1000);


// 2. FULL-SCREEN GALLERY

const galleryImages = Array.from(
    document.querySelectorAll(".gallery-item img")
);

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const previousPhoto = document.getElementById("previousPhoto");
const nextPhoto = document.getElementById("nextPhoto");
const photoCounter = document.getElementById("photoCounter");

let currentPhoto = 0;

function showPhoto(index) {

    if (!galleryImages.length) return;

    currentPhoto = (index + galleryImages.length) % galleryImages.length;

    lightboxImage.src = galleryImages[currentPhoto].src;
    lightboxImage.alt = galleryImages[currentPhoto].alt;

    photoCounter.textContent =
        (currentPhoto + 1) + " / " + galleryImages.length;
}

galleryImages.forEach(function (img, index) {

    img.style.cursor = "pointer";

    img.addEventListener("click", function () {

        if (!lightbox) return;

        lightbox.classList.add("active");
        showPhoto(index);

    });

});

if (lightboxClose) {
    lightboxClose.addEventListener("click", function () {
        lightbox.classList.remove("active");
    });
}

if (previousPhoto) {
    previousPhoto.addEventListener("click", function () {
        showPhoto(currentPhoto - 1);
    });
}

if (nextPhoto) {
    nextPhoto.addEventListener("click", function () {
        showPhoto(currentPhoto + 1);
    });
}

if (lightbox) {

    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {
            lightbox.classList.remove("active");
        }

    });

}

document.addEventListener("keydown", function (event) {

    if (!lightbox || !lightbox.classList.contains("active")) return;

    if (event.key === "Escape") {
        lightbox.classList.remove("active");
    }

    if (event.key === "ArrowRight") {
        showPhoto(currentPhoto + 1);
    }

    if (event.key === "ArrowLeft") {
        showPhoto(currentPhoto - 1);
    }

});


// 3. WHATSAPP INVITATION SHARING

const whatsappShare = document.getElementById("whatsappShare");

if (whatsappShare) {

    whatsappShare.addEventListener("click", function (event) {

        event.preventDefault();

        const websiteLink = window.location.href;

        const message =
            "You are cordially invited to Freshers Day 2026 at Sri Chaitanya Junior College, Charaka Bhavan!\n\n" +
            "Explore our invitation here:\n" + websiteLink;

        const whatsappURL =
            "https://wa.me/?text=" + encodeURIComponent(message);

        window.open(whatsappURL, "_blank");

    });

}
});
