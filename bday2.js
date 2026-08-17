/* =========================================================
   STORYMINT — BIRTHDAY LETTER
   ---------------------------------------------------------
   EDIT EVERYTHING HERE.
   This page has no editable fields on the page itself —
   change the birthday date, name, letter message, photos
   and surprise words by editing CONFIG below, then re-open
   the file (or re-upload it wherever it's hosted).
========================================================= */

const CONFIG = {

  // Dayy of the month being celebrated (1–31)
  day: 24,

  // The birthday person's name, shown on the memory wall and letter
  name: "SAKSHI",

  // The letter message. Use \n for line breaks.
  message:
`I hope your birthday brings you all the happiness your heart deserves. May the coming year be filled with beautiful moments, genuine smiles, and wonderful memories.

May everything you’ve been wishing for slowly find its way into your life.

Never forget how amazing and special you are. Wishing you a beautiful birthday and an even more beautiful year ahead. ❤️

Happy Birthday ♡`,

  // Nine memory-wall photos. Leave src empty ("") for a soft
  // placeholder card, or point it at an image URL / base64 string.
  photos:[
    { src:"1.jpg", caption:"♡"},
    { src:"2.jpg", caption:"♡"},
    { src:"3.jpg", caption:"♡"},
    { src:"4.jpg", caption:"♡"},
    { src:"5.jpg", caption:"♡"},
    { src:"6.jpg", caption:"♡"},
    { src:"7.jpg", caption:"♡"},
    { src:"8.jpg", caption:"♡"},
    { src:"us.jpg", caption:"us" }
  ],

  // Little floating words shown on the final surprise screen
  surpriseWords:[
    "i love your laugh",
    "you make me happy",
    "you are so beautiful",
    "you mean everything",
    "so glad you exist",
    "forever cheering for you"
  ]

};


/* ---------------------------------------------------------
   STATE
--------------------------------------------------------- */

const state = {
  scene:0,
  blown:false
};

const scenes = [...document.querySelectorAll(".scene")];
const progressDots = [...document.querySelectorAll(".progress-dot")];

const dateNumber = document.getElementById("dateNumber");
const dateSuffix = document.getElementById("dateSuffix");
const dayEcho = document.getElementById("dayEcho");

const startBtn = document.getElementById("startBtn");

const cake = document.getElementById("cake");
const tapBlow = document.getElementById("tapBlow");
const micBlow = document.getElementById("micBlow");
const candleMessage = document.getElementById("candleMessage");
const birthdayNext = document.getElementById("birthdayNext");

const nameDisplay = document.getElementById("nameDisplay");
const nameEcho = document.getElementById("nameEcho");
const memoryNext = document.getElementById("memoryNext");
const polaroidGrid = document.getElementById("polaroidGrid");

const envelope = document.getElementById("envelope");
const letterPaper = document.getElementById("letterPaper");
const openNote = document.getElementById("openNote");
const messageDisplay = document.getElementById("messageDisplay");

const surprise = document.getElementById("surprise");
const surpriseBtn = document.getElementById("surpriseBtn");
const closeSurprise = document.getElementById("closeSurprise");
const surpriseWords = document.getElementById("surpriseWords");

const restartBtn = document.getElementById("restartBtn");


/* ---------------------------------------------------------
   RENDER CONFIG INTO THE PAGE
--------------------------------------------------------- */

function getSuffix(day){

  const n = Number(day);

  if(n >= 11 && n <= 13){
    return "th";
  }

  switch(n % 10){
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
}


function renderConfig(){

  const day = Math.min(31,Math.max(1,Number(CONFIG.day) || 1));

  dateNumber.textContent = day;
  dateSuffix.textContent = getSuffix(day);
  dayEcho.textContent = day;

  const name = (CONFIG.name || "").trim() || "Sweety";

  nameDisplay.textContent = name;
  nameEcho.textContent = name;

  messageDisplay.textContent = CONFIG.message || "";

  polaroidGrid.innerHTML = "";

  const rotations = [-5,4,-3,5,-4,3,-3,4,-5];

  CONFIG.photos.forEach((photo,index)=>{

    const card = document.createElement("div");

    card.className = "polaroid";
    card.style.setProperty("--rotation",(rotations[index % rotations.length]) + "deg");

    const photoBox = document.createElement("div");
    photoBox.className = "photo";

    if(photo && photo.src){

      const image = document.createElement("img");
      image.src = photo.src;
      image.alt = photo.caption ? photo.caption : "Memory photograph";

      photoBox.appendChild(image);

    }else{

      const mark = document.createElement("span");
      mark.className = "placeholder-mark";
      mark.textContent = "♡";

      photoBox.appendChild(mark);
    }

    const caption = document.createElement("span");
    caption.className = "photo-caption";
    caption.textContent = photo && photo.caption ? photo.caption : "";

    card.appendChild(photoBox);
    card.appendChild(caption);

    polaroidGrid.appendChild(card);

  });

  surpriseWords.innerHTML = "";

  (CONFIG.surpriseWords || []).forEach(text=>{

    const span = document.createElement("span");
    span.className = "word";
    span.textContent = text;

    surpriseWords.appendChild(span);

  });

}


/* ---------------------------------------------------------
   SCENES
--------------------------------------------------------- */

function goToScene(index){

  index = Math.max(
    0,
    Math.min(scenes.length - 1,index)
  );

  state.scene = index;

  scenes.forEach((scene,i)=>{

    scene.classList.toggle(
      "active",
      i === index
    );

  });


  progressDots.forEach((dot,i)=>{

    dot.classList.toggle(
      "active",
      i === index
    );

    dot.classList.toggle(
      "done",
      i < index
    );

  });

}


startBtn.addEventListener("click",()=>{

  goToScene(1);

});


document.querySelectorAll("[data-back]")
.forEach(button=>{

  button.addEventListener("click",()=>{

    goToScene(state.scene - 1);

  });

});


/* ---------------------------------------------------------
   CAKE
--------------------------------------------------------- */

function blowCandles(){

  if(state.blown){
    return;
  }

  state.blown = true;

  cake.classList.add("blown");

  candleMessage.textContent =
    "wish made ✨";

  tapBlow.style.display = "none";
  micBlow.style.display = "none";

  birthdayNext.style.display = "inline-flex";

  createConfetti();

}


tapBlow.addEventListener("click",blowCandles);


birthdayNext.addEventListener("click",()=>{

  goToScene(2);

});


/* ---------------------------------------------------------
   CONFETTI
--------------------------------------------------------- */

function createConfetti(){

  const colors = [
    "#7e1f2d",
    "#bd6970",
    "#c49b57",
    "#60785d",
    "#ead0ce"
  ];

  for(let i=0;i<35;i++){

    const piece = document.createElement("span");

    piece.style.position = "fixed";
    piece.style.left = Math.random()*100 + "vw";
    piece.style.top = "-20px";

    piece.style.width =
      (Math.random()*6 + 4) + "px";

    piece.style.height =
      (Math.random()*9 + 6) + "px";

    piece.style.background =
      colors[
        Math.floor(Math.random()*colors.length)
      ];

    piece.style.zIndex = "150";

    piece.style.transform =
      `rotate(${Math.random()*360}deg)`;

    piece.style.pointerEvents = "none";

    document.body.appendChild(piece);

    const duration =
      1400 + Math.random()*1600;

    piece.animate(
      [
        {
          transform:
            `translateY(0) rotate(0deg)`
        },
        {
          transform:
            `translateY(110vh) translateX(${(Math.random()-.5)*180}px) rotate(720deg)`
        }
      ],
      {
        duration,
        easing:"cubic-bezier(.2,.7,.3,1)"
      }
    );

    setTimeout(()=>{
      piece.remove();
    },duration + 100);

  }

}


/* ---------------------------------------------------------
   MICROPHONE BLOW
--------------------------------------------------------- */

let audioContext = null;
let microphoneStream = null;
let animationId = null;


async function startMicrophone(){

  if(state.blown){
    return;
  }

  if(
    !navigator.mediaDevices ||
    !navigator.mediaDevices.getUserMedia
  ){
    candleMessage.textContent =
      "mic unavailable — tap the button instead 💨";
    return;
  }

  try{

    microphoneStream =
      await navigator.mediaDevices.getUserMedia({
        audio:true
      });

    audioContext =
      new (
        window.AudioContext ||
        window.webkitAudioContext
      )();

    const source =
      audioContext.createMediaStreamSource(
        microphoneStream
      );

    const analyser =
      audioContext.createAnalyser();

    analyser.fftSize = 512;

    source.connect(analyser);

    const data =
      new Uint8Array(
        analyser.frequencyBinCount
      );

    let strongFrames = 0;

    micBlow.textContent = "listening…";

    function listen(){

      analyser.getByteFrequencyData(data);

      const average =
        data.reduce(
          (sum,value)=>sum + value,
          0
        ) / data.length;

      if(average > 28){
        strongFrames++;
      }else{
        strongFrames =
          Math.max(
            0,
            strongFrames - 1
          );
      }

      if(strongFrames > 8){

        stopMicrophone();

        blowCandles();

        return;
      }

      animationId =
        requestAnimationFrame(listen);

    }

    listen();

  }catch(error){

    candleMessage.textContent =
      "mic blocked — tap to blow instead 💨";

    stopMicrophone();

  }

}


function stopMicrophone(){

  if(animationId){
    cancelAnimationFrame(animationId);
    animationId = null;
  }

  if(microphoneStream){

    microphoneStream
      .getTracks()
      .forEach(track=>track.stop());

    microphoneStream = null;

  }

  if(audioContext){

    audioContext
      .close()
      .catch(()=>{});

    audioContext = null;

  }

  micBlow.textContent =
    "🎤 use mic";
}


micBlow.addEventListener(
  "click",
  startMicrophone
);


memoryNext.addEventListener("click",()=>{

  goToScene(3);

});


/* ---------------------------------------------------------
   ENVELOPE
--------------------------------------------------------- */

function openEnvelope(){

  if(envelope.classList.contains("open")){
    return;
  }

  envelope.classList.add("open");

  setTimeout(()=>{

    envelope.classList.add("hidden");

    letterPaper.classList.add("show");

    openNote.textContent =
      "a little letter, just for you ♡";

  },700);

}


envelope.addEventListener(
  "click",
  openEnvelope
);


envelope.addEventListener(
  "keydown",
  e=>{

    if(e.key === "Enter" || e.key === " "){
      e.preventDefault();
      openEnvelope();
    }

  }
);


/* ---------------------------------------------------------
   SURPRISE
--------------------------------------------------------- */

surpriseBtn.addEventListener(
  "click",
  ()=>{

    surprise.classList.add("show");

  }
);


closeSurprise.addEventListener(
  "click",
  ()=>{

    surprise.classList.remove("show");

  }
);


/* ---------------------------------------------------------
   RESTART
--------------------------------------------------------- */

restartBtn.addEventListener(
  "click",
  ()=>{

    state.scene = 0;
    state.blown = false;

    cake.classList.remove("blown");

    candleMessage.textContent =
      "blow out the candles ✨";

    tapBlow.style.display =
      "inline-flex";

    micBlow.style.display =
      "inline-flex";

    birthdayNext.style.display =
      "none";

    envelope.classList.remove("open");
    envelope.classList.remove("hidden");

    letterPaper.classList.remove("show");

    surprise.classList.remove("show");

    goToScene(0);

  }
);


/* ---------------------------------------------------------
   INITIAL STATE
--------------------------------------------------------- */

renderConfig();
goToScene(0);