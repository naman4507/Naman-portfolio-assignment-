// 1. MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// 2. TYPING ANIMATION
const typingText = document.getElementById("typingText");

const phrases = [
    "Web Development",
    "Python Programming",
    "Artificial Intelligence",
    "Creative Problem Solving"
];

let phraseIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingText.textContent = currentPhrase.substring(
        0,
        characterIndex
    );

    let delay = deleting ? 45 : 85;

    if (!deleting && characterIndex === currentPhrase.length) {
        deleting = true;
        delay = 1300;
    } else if (deleting && characterIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = 350;
    }

    window.setTimeout(typeEffect, delay);
}

typeEffect();

// 3. CERTIFICATE POPUP
const viewCertificate = document.getElementById("viewCertificate");
const certificateModal = document.getElementById("certificateModal");
const closeCertificate = document.getElementById("closeCertificate");

function openCertificate() {
    certificateModal.classList.add("active");
    certificateModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeCertificate.focus();
}

function closeCertificateModal() {
    certificateModal.classList.remove("active");
    certificateModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    viewCertificate.focus();
}

viewCertificate.addEventListener("click", openCertificate);

closeCertificate.addEventListener("click", closeCertificateModal);

certificateModal.addEventListener("click", (event) => {
    if (event.target === certificateModal) {
        closeCertificateModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (
        event.key === "Escape" &&
        certificateModal.classList.contains("active")
    ) {
        closeCertificateModal();
    }
});

// 4. AUTOMATIC COPYRIGHT YEAR
document.getElementById("currentYear").textContent =
    new Date().getFullYear();