/* ==================================
   ELEMENTS
================================== */

const lockScreen =
document.getElementById("lockScreen");

const openingScreen =
document.getElementById("openingScreen");

const mainWebsite =
document.getElementById("mainWebsite");

const unlockBtn =
document.getElementById("unlockBtn");

const daysEl =
document.getElementById("days");

const hoursEl =
document.getElementById("hours");

const minutesEl =
document.getElementById("minutes");

const secondsEl =
document.getElementById("seconds");


/* ==================================
   COUNTDOWN TO UNLOCK
================================== */

/*
CHANGE THIS DATE
*/

const unlockDate =
new Date("June 24, 2026 00:00:00").getTime();

function updateGiftCountdown(){

    const now = new Date().getTime();

    const distance =
    unlockDate - now;

    if(distance <= 0){

        daysEl.innerText = "🎉";
        hoursEl.innerText = "🎉";
        minutesEl.innerText = "🎉";
        secondsEl.innerText = "🎉";

        unlockBtn.disabled = false;

        unlockBtn.classList.add("active");

        unlockBtn.innerHTML =
        "🎁 Open Your Surprise";

        return;
    }

    const days =
    Math.floor(
        distance /
        (1000*60*60*24)
    );

    const hours =
    Math.floor(
        (distance %
        (1000*60*60*24))
        /
        (1000*60*60)
    );

    const minutes =
    Math.floor(
        (distance %
        (1000*60*60))
        /
        (1000*60)
    );

    const seconds =
    Math.floor(
        (distance %
        (1000*60))
        /
        1000
    );

    daysEl.innerText =
    String(days).padStart(2,"0");

    hoursEl.innerText =
    String(hours).padStart(2,"0");

    minutesEl.innerText =
    String(minutes).padStart(2,"0");

    secondsEl.innerText =
    String(seconds).padStart(2,"0");
}

setInterval(
    updateGiftCountdown,
    1000
);

updateGiftCountdown();


/* ==================================
   OPEN GIFT
================================== */

unlockBtn.addEventListener(
"click",
() => {

    if(unlockBtn.disabled)
    return;

    lockScreen.style.display =
    "none";

    openingScreen.style.display =
    "flex";

    setTimeout(() => {

        openingScreen.style.display =
        "none";

        mainWebsite.style.display =
        "block";

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        startTypewriter();

    },3000);

});


/* ==================================
   JOURNEY BUTTON
================================== */

const journeyBtn =
document.getElementById("journeyBtn");

if(journeyBtn){

    journeyBtn.addEventListener(
    "click",
    () => {

        document
        .querySelector(".wish-section")
        .scrollIntoView({
            behavior:"smooth"
        });

    });

}


/* ==================================
   TYPEWRITER
================================== */

const typewriterElement =
document.getElementById(
"typewriter"
);

const birthdayMessage =

`Happy Birthday ❤️

Today is not just another day.

It's the celebration of the day
someone incredibly special
came into this world.

I hope today brings you smiles,
beautiful memories,
and all the happiness you deserve.

Thank you for being you. ✨`;

let messageIndex = 0;

function startTypewriter(){

    if(!typewriterElement)
    return;

    typewriterElement.innerHTML = "";

    messageIndex = 0;

    typeMessage();
}

function typeMessage(){

    if(
        messageIndex <
        birthdayMessage.length
    ){

        typewriterElement.innerHTML +=
        birthdayMessage.charAt(
            messageIndex
        );

        messageIndex++;

        setTimeout(
            typeMessage,
            40
        );
    }
}


/* ==================================
   MUSIC
================================== */

const music =
document.getElementById(
"birthdayMusic"
);

const musicBtn =
document.getElementById(
"musicBtn"
);

let isPlaying = false;

if(musicBtn){

    musicBtn.addEventListener(
    "click",
    () => {

        if(!isPlaying){

            music.play();

            musicBtn.innerHTML =
            "⏸ Pause Music";

            isPlaying = true;

        }else{

            music.pause();

            musicBtn.innerHTML =
            "🎵 Play Music";

            isPlaying = false;
        }

    });

}


/* ==================================
   MEMORY CARD FLIP
================================== */

const cards =
document.querySelectorAll(
".memory-card"
);

cards.forEach(card => {

    card.addEventListener(
    "click",
    () => {

        card.classList.toggle(
        "flip"
        );

    });

});


/* ==================================
   SECRET LETTER
================================== */

const openLetter =
document.getElementById(
"openLetter"
);

const secretLetter =
document.getElementById(
"secretLetter"
);

if(openLetter){

    openLetter.addEventListener(
    "click",
    () => {

        if(
            secretLetter.style.display
            === "block"
        ){

            secretLetter.style.display =
            "none";

            openLetter.innerHTML =
            "Open Secret Letter";

        }else{

            secretLetter.style.display =
            "block";

            openLetter.innerHTML =
            "Close Letter";

        }

    });

}


/* ==================================
   FINAL SURPRISE
================================== */

const surpriseBtn =
document.getElementById(
"surpriseBtn"
);

const surpriseScreen =
document.getElementById(
"surpriseScreen"
);

if(surpriseBtn){

    surpriseBtn.addEventListener(
    "click",
    () => {

        surpriseScreen.style.display =
        "flex";

        createConfetti();

    });

}

if(surpriseScreen){

    surpriseScreen.addEventListener(
    "click",
    () => {

        surpriseScreen.style.display =
        "none";

    });

}


/* ==================================
   CONFETTI
================================== */

function createConfetti(){

    for(let i=0;i<150;i++){

        const confetti =
        document.createElement("div");

        confetti.classList.add(
        "confetti"
        );

        confetti.style.left =
        Math.random()*100 + "vw";

        confetti.style.animationDuration =
        Math.random()*3 + 2 + "s";

        confetti.style.background =
        `hsl(${Math.random()*360},
        100%,70%)`;

        document.body.appendChild(
        confetti
        );

        setTimeout(() => {

            confetti.remove();

        },5000);

    }

}


/* ==================================
   PETALS
================================== */

const petalsContainer =
document.getElementById(
"petals-container"
);

function createPetal(){

    if(!petalsContainer)
    return;

    const petal =
    document.createElement("div");

    petal.classList.add("petal");

    petal.style.left =
    Math.random()*100 + "vw";

    petal.style.animationDuration =
    Math.random()*5 + 5 + "s";

    petalsContainer.appendChild(
    petal
    );

    setTimeout(() => {

        petal.remove();

    },10000);
}

setInterval(
    createPetal,
    400
);


/* ==================================
   SCROLL REVEAL
================================== */

const observer =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add(
            "active"
            );

        }

    });

},
{
    threshold:0.15
}
);

document
.querySelectorAll(
".reason-card,.chapter,.memory-card"
)
.forEach(item=>{

    item.classList.add("reveal");

    observer.observe(item);

});
