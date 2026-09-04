const openButton = document.getElementById("openButton");
const opening = document.querySelector(".opening");
const birthdaySection = document.getElementById("birthday");

openButton.addEventListener("click", function () {
  // Ubah tulisan tombol
  openButton.innerHTML = "Opening... 💗";
  openButton.disabled = true;

  // Mulai efek keluar
  opening.classList.add("opening-hide");

  // Tunggu animasi selesai
  setTimeout(function () {
    birthdaySection.classList.add("birthday-show");

    birthdaySection.scrollIntoView({
      behavior: "smooth",
    });
  }, 800);
});

const wishButton = document.getElementById("wishButton");
const wishMessage = document.getElementById("wishMessage");

wishButton.addEventListener("click", function () {
  wishMessage.classList.add("show");

  wishButton.innerHTML = "Wish Made 💗";

  wishButton.disabled = true;
});

const storyButton = document.getElementById("storyButton");

storyButton.addEventListener("click", function () {
  storyButton.innerHTML = "Let's continue... 💗";

  setTimeout(function () {
    document.getElementById("memories").scrollIntoView({
      behavior: "smooth",
    });
  }, 500);
});

const memoryButton = document.getElementById("memoryButton");

memoryButton.addEventListener("click", function () {
  memoryButton.innerHTML = "Coming from my heart... 💌";

  setTimeout(function () {
    document.getElementById("things").scrollIntoView({
      behavior: "smooth",
    });
  }, 600);
});

const thingsButton = document.getElementById("thingsButton");

thingsButton.addEventListener("click", function () {
  thingsButton.innerHTML = "Something special is coming... 🎵";

  setTimeout(function () {
    document.getElementById("music").scrollIntoView({
      behavior: "smooth",
    });
  }, 700);
});

const audioPlayer = document.getElementById("audioPlayer");
const playButton = document.getElementById("playButton");
const musicCover = document.getElementById("musicCover");

const progressBar = document.getElementById("progressBar");

const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

/* =========================
   PLAY / PAUSE
========================= */

playButton.addEventListener("click", function () {
  if (audioPlayer.paused) {
    audioPlayer.play();

    playButton.innerHTML = "Ⅱ";

    musicCover.classList.add("playing");
  } else {
    audioPlayer.pause();

    playButton.innerHTML = "▶";

    musicCover.classList.remove("playing");
  }
});

/* =========================
   LOAD DURATION
========================= */

audioPlayer.addEventListener("loadedmetadata", function () {
  progressBar.max = audioPlayer.duration;

  duration.innerHTML = formatTime(audioPlayer.duration);
});

/* =========================
   UPDATE PROGRESS
========================= */

audioPlayer.addEventListener("timeupdate", function () {
  progressBar.value = audioPlayer.currentTime;

  currentTime.innerHTML = formatTime(audioPlayer.currentTime);
});

/* =========================
   SEEK
========================= */

progressBar.addEventListener("input", function () {
  audioPlayer.currentTime = progressBar.value;
});

/* =========================
   SONG ENDED
========================= */

audioPlayer.addEventListener("ended", function () {
  playButton.innerHTML = "▶";

  musicCover.classList.remove("playing");

  progressBar.value = 0;
});

/* =========================
   TIME FORMAT
========================= */

function formatTime(time) {
  if (isNaN(time)) {
    return "0:00";
  }

  const minutes = Math.floor(time / 60);

  const seconds = Math.floor(time % 60);

  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

/* =========================
   LETTER
========================= */

const envelopeWrapper = document.getElementById("envelopeWrapper");

const letterPaper = document.getElementById("letterPaper");

envelopeWrapper.addEventListener("click", function () {
  envelopeWrapper.classList.add("open");

  setTimeout(function () {
    letterPaper.classList.add("show");

    letterPaper.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 900);
});

/* =========================
   FINAL SURPRISE
========================= */

const finalButton = document.getElementById("finalButton");

const finalSection = document.getElementById("final");

const finalContent = document.getElementById("finalContent");

const heartConfetti = document.getElementById("heartConfetti");

finalButton.addEventListener("click", function () {
  finalButton.innerHTML = "For you... 💗";

  setTimeout(function () {
    finalSection.scrollIntoView({
      behavior: "smooth",
    });

    setTimeout(function () {
      finalContent.classList.add("show");

      createHearts();
    }, 800);
  }, 600);
});

/* =========================
   HEARTS
========================= */

function createHearts() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("span");

    heart.innerHTML = Math.random() > 0.5 ? "♡" : "💗";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.animationDelay = Math.random() * 2 + "s";

    heart.style.fontSize = 14 + Math.random() * 18 + "px";

    heartConfetti.appendChild(heart);
  }
}

const letterButton = document.getElementById("letterButton");

letterButton.addEventListener("click", function () {
  letterButton.innerHTML = "Opening my letter... 💌";

  setTimeout(function () {
    document.getElementById("letter").scrollIntoView({
      behavior: "smooth",
    });
  }, 700);
});

/* =========================
NAME SCREEN
========================= */

const nameScreen = document.getElementById("nameScreen");
const nameInput = document.getElementById("nameInput");
const nameButton = document.getElementById("nameButton");
const nameError = document.getElementById("nameError");

nameButton.addEventListener("click", enterName);

nameInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    enterName();
  }
});

function enterName() {
  const name = nameInput.value.trim();

  if (name === "") {
    nameError.innerHTML = "Hmm... namanya belum diisi 😭💗";

    nameInput.focus();

    return;
  }

  nameButton.innerHTML = "Welcome... 💗";
  nameButton.disabled = true;

  nameError.innerHTML = "";

  setTimeout(function () {
    nameScreen.classList.add("hide");

    // Kalau nama yang dimasukkan adalah Ayaavzc,
    // tampilkan nama tersebut di halaman berikutnya.

    const birthdayTitle = document.querySelector("#birthday h1");

    if (birthdayTitle && name) {
      birthdayTitle.innerHTML = `Happy Birthday ${name} 🎂`;
    }
  }, 800);
}
