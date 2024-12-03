// Load skills from skills.json (mocked here for simplicity)
const skills = [
    "JavaScript Developer. ",
    "Front-End Enthusiast. ",
    "Back-End Specialist. ",
    "Database Manager. ",
    "Tech Innovator. "
];

let currentIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingSpeed = 100; // Speed of typing
const deletingSpeed = 50; // Speed of deleting
const pauseDelay = 2000; // Pause before typing the next word
const textElement = document.getElementById("typed-text");
const cursorElement = document.querySelector(".cursor");

function typeEffect() {
    const currentText = skills[currentIndex];

    if (isDeleting) {
        // Remove characters
        textElement.textContent = currentText.substring(0, currentCharIndex--);
    } else {
        // Add characters
        textElement.textContent = currentText.substring(0, currentCharIndex++);
    }

    if (!isDeleting && currentCharIndex === currentText.length) {
        // Pause at the end of the word
        isDeleting = true;
        setTimeout(typeEffect, pauseDelay);
    } else if (isDeleting && currentCharIndex === 0) {
        // Move to the next word
        isDeleting = false;
        currentIndex = (currentIndex + 1) % skills.length;
        setTimeout(typeEffect, typingSpeed);
    } else {
        // Continue typing or deleting
        setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
    }
}

// Start the typing effect
typeEffect();
