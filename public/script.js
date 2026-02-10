const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (username === "admin" && password === "admin123") {
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Username or Password");
    }
});
const audio = document.getElementById("audio");
const currentSongText = document.getElementById("current-song");
const playPauseBtn = document.getElementById("playPauseBtn");

let isPlaying = false;

function playSong(songPath, songName) {
    audio.src = songPath;
    audio.play();
    currentSongText.textContent = "Playing: " + songName;
    playPauseBtn.textContent = "Pause";
    isPlaying = true;
}

playPauseBtn.addEventListener("click", function () {
    if (!audio.src) return;

    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = "Play";
    } else {
        audio.play();
        playPauseBtn.textContent = "Pause";
    }

    isPlaying = !isPlaying;
});
