const song = document.getElementById("song");
const playBtn = document.querySelector(".player-inner");
let songName = document.querySelector("#song-name");
let isPlaying = true;
const backwardBtn = document.getElementById("backward");
const forwardBtn = document.getElementById("forward");
const repeatBtn = document.getElementById("repeat")
const shuffleBtn = document.getElementById("shuffle")
repeatBtn.style.opacity = '0.5';
shuffleBtn.style.opacity = '0.5';
const musics = ["Every Body-Bee Remix.mp3",
    "Hoa Nở Không Màu-Han Remix.mp3",
    "Gọi Mưa-Han Remix.mp3",
    "Money-Kang ft Kai Remix.mp3",
    "Some One You Loved-Han ft Ngọc Bảo Remix.mp3",
    "Bên trên tầng lầu-Dezin Remix.mp3",
    "It Up-Thiện Matthew Remix.mp3",
    "That Not My Name-Haozi Remix.mp3",
    "The Magic Bomb-Hoàng Read Remix.mp3",
    "Dragostea Din Tei-Veetee Remix.mp3"];
let currentIndex = 0;
const listLight = document.getElementById("list")

repeatBtn.addEventListener("click", repeat);
shuffleBtn.addEventListener("click", shuffle);

playBtn.addEventListener("click", playPause);
backwardBtn.addEventListener("click", function () {
    changeSong("previous");
});
forwardBtn.addEventListener("click", function () {
    changeSong('next');
});

setCurrentSong(currentIndex); // 0

function playPause() {
    if (isPlaying) {
        song.play();
        playBtn.innerHTML = ` <i class="fa-solid fa-pause" style="color: aliceblue"></i> `;
        isPlaying = false;
    }
    else {
        song.pause();
        playBtn.innerHTML = ` <i class="fa-solid fa-play" style="color: aliceblue"></i> `;
        isPlaying = true;
    }
}

/**
 * JS Doc
 * @param index: index of musics
 */
function setCurrentSong(index) {
    
    currentIndex = index;
    songName.innerHTML = musics[currentIndex];
    console.log(musics[currentIndex]);
    song.setAttribute("src", "music/" + musics[currentIndex]);
}

/**
 *
 * @param {'next' | 'previous'} type
 */
function changeSong(type) {
    let newIndex;
    if (type === 'previous') {
        if (currentIndex === 0) {
            newIndex = musics.length - 1; // index cuoi cung
        } else {
            newIndex = currentIndex - 1;
        }
    }
    else if (type === 'next') {
        if (currentIndex === musics.length - 1) {
            newIndex = 0; // index cuoi cung
        } else {
            newIndex = currentIndex + 1;
        }
    }
    else {
        throw new Error("changeSong must be 'next' or 'previous'")
    }
    setCurrentSong(newIndex);
    song.play();
    isPlaying = false
    playBtn.innerHTML = ` <i class="fa-solid fa-pause" style="color: aliceblue"></i> `;
}

song.addEventListener("ended", handelEndedSong);
function handelEndedSong() {
    song.pause()
    playBtn.innerHTML = ` <i class="fa-solid fa-play" style="color: aliceblue"></i> `;
    changeSong("next")
}

function repeat() {
    song.loop = !song.loop;
    if (song.loop) {
        repeatBtn.style.opacity = '1';
    } else {
        repeatBtn.style.opacity = '0.5';
    }
}

function shuffle() {
    for (let i = musics.length - 1; i > 0; i--) {
        let randomPosition = Math.floor(Math.random() * (i));
        let temp = musics[i];
        musics[i] = musics[randomPosition];
        musics[randomPosition] = temp;
    }
    song.shuffle = !song.shuffle
    if (song.shuffle) {
        shuffleBtn.style.opacity = '1';
    } else {
        shuffleBtn.style.opacity = '0.5';
    }
    return musics;
}







