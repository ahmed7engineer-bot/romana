const audio = document.getElementById("audio");
const btn = document.getElementById("playBtn");

btn.addEventListener("mousedown", () => {
    audio.currentTime = 0;
    audio.play();
});

btn.addEventListener("mouseup", () => {
    audio.pause();
    audio.currentTime = 0;
});

btn.addEventListener("mouseleave", () => {
    audio.pause();
    audio.currentTime = 0;
});

// للموبايل
btn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    audio.currentTime = 0;
    audio.play();
});

btn.addEventListener("touchend", () => {
    audio.pause();
    audio.currentTime = 0;
});
