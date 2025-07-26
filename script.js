// Kalimat ucapan
const kalimat = [
  "Hai sayangku... 💖🥰",
  "Gimana kabarmu hari ini? Semoga kamu selalu sehat, bahagia, dan tersenyum yaa 😘🌷",
  "Hari ini spesial banget, karena hari ini adalah hari ulang tahun kamu yang ke-20 🎂🎉",
  "Aku mau cerita dikit bolee yaa... 😉💕",
  "Kita kan udah kenal sejak kita masih SMK ya ayy 🏫💌",
  "Waktu itu aku masih polos banget, belum tahu apa-apa tentang cinta 😅❤️",  
  "Kita udah jalanin semuanya sampai sejauh ini, walaupun nggak selalu mulus... 🌧️➡️🌈",
  "Bahkan sempat beberapa kali kita berpisah... 😢💔",
  "Tapi entah kenapa, hati ini selalu balik lagi ke kamu. 🧲💞",
  "Buat aku itu bukti kalau kita saling butuh, saling cinta, dan saling melengkapi. 👫💗",
  "Aku nggak pernah nyangka, orang yang dulu aku kenal di masa sekolah, sekarang jadi orang paling penting di hidupku. ✨❤️",
  "Terima kasih ya, sudah mau bertahan sama aku selama ini. 🤗💕",
  "Terima kasih udah nerima aku dengan segala kekurangan dan keras kepalaku. 😌🌹",
  "Aku janji, aku bakal terus berusaha jadi versi terbaik buat kamu. ✨💪",
  "Aku nggak minta apa-apa selain kamu tetap ada di sampingku. 🤍",
  "Semoga tahun ini jadi awal yang lebih indah buat kita, penuh tawa, kebahagiaan, dan cinta yang makin kuat. 🥳💝",
  "Selamat ulang tahun, cintakuu... ❤️🎂",
  "Semoga semua yang kamu impikan tercapai, dan semoga kita bisa terus bersama selamanya ya sayangg... 🥰🌸",
  "Aku sayang kamu, sekarang, besok, dan selamanya. 💖🌷💍"
];

let kalimatIndex = 0;
let hurufIndex = 0;
const textEl = document.getElementById("onlytext");
const backsound = document.getElementById("backsound");

// Fungsi ketik huruf per huruf
function tampilHuruf(teks) {
  textEl.textContent = "";
  hurufIndex = 0;
  clearInterval(window.typingInterval);
  window.typingInterval = setInterval(() => {
    if (hurufIndex < teks.length) {
      textEl.textContent += teks[hurufIndex];
      hurufIndex++;
    } else {
      clearInterval(window.typingInterval);
    }
  }, 50);
}

// Next / Prev kalimat
function nextKalimat() {
  if (kalimatIndex < kalimat.length - 1) {
    kalimatIndex++;
    tampilHuruf(kalimat[kalimatIndex]);
  } else {
    document.getElementById("ending").classList.add("show");
  }
}

function prevKalimat() {
  if (kalimatIndex > 0) {
    kalimatIndex--;
    tampilHuruf(kalimat[kalimatIndex]);
  }
}

// Mulai setelah klik love
function startLove() {
  document.getElementById("intro").style.opacity = 0;
  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
  }, 1000);

  backsound.play();
  tampilHuruf(kalimat[kalimatIndex]);

  // Efek love jatuh
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerText = "❤️";
    heart.className = "falling-heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 2 + Math.random() * 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 300);
}

// Replay
function replayWeb() {
  backsound.pause();
  backsound.currentTime = 0;

  document.getElementById("ending").classList.remove("show");
  kalimatIndex = 0;
  textEl.textContent = "";

  document.getElementById("intro").style.display = "flex";
  document.getElementById("intro").style.opacity = 1;
}
// --- Tambahan untuk stiker lucu ---
const introStickers = document.getElementById("intro-stickers");
const stickerEmojis = ["🌸", "🌼", "⭐", "💮", "🌷", "✨"];

function spawnSticker() {
  const sticker = document.createElement("div");
  sticker.className = "sticker";
  sticker.textContent = stickerEmojis[Math.floor(Math.random() * stickerEmojis.length)];
  sticker.style.left = Math.random() * 100 + "vw";
  sticker.style.fontSize = (20 + Math.random() * 20) + "px";
  introStickers.appendChild(sticker);

  // Hapus setelah animasi selesai
  setTimeout(() => {
    sticker.remove();
  }, 5000);
}

// Jalankan spawn stiker tiap 800ms
setInterval(() => {
  if (document.getElementById("intro").style.display !== "none") {
    spawnSticker();
  }
}, 800);
