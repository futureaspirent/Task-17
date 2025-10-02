const song = document.getElementById("song");
const playBtn = document.getElementById("playBtn");

let isPlaying = false;

playBtn.addEventListener("click", () => {
  if (isPlaying) {
    song.pause();
    playBtn.classList.remove("fa-pause");
    playBtn.classList.add("fa-play");
    isPlaying = false;
  } else {
    song.play();
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
    isPlaying = true;
  }
});
