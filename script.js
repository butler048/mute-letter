const openLetter = document.getElementById("openLetter");
const letterModal = document.getElementById("letterModal");
const closeModal = document.getElementById("closeModal");

// OPEN MODAL
openLetter.addEventListener("click", () => {
    letterModal.style.display = "flex";
});

// CLOSE MODAL
closeModal.addEventListener("click", () => {
    letterModal.style.display = "none";
});

// CLICK OUTSIDE TO CLOSE
window.addEventListener("click", (e) => {
    if (e.target === letterModal) {
        letterModal.style.display = "none";
    }
});

// MUSIC
const musicBtn = document.getElementById("musicBtn");
const song = document.getElementById("song");

musicBtn.addEventListener("click", () => {
    if (song.paused) {
        song.play();
        musicBtn.textContent = "⏸ Pause Music";
    } else {
        song.pause();
        musicBtn.textContent = " Play Music";
    }
});

// LIGHTBOX
document.querySelectorAll(".photo img").forEach(img => {
    img.addEventListener("click", () => {
        document.getElementById("lightbox").style.display = "flex";
        document.getElementById("lightboxImg").src = img.src;
    });
});

document.getElementById("closeLightbox").addEventListener("click", () => {
    document.getElementById("lightbox").style.display = "none";
});

document.getElementById("lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") {
        e.target.style.display = "none";
    }
});