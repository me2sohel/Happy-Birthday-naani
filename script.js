/* =========================
   COUNTDOWN TIMER
========================= */

const birthdayDate = new Date("June 28, 2026 00:00:00").getTime();

const countdown = document.getElementById("countdown");

function updateCountdown() {

    const now = new Date().getTime();
    const distance = birthdayDate - now;

    if (distance <= 0) {

        countdown.innerHTML = `
            <span>🎉</span>
            <span>IT'S</span>
            <span>YOUR</span>
            <span>DAY!</span>
        `;

        return;
    }

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        /
        1000
    );

    countdown.innerHTML = `
        <span>${days} Days</span>
        <span>${hours} Hours</span>
        <span>${minutes} Minutes</span>
        <span>${seconds} Seconds</span>
    `;
}

setInterval(updateCountdown, 1000);
updateCountdown();


/* =========================
   TYPEWRITER EFFECT
========================= */

const message = `

Happy Birthday, Puchu ❤️

Today is not just another day.

It is the celebration of the day
someone truly special came into this world.

May your heart always stay happy,
your dreams continue growing,
and your smile never fade.

Thank you for being exactly who you are.

✨

`;

const typewriterElement =
document.getElementById("typewriter");

let charIndex = 0;

function typeWriter() {

    if (charIndex < message.length) {

        typewriterElement.innerHTML +=
        message.charAt(charIndex);

        charIndex++;

        setTimeout(typeWriter, 40);
    }
}

window.addEventListener("load", () => {

    setTimeout(typeWriter, 800);

});


/* =========================
   MUSIC BUTTON
========================= */

const music =
document.getElementById("birthdayMusic");

const musicBtn =
document.getElementById("musicBtn");

let musicPlaying = false;

musicBtn.addEventListener("click", () => {

    if (!musicPlaying) {

        music.play();

        musicBtn.innerHTML =
        "⏸ Pause Music";

        musicPlaying = true;

    } else {

        music.pause();

        musicBtn.innerHTML =
        "🎵 Play Music";

        musicPlaying = false;
    }

});


/* =========================
   FLIP MEMORY CARDS
========================= */

const memoryCards =
document.querySelectorAll(".memory-card");

memoryCards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("flip");

    });

});


/* =========================
   SECRET LETTER
========================= */

const openLetterBtn =
document.getElementById("openLetter");

const secretLetter =
document.getElementById("secretLetter");

openLetterBtn.addEventListener("click", () => {

    if (
        secretLetter.style.display === "block"
    ) {

        secretLetter.style.display = "none";

        openLetterBtn.innerHTML =
        "Open Secret Letter";

    } else {

        secretLetter.style.display = "block";

        openLetterBtn.innerHTML =
        "Close Letter";

        secretLetter.scrollIntoView({
            behavior: "smooth"
        });
    }

});


/* =========================
   FINAL SURPRISE
========================= */

const surpriseBtn =
document.getElementById("surpriseBtn");

const surpriseScreen =
document.getElementById("surpriseScreen");

surpriseBtn.addEventListener("click", () => {

    surpriseScreen.style.display = "flex";

    createConfetti();

});


surpriseScreen.addEventListener("click", () => {

    surpriseScreen.style.display = "none";

});


/* =========================
   SIMPLE CONFETTI
========================= */

function createConfetti() {

    for (let i = 0; i < 150; i++) {

        const confetti =
        document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left =
        Math.random() * 100 + "vw";

        confetti.style.animationDuration =
        Math.random() * 3 + 2 + "s";

        confetti.style.opacity =
        Math.random();

        confetti.style.transform =
        `rotate(${Math.random()*360}deg)`;

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 5000);
    }
}


/* =========================
   FALLING PETALS
========================= */

const petalsContainer =
document.getElementById("petals-container");

function createPetal() {

    const petal =
    document.createElement("div");

    petal.classList.add("petal");

    petal.style.left =
    Math.random() * window.innerWidth + "px";

    petal.style.animationDuration =
    Math.random() * 5 + 5 + "s";

    petal.style.opacity =
    Math.random();

    petal.style.width =
    Math.random() * 12 + 10 + "px";

    petal.style.height =
    petal.style.width;

    petalsContainer.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 10000);
}

setInterval(createPetal, 300);


/* =========================
   REVEAL ANIMATION
========================= */

const reveals =
document.querySelectorAll(
    ".reason-card, .chapter, .memory-card"
);

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");
        }

    });

}, {
    threshold: 0.2
});

reveals.forEach(item => {

    item.classList.add("reveal");

    observer.observe(item);

});


/* =========================
   EXTRA STYLES CREATED
   VIA JS
========================= */

const style =
document.createElement("style");

style.innerHTML = `

.confetti{
    position:fixed;
    top:-20px;
    width:10px;
    height:10px;
    z-index:99999;
    background:hsl(
        ${Math.random()*360},
        100%,
        70%
    );
    animation:fall linear forwards;
}

@keyframes fall{

    to{
        transform:
        translateY(110vh)
        rotate(720deg);
    }
}

.petal{

    position:absolute;

    top:-30px;

    background:#ffb6c1;

    border-radius:
    50% 0 50% 50%;

    transform:rotate(45deg);

    animation:
    petalFall linear forwards;
}

@keyframes petalFall{

    from{

        transform:
        translateY(0)
        rotate(0deg);

    }

    to{

        transform:
        translateY(110vh)
        rotate(360deg);

    }
}

`;

document.head.appendChild(style);
