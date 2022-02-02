const title = document.querySelector(".title");
const prev = document.querySelector(".prev");
const playPause = document.querySelector(".playPause");
const next = document.querySelector(".next");
const audio = document.querySelector(".audio");

const songList = [
  {
    path: "아츄.mp3",
    songName: "아츄",
  },
  {
    path: "링딩동.mp3",
    songName: "링딩동",
  },
  {
    path: "낙하.mp3",
    songName: "낙하",
  },
  {
    path: "밤편지.mp3",
    songName: "밤편지",
  },
  {
    path: "회전목마.mp3",
    songName: "회전목마",
  },
  {
    path: "백반청국장.mp3",
    songName: "백반청국장",
  },
];

let song_Playing = false;

//play song
function playSong() {
  song_Playing = true;
  audio.play();
  playPause.classList.add('active')
  playPause.innerHTML = '<ion-icon name="pause-outline"></ion-icon>'
}

//pause song
function pauseSong() {
  let song_Playing = false;
  audio.pause();
  playPause.classList.remove('active')
  playPause.innerHTML = '<ion-icon name="play-outline"></ion-icon>'
}

//play or pause song on click
playPause.addEventListener("click", () =>
  (song_Playing ? pauseSong() : playSong())
);

//load song
function loadSong(songList) {
  title.textContent = songList.songName;
  audio.src = songList.path;
}

//current song
let i = 0;

//on load - select first song from song list
loadSong(songList[i]);

//previous song
function prevSong(){
  i--;
  if (i < 0) {
    i = songList.length - 1;
  }
  loadSong(songList[i])
  playSong();
}

prev.addEventListener("click", prevSong)

//next song
function nextSong(){
  i++;
  if (i > songList.length - 1) {
    i = 0;
  }
  loadSong(songList[i])
  playSong();
}

next.addEventListener("click", nextSong)