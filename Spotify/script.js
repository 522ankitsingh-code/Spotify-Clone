let play = document.getElementById('play');
let progressBar = document.getElementById('progressBar');
let audio = new Audio('Audio/1.mp3');

let currentSong = 1;

play.addEventListener('click', () => {
    if (audio.paused || audio.currentTime == 0) {
        audio.play();
        play.classList.replace('fa-circle-play', 'fa-circle-pause');
    } else {
        audio.pause();
        play.classList.replace('fa-circle-pause', 'fa-circle-play');
    }
});

audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        let progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;
        progressBar.style.background = `linear-gradient(to right, #21a600 ${progress}%, #333 ${progress}%)`;
    }
});

progressBar.addEventListener('input', function () {
    let value = this.value;
    this.style.background = `linear-gradient(to right, #21a600 ${value}%, #333 ${value}%)`;
    if (audio.duration) {
        audio.currentTime = (value * audio.duration) / 100;
    }
});

let playMusicBtns = Array.from(document.getElementsByClassName('playMusic'));
let allMusic = Array.from(document.getElementsByClassName('music-card'));

let songs = [
    { songName: 'Jaan Se Guzarte Hain', songDes: 'Khan Saab', songImage: 'https://c.saavncdn.com/581/Dhurandhar-The-Revenge-Hindi-2026-20260324162314-500x500.jpg', songPath: 'Audio/1.mp3' },
    { songName: 'Tu Hi Disda', songDes: 'Arijit Singh', songImage: 'https://c.saavncdn.com/275/Tu-Hi-Disda-From-Bhooth-Bangla-Hindi-2026-20260324145409-500x500.jpg', songPath: 'Audio/2.mp3' },
    { songName: 'Ek Din', songDes: 'Ram Sampath', songImage: 'https://c.saavncdn.com/265/Ek-Din-Original-Motion-Picture-Soundtrack-Hindi-2026-20260403143442-500x500.jpg', songPath: 'Audio/3.mp3' },
    { songName: 'Touch Buddy', songDes: 'Pawan Singh', songImage: 'https://c.saavncdn.com/686/Touch-Buddy-From-Dacoit-Hindi-Hindi-2026-20260326163642-500x500.jpg', songPath: 'Audio/4.mp3' },
    { songName: 'Chand Dekh lena', songDes: 'Himesh Reshamiya', songImage: 'https://c.saavncdn.com/846/Chand-Dekh-Lena-From-Maatrubhumi-May-War-Rest-in-Peace-Hindi-2026-20260318185557-500x500.jpg', songPath: 'Audio/5.mp3' },
    { songName: 'Tabaahi', songDes: 'Vishal Mishra', songImage: 'https://c.saavncdn.com/776/Tabaahi-From-Toxic-Hindi-2026-20260302122113-500x500.jpg', songPath: 'Audio/6.mp3' },
    { songName: 'Arz Kiya Hai', songDes: 'Anuv Jain', songImage: 'https://c.saavncdn.com/504/Arz-Kiya-Hai-Coke-Studio-Bharat-Hindi-2025-20250818054005-500x500.jpg', songPath: 'Audio/7.mp3' },
    { songName: 'Sitaara', songDes: 'Arijit Singh', songImage: 'https://c.saavncdn.com/856/Sitaare-From-Ikkis-Hindi-2025-20251203170135-500x500.jpg', songPath: 'Audio/8.mp3' },
    { songName: 'Aaj Bhi 2', songDes: 'Vishal Mishra', songImage: 'https://c.saavncdn.com/967/Aaj-Bhi-2-Hindi-2024-20240910053147-500x500.jpg', songPath: 'Audio/9.mp3' },
    { songName: 'Sahiba', songDes: 'Stebin ben', songImage: 'https://c.saavncdn.com/485/Sahiba-Hindi-2024-20241112165036-500x500.jpg', songPath: 'Audio/10.mp3' },

    { songName: 'Jaate Hue Lamhon', songDes: 'Vishal Mishra', songImage: 'https://c.saavncdn.com/795/BORDER-2-Original-Motion-Picture-Soundtrack-Hindi-2026-20260119121003-500x500.jpg', songPath: 'Audio/11.mp3' },

    { songName: 'Aari Aari', songDes: 'Shashwat Sachdev', songImage: 'https://c.saavncdn.com/581/Dhurandhar-The-Revenge-Hindi-2026-20260324162314-500x500.jpg', songPath: 'Audio/12.mp3' },

    { songName: 'Dhun', songDes: 'Arijit Singh', songImage: 'https://c.saavncdn.com/307/Dhun-From-Saiyaara-Hindi-2025-20250630103138-500x500.jpg', songPath: 'Audio/13.mp3' },

    { songName: 'Mera Hua', songDes: 'Sachin Urmtosh', songImage: 'https://c.saavncdn.com/663/Mera-Hua-From-Ek-Deewane-Ki-Deewaniyat-Original-Motion-Picture-Soundtrack-Hindi-2025-20251001170605-500x500.jpg', songPath: 'Audio/14.mp3' },

    { songName: 'Ghera Hua', songDes: 'Arijit Singh', songImage: 'https://c.saavncdn.com/450/Gehra-Hua-From-Dhurandhar-Hindi-2025-20251205154217-500x500.jpg', songPath: 'Audio/15.mp3' },
    
    { songName: 'Saiyaara', songDes: 'Tanishk Bagchi', songImage: 'https://c.saavncdn.com/598/Saiyaara-Hindi-2025-20250703061754-500x500.jpg', songPath: 'Audio/16.mp3' },
    
    { songName: 'Dil Chahte Ho', songDes: 'Jubin Nautiyal', songImage: 'https://c.saavncdn.com/831/Dil-Chahte-Ho-Hindi-2020-20200828084001-500x500.jpg', songPath: 'Audio/17.mp3' },
    
    { songName: 'Is Qadar', songDes: 'Darshan Raval', songImage: 'https://c.saavncdn.com/349/Is-Qadar-Hindi-2021-20210408051001-500x500.jpg', songPath: 'Audio/18.mp3' }
];

function makeAllPlay() {
    playMusicBtns.forEach((el) => {
        el.classList.remove('fa-circle-pause');
        el.classList.add('fa-circle-play');
    });
}

playMusicBtns.forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay();
        let btn = e.currentTarget;
        btn.classList.replace('fa-circle-play', 'fa-circle-pause');
        let index = parseInt(btn.id);
        currentSong = index;
        audio.src = songs[index - 1].songPath;
        audio.currentTime = 0;
        audio.play();
        play.classList.replace('fa-circle-play', 'fa-circle-pause');
        updateNowBar();
    });
});

allMusic.forEach((element, i) => {
    element.querySelector('img').src = songs[i].songImage;
    element.querySelector('.img-title').innerText = songs[i].songName;
    element.querySelector('.img-description').innerText = songs[i].songDes;
});

let nowBar = document.querySelector('.now-bar');

function updateNowBar() {
    if (nowBar && songs[currentSong - 1]) {
        nowBar.querySelector('img').src = songs[currentSong - 1].songImage;
        nowBar.querySelector('.img-title-info').innerText = songs[currentSong - 1].songName;
        nowBar.querySelector('.img-des-info').innerText = songs[currentSong - 1].songDes;
    }
}

function playNextSong() {
    currentSong = currentSong >= songs.length ? 1 : currentSong + 1;
    audio.src = songs[currentSong - 1].songPath;
    audio.currentTime = 0;
    audio.play();
    makeAllPlay();
    playMusicBtns[currentSong - 1]?.classList.replace('fa-circle-play', 'fa-circle-pause');
    play.classList.replace('fa-circle-play', 'fa-circle-pause');
    updateNowBar();
}

function playPrevSong() {
    currentSong = currentSong <= 1 ? songs.length : currentSong - 1;
    audio.src = songs[currentSong - 1].songPath;
    audio.currentTime = 0;
    audio.play();
    makeAllPlay();
    playMusicBtns[currentSong - 1]?.classList.replace('fa-circle-play', 'fa-circle-pause');
    play.classList.replace('fa-circle-play', 'fa-circle-pause');
    updateNowBar();
}

document.getElementById('forward')?.addEventListener('click', playNextSong);
document.getElementById('backward')?.addEventListener('click', playPrevSong);

audio.addEventListener('ended', playNextSong);

document.querySelectorAll(".scrollWrapper").forEach(wrapper => {
    const container = wrapper.querySelector(".songs");
    const leftBtn = wrapper.querySelector(".left");
    const rightBtn = wrapper.querySelector(".Right"); 

    if (leftBtn) {
        leftBtn.addEventListener("click", () => {
            container.scrollBy({ left: -300, behavior: "smooth" });
        });
    }

    if (rightBtn) {
        rightBtn.addEventListener("click", () => {
            container.scrollBy({ left: 300, behavior: "smooth" });
        });
    }
});