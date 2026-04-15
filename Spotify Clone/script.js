console.log("Spotify Clone JS Connected");

// Select elements from your HTML
let playButton = document.querySelector(".player-controls img:nth-child(3)");
let progressBar = document.querySelector(".progress-bar");
let currentTime = document.querySelector(".curr-time");
let totalTime = document.querySelector(".tot-time");

// Load audio file
let audio = new Audio("./assets/song.mp3");

// Play / Pause functionality
playButton.addEventListener("click", function () {

    if (audio.paused) {
        audio.play();
        playButton.src = "./assets/pause_icon.png";
    } 
    else {
        audio.pause();
        playButton.src = "./assets/player_icon3.png";
    }

});

// Update progress bar
audio.addEventListener("timeupdate", function () {

    let progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;

    // Update current time
    let minutes = Math.floor(audio.currentTime / 60);
    let seconds = Math.floor(audio.currentTime % 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    currentTime.innerText = minutes + ":" + seconds;

});

// Move song when slider changes
progressBar.addEventListener("input", function () {

    let seekTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;

});

// Set total duration
audio.addEventListener("loadedmetadata", function () {

    let minutes = Math.floor(audio.duration / 60);
    let seconds = Math.floor(audio.duration % 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    totalTime.innerText = minutes + ":" + seconds;

});

let audio = document.getElementById("song");