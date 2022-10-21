let audio = new Audio('song/5.mp3');
let play_btn = document.getElementById('play');
let progress = document.getElementById('progress');
let songData = Array.from(document.getElementsByClassName('songData'));
let songName = Array.from(document.getElementsByClassName('songName'));
let songs = 
[
    {songName: "Sadda Dil Vi Tu", songPath: "song/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Ya Re Ya Saare Ya", songPath: "song/2.mp3", coverPath: "cover/2.webp"},
    {songName: "Morya Morya", songPath: "song/3.mp3", coverPath: "cover/3.jpg"},
    {songName: "Shree Ganeshaya Dheemahi", songPath: "song/4.mp3", coverPath: "cover/4.webp"},
    {songName: "Deva Shree Ganesha", songPath: "song/5.mp3", coverPath: "cover/5.jpg"},
    {songName: "Shendur Lal Chaddhayo", songPath: "song/6.mp3", coverPath: "cover/6.jpg"},
    {songName: "Sukhakarta Dukhaharta vata vighananchi", songPath: "song/7.mp3", coverPath: "cover/7.jpg"},
    {songName: "Ohh My Friend Ganesha", songPath: "song/8.mp3", coverPath: "cover/8.avif"},
    {songName: "Ashtavianayaka tuzha mahima kasa", songPath: "song/9.mp3", coverPath: "cover/9.jpg"},
    {songName: "Shambhu Sutay", songPath: "song/10.mp3", coverPath: "cover/10.jpg"},
    {songName: "Shendur Lal Chaddhayo", songPath: "song/6.mp3", coverPath: "cover/6.jpg"},
    {songName: "Sukhakarta Dukhaharta vata vighananchi", songPath: "song/7.mp3", coverPath: "cover/7.jpg"},
    {songName: "Ohh My Friend Ganesha", songPath: "song/8.mp3", coverPath: "cover/8.avif"},
    {songName: "Ashtavianayaka tuzha mahima kasa", songPath: "song/9.mp3", coverPath: "cover/9.jpg"},
    {songName: "Shambhu Sutay", songPath: "song/10.mp3", coverPath: "cover/10.jpg"},
]

// Play button in bottom update 
play_btn.addEventListener('click', ()=>{
    if(audio.paused || audio.currentTime <= 0)
    {
    audio.play();
    play_btn.classList.remove('fa-circle-play');
    play_btn.classList.add('fa-circle-pause');
    }
    else
    {
    audio.pause();
    play_btn.classList.remove('fa-circle-pause');
    play_btn.classList.add('fa-circle-play');
    }
    
})

// Progress Bar update
audio.addEventListener('timeupdate', ()=>{
    progress.value = parseInt((audio.currentTime/audio.duration)*100);
})

progress.addEventListener('change', ()=>{
    audio.currentTime = audio.duration*progress.value/100
})

// Change cover images 

songData.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

// Change the song on clicking on it

// function PrevSongStop()
// {
//     songName.forEach((element) =>{
//         element.audio.paused();
//     })
// }

// songName.forEach((element)=>{
//     element.addEventListener('click', (e)=>{
//         index = parseInt(e.target.id);
//         PrevSongStop();
//         audio.src = `songs/${index+1}.mp3`;
//         audio.currentTime = 0;
//         audio.play();
//         play_btn.classList.remove('fa-circle-play');
//         play_btn.classList.add('fa-circle-pause');
//     })
// })
