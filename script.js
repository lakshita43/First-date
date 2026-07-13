const openBtn = document.getElementById("open");
const card = document.getElementById("card");
const question = document.getElementById("question");

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

const yay = document.getElementById("yay");

const canvas = document.getElementById("fx");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Open the envelope
openBtn.addEventListener("click", () => {
    card.classList.add("hidden");
    question.classList.remove("hidden");
});

// Make NO button run away
noBtn.addEventListener("mouseover", () => {

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});

// YES button
yesBtn.addEventListener("click", () => {

    yay.classList.remove("hidden");

    launchConfetti();

});

// Resize canvas
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ----------------------------
// Confetti
// ----------------------------

function launchConfetti(){

    let pieces = [];

    for(let i=0;i<250;i++){

        pieces.push({

            x:Math.random()*canvas.width,
            y:-20,

            size:Math.random()*8+4,

            speed:Math.random()*5+3,

            color:`hsl(${Math.random()*360},100%,60%)`

        });

    }

    function animate(){

        ctx.clearRect(0,0,canvas.width,canvas.height);

        pieces.forEach(p=>{

            p.y += p.speed;

            ctx.beginPath();

            ctx.fillStyle = p.color;

            ctx.arc(p.x,p.y,p.size,0,Math.PI*2);

            ctx.fill();

        });

        if(pieces.some(p=>p.y<canvas.height)){

            requestAnimationFrame(animate);

        }

    }

    animate();

}
