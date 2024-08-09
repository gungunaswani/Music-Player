const audio = document.getElementById('audio');
const playPause = document.getElementById('play-pause');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const songTitle = document.getElementById('song-title');
const artist = document.getElementById('artist');

let isPlaying = false;
let currentSong = 0;
let songs = [
    { title: 'Give me Some sunshine', artist: 'Sharman Joshi', src: 'song.mp3' },
    { title: 'Unstoppable', artist: 'Sia', src: 'song1.mp3' },
    { title: 'Dekha tenu', artist: 'Jaani', src: 'song 2.mp3' },
    { title: 'O Maahi O Mahi', artist: 'Arjit Singh', src: 'song3.mp3' },
    { title: 'Soulmate', artist: 'Badshaah', src: 'song4.mp3' }
];

playPause.addEventListener('click', () => {
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
        playPause.textContent = 'Pause';
    } else {
        audio.pause();
        isPlaying = false;
        playPause.textContent = 'Play';
    }
});

next.addEventListener('click', () => {
    currentSong++;
    if (currentSong >= songs.length) {
        currentSong = 0;
    }
    updateSong();
});

prev.addEventListener('click', () => {
    currentSong--;
    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }
    updateSong();
});

function updateSong() {
    audio.src = songs[currentSong].src;
    songTitle.textContent = songs[currentSong].title;
    artist.textContent = songs[currentSong].artist;
    audio.play();
}
