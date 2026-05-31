const letterText = `

Bebe Aira,

Alam kong lagi akong may pagkakamaling ginagawa at marami pa akong kahinaan.
Sorry po talaga.

Ikaw ang pinakaimportanteng tao sa buhay ko.
Lagi na lang akong dahilan kung bakit tayo nag-aaway,
at sobra akong nagsisisi sa mga pagkakataong nasasaktan kita.

Pasensya ka na kung minsan ay hindi ko naipapakita nang maayos
kung gaano kita kamahal at kung gaano ka kahalaga sa akin.

Maraming salamat, bebe ko,
sa pagmamahal, pag-unawa, at saya na ibinibigay mo sa akin.

Kahit minsan ay nagiging makulit, matigas ang ulo,
at nagkakamali ako, nandiyan ka pa rin.

Salamat sa pagtitiis kahit hindi ako perpektong tao.

Pangako, patuloy akong magbabago at gagawin ang lahat
para mapasaya ka at maipakita kung gaano kita kamahal.

Mahal na mahal kita.

Forever yours,

❤️ Bebe Mo ❤️

`;

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const letter = document.getElementById("letter");

document
.getElementById("acceptBtn")
.addEventListener("click", () => {

    page1.classList.add("hidden");
    page2.classList.remove("hidden");

    typeWriter();
});

let index = 0;

function typeWriter(){

    if(index < letterText.length){

        letter.innerHTML += letterText.charAt(index);

        index++;

        setTimeout(typeWriter, 25);
    }
}

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💖";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.bottom = "-50px";

    heart.style.fontSize =
        (20 + Math.random()*30) + "px";

    heart.style.animationDuration =
        (5 + Math.random()*5) + "s";

    document
    .getElementById("hearts-container")
    .appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);
}

setInterval(createHeart,300);
