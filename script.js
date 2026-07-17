const audio = document.getElementById("audio");
const btn = document.getElementById("playBtn");

audio.loop = true;

function startSound(e) {
    e.preventDefault();
    if (audio.paused) {
        audio.play();
    }
}

function stopSound() {
    audio.pause();
    audio.currentTime = 0;
}

btn.addEventListener("pointerdown", startSound);
btn.addEventListener("pointerup", stopSound);
btn.addEventListener("pointerleave", stopSound);
btn.addEventListener("pointercancel", stopSound);
