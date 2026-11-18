
// WELCOME SCREEN
const openButton = document.getElementById("openSurprise");
const welcomeScreen = document.getElementById("welcome");
const surpriseScreen = document.getElementById("surprise");

openButton.addEventListener("click", () => {
    welcomeScreen.style.display = "none";
    surpriseScreen.classList.add("active");
});


// MEN'S DAY QUESTION
const yesAnswer = document.getElementById("yesAnswer");
const noAnswer = document.getElementById("noAnswer");
const answerMessage = document.getElementById("answerMessage");
const continueButton = document.getElementById("continueButton");

yesAnswer.addEventListener("click", () => {
    answerMessage.textContent =
        "Good. Because you're more special than you know. ♡";

    continueButton.classList.add("show");
});

noAnswer.addEventListener("click", () => {
    answerMessage.textContent =
        "Well, then I'll tell you... ❤️";

    continueButton.classList.add("show");
});


// MEMORY CARDS
function revealMessage(card) {
    card.classList.toggle("revealed");
}


// CONTINUE TO MEMORIES
continueButton.addEventListener("click", () => {
    document.getElementById("memories").scrollIntoView({
        behavior: "smooth"
    });
});


// LOVE LETTER ENVELOPE
const envelope = document.getElementById("envelope");
const letterPaper = document.getElementById("letterPaper");
const envelopeHint = document.getElementById("envelopeHint");

const finalButton = document.getElementById("finalButton");
const finalSurprise = document.getElementById("finalSurprise");

envelope.addEventListener("click", () => {

    // Prevent repeated clicks
    if (envelope.classList.contains("opened")) return;

    envelope.classList.add("opened");

    envelopeHint.textContent =
        "A little something from my heart ♡";

    setTimeout(() => {
        letterPaper.classList.add("show");
    }, 600);

    setTimeout(() => {
        finalButton.classList.add("show");
    }, 1200);

});


// FINAL SURPRISE
finalButton.addEventListener("click", () => {

    finalSurprise.classList.add("active");

    finalSurprise.scrollIntoView({
        behavior: "smooth"
    });

});


// REPLAY WEBSITE
document.getElementById("replayButton").addEventListener("click", () => {
    window.location.reload();
});

// FLOATING HEARTS ANIMATION

const heartsContainer = document.getElementById("hearts");

if (heartsContainer) {
    const heartSymbols = ["♡", "♥", "✧", "❤"];

    for (let i = 0; i < 22; i++) {
        const heart = document.createElement("span");

        heart.classList.add("floating-heart");
        heart.textContent =
            heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

        heart.style.left = Math.random() * 100 + "%";
        heart.style.animationDuration = (7 + Math.random() * 9) + "s";
        heart.style.animationDelay = (Math.random() * 8) + "s";
        heart.style.fontSize = (12 + Math.random() * 18) + "px";

        heartsContainer.appendChild(heart);
    }
}
