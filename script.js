/* ===================================
   ELEMENTS
=================================== */

console.log("Script loaded");
const lockScreen = document.getElementById("lockScreen");
const openingScreen = document.getElementById("openingScreen");
const mainWebsite = document.getElementById("mainWebsite");

const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

const giftButton = document.getElementById("giftButton");

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");


/* ===================================
   COUNTDOWN
=================================== */

/*
IMPORTANT

CHANGE THIS DATE
TO HER BIRTHDAY

Example:

June 28, 2026 00:00:00
*/

/*const unlockDate =
new Date("June 28, 2026 00:00:00").getTime();*/

const unlockDate =
new Date(Date.now() + 10000).getTime();

/* Unlock Date Ends Here */

let giftUnlocked = false;

function updateCountdown(){

    const now = new Date().getTime();

    const distance =
    unlockDate - now;

    if(distance <= 0){

        giftUnlocked = true;

        days.innerText = "🎉";
        hours.innerText = "🎉";
        minutes.innerText = "🎉";
        seconds.innerText = "🎉";

        giftButton.innerHTML =
        "🎁 Open My Surprise ✨";

        giftButton.style.background =
        "#38c172";

        return;
    }

    const d = Math.floor(
        distance /
        (1000*60*60*24)
    );

    const h = Math.floor(
        (distance %
        (1000*60*60*24))
        /
        (1000*60*60)
    );

    const m = Math.floor(
        (distance %
        (1000*60*60))
        /
        (1000*60)
    );

    const s = Math.floor(
        (distance %
        (1000*60))
        /
        1000
    );

    days.innerText =
    String(d).padStart(2,"0");

    hours.innerText =
    String(h).padStart(2,"0");

    minutes.innerText =
    String(m).padStart(2,"0");

    seconds.innerText =
    String(s).padStart(2,"0");
}

setInterval(updateCountdown,1000);
updateCountdown();


/* ===================================
   GIFT BUTTON
=================================== */

giftButton.addEventListener("click",()=>{

    if(!giftUnlocked){

        popup.style.display = "flex";
        return;
    }

    openGift();

});


/* ===================================
   CLOSE POPUP
=================================== */

closePopup.addEventListener("click",()=>{

    popup.style.display = "none";

});

popup.addEventListener("click",(e)=>{

    if(e.target === popup){

        popup.style.display = "none";
    }

});


/* ===================================
   OPEN GIFT
=================================== */

function openGift(){

    lockScreen.style.display =
    "none";

    openingScreen.style.display =
    "flex";

    setTimeout(()=>{

        openingScreen.style.display =
        "none";

        mainWebsite.style.display =
        "block";

        startTypewriter();

        createConfetti();

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    },3000);

}


/* ===================================
   JOURNEY BUTTON
=================================== */

const journeyBtn =
document.getElementById("journeyBtn");

if(journeyBtn){

    journeyBtn.addEventListener(
    "click",
    ()=>{

        document
        .querySelector(".wish-section")
        .scrollIntoView({
            behavior:"smooth"
        });

    });

}


/* ===================================
   TYPEWRITER
=================================== */

const typewriter =
document.getElementById("typewriter");

const birthdayMessage =

`Happy Birthday ❤️

Today is not just another day.

It's the celebration of the day
someone truly special came into this world.

I hope this year brings you happiness,
beautiful memories,
and everything your heart quietly wishes for.

Thank you for being you. ✨`;

let typeIndex = 0;

function startTypewriter(){

    if(!typewriter) return;

    typewriter.innerHTML = "";
    typeIndex = 0;

    writeText();
}

function writeText(){

    if(typeIndex <
       birthdayMessage.length){

        typewriter.innerHTML +=
        birthdayMessage.charAt(
            typeIndex
        );

        typeIndex++;

        setTimeout(
            writeText,
            40
        );
    }

}


/* ===================================
   MUSIC
=================================== */

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
    ()=>{

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


/* ===================================
   MEMORY CARDS
=================================== */

const cards =
document.querySelectorAll(
".memory-card"
);

cards.forEach(card=>{

    card.addEventListener(
    "click",
    ()=>{

        card.classList.toggle(
            "flip"
        );

    });

});


/* ===================================
   SECRET LETTER
=================================== */

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
    ()=>{

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


/* ===================================
   FINAL SURPRISE
=================================== */

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
    ()=>{

        surpriseScreen.style.display =
        "flex";

        createConfetti();

    });

}

if(surpriseScreen){

    surpriseScreen.addEventListener(
    "click",
    ()=>{

        surpriseScreen.style.display =
        "none";

    });

}


/* ===================================
   CONFETTI
=================================== */

function createConfetti(){

    for(let i=0;i<150;i++){

        const confetti =
        document.createElement("div");

        confetti.classList.add(
            "confetti"
        );

        confetti.style.left =
        Math.random()*100 + "vw";

        confetti.style.top =
        "-20px";

        confetti.style.background =
        `hsl(${Math.random()*360},
        100%,70%)`;

        confetti.style.animationDuration =
        (Math.random()*3+2)+"s";

        document.body.appendChild(
            confetti
        );

        setTimeout(()=>{

            confetti.remove();

        },5000);
    }

}


/* ===================================
   PETALS
=================================== */

const petalsContainer =
document.getElementById(
"petals-container"
);

function createPetal(){

    if(!petalsContainer) return;

    const petal =
    document.createElement("div");

    petal.classList.add(
        "petal"
    );

    petal.style.left =
    Math.random()*100 + "vw";

    petal.style.animationDuration =
    (Math.random()*5+5)+"s";

    petalsContainer.appendChild(
        petal
    );

    setTimeout(()=>{

        petal.remove();

    },10000);
}

setInterval(
    createPetal,
    400
);


/* ===================================
   SCROLL REVEAL
=================================== */

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
".reason-card,.memory-card,.chapter"
)
.forEach(item=>{

    item.classList.add("reveal");

    observer.observe(item);

});


/* ===================================
   DYNAMIC STYLES
=================================== */

const style =
document.createElement("style");

style.innerHTML = `

.confetti{

    position:fixed;

    width:10px;
    height:10px;

    z-index:99999;

    animation:
    confettiFall linear forwards;
}

@keyframes confettiFall{

    to{

        transform:
        translateY(110vh)
        rotate(720deg);

    }

}

.petal{

    position:absolute;

    top:-20px;

    width:12px;
    height:12px;

    background:#ffb6c1;

    border-radius:
    50% 0 50% 50%;

    transform:
    rotate(45deg);

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
