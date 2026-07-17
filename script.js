const audio = document.getElementById("audio");
const btn = document.getElementById("playBtn");

btn.onclick = () => {
    if (audio.paused) {
        audio.play();
        btn.textContent = "⏸️ إيقاف الصوت";
    } else {
        audio.pause();
        audio.currentTime = 0;
        btn.textContent = "▶️ تشغيل الصوت";
    }
};
