const landing = document.getElementById("landing");
const questionPage = document.getElementById("questionPage");
const success = document.getElementById("success");

const openBtn = document.getElementById("openBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const typing = document.getElementById("typing");
const musicBtn = document.getElementById("music");

const messages = [
    "🥺 Really?",
    "Pretty please? 🌸",
    "Think again 💕",
    "Come on 😭",
    "Nice try 😂",
    "You can't catch me!"
];

let msg = 0;

// ---------- Open Letter ----------

openBtn.addEventListener("click", () => {

    landing.classList.add("hidden");

    setTimeout(() => {

        questionPage.classList.remove("hidden");

        typeText();

    },400);

});

// ---------- Typewriter ----------

function typeText(){

    const text = "Hey Teena... I have a tiny question for you ❤️";

    let i=0;

    typing.innerHTML="";

    const type = setInterval(()=>{

        typing.innerHTML += text.charAt(i);

        i++;

        if(i>=text.length){

            clearInterval(type);

        }

    },55);

}

// ---------- NO Button ----------

noBtn.addEventListener("mouseenter",moveButton);

noBtn.addEventListener("click",moveButton);

function moveButton(){

    const x=Math.random()*(window.innerWidth-180);

    const y=Math.random()*(window.innerHeight-80);

    noBtn.style.position="fixed";
    noBtn.style.left=x+"px";
    noBtn.style.top=y+"px";

    noBtn.innerHTML=messages[msg];

    msg++;

    if(msg>=messages.length){

        msg=0;

    }

}

// ---------- YES ----------

yesBtn.addEventListener("click",()=>{

    questionPage.classList.add("hidden");

    success.classList.remove("hidden");

    hearts();

    fireworks();

});

// ---------- Music ----------

musicBtn.addEventListener("click",()=>{

window.open(
"https://www.youtube.com/results?search_query=Until+I+Found+You+Stephen+Sanchez",
"_blank"
);

});

// ---------- Floating Hearts ----------

function hearts(){

    for(let i=0;i<50;i++){

        let heart=document.createElement("div");

        heart.innerHTML="💖";

        heart.style.position="fixed";

        heart.style.left=Math.random()*100+"vw";

        heart.style.bottom="-30px";

        heart.style.fontSize=(20+Math.random()*30)+"px";

        heart.style.animation=`float ${4+Math.random()*4}s linear forwards`;

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },8000);

    }

}

// ---------- Fireworks ----------

const canvas=document.getElementById("canvas");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

});

function fireworks(){

let particles=[];

for(let i=0;i<250;i++){

particles.push({

x:canvas.width/2,

y:canvas.height/2,

dx:(Math.random()-0.5)*10,

dy:(Math.random()-0.5)*10,

size:2+Math.random()*4,

life:100,

color:`hsl(${Math.random()*360},100%,65%)`

});

}

animate();

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach((p,index)=>{

p.x+=p.dx;

p.y+=p.dy;

p.life--;

ctx.beginPath();

ctx.arc(p.x,p.y,p.size,0,Math.PI*2);

ctx.fillStyle=p.color;

ctx.fill();

if(p.life<=0){

particles.splice(index,1);

}

});

if(particles.length>0){

requestAnimationFrame(animate);

}

}

}
