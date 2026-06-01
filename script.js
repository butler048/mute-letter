// =====================
// 💌 LETTER MODAL
// =====================
const openLetter = document.getElementById("openLetter");
const letterModal = document.getElementById("letterModal");
const closeModal = document.getElementById("closeModal");

openLetter.addEventListener("click", () => {
    letterModal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    letterModal.style.display = "none";
});

// close modal when clicking outside content
window.addEventListener("click", (e) => {
    if (e.target === letterModal) {
        letterModal.style.display = "none";
    }
});


// =====================
// 🎵 MUSIC TOGGLE
// =====================
const musicBtn = document.getElementById("musicBtn");
const song = document.getElementById("song");

musicBtn.addEventListener("click", () => {
    if (song.paused) {
        song.play();
        musicBtn.textContent = "Pause Music";
    } else {
        song.pause();
        musicBtn.textContent = " Play Music";
    }
});


// =====================
// 🖼️ LIGHTBOX GALLERY
// =====================
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll(".photo img").forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

closeLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});


// =====================
// 📱 MOBILE NAV MENU
// =====================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// optional: close menu when clicking a link (better UX)
document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});