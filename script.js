let audio = new Audio('songs/music1.mp3');
//play music
let masterPlay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let songNames  = document.getElementById('songNames');
let sickBar = document.getElementById('range');
masterPlay.addEventListener('click',()=>{
    if(audio.paused){
        audio.play();
        gif.style.display = "inline";
        masterPlay.src="circle-pause-solid.svg";
        songNames.style.display = "inline";
    }else{
        audio.pause();
        gif.style.display = "none";
        masterPlay.src="circle-play-solid.svg";
        songNames.style.display = "none";
    }
})
//updating sickbar with audio.
audio.addEventListener('timeupdate',()=>{
    let percentage = parseInt((audio.currentTime/audio.duration)*100);
    sickBar.value = percentage;
})
//handling change in sickBar.
sickBar.addEventListener('change',()=>{
    let progress = sickBar.value;
    audio.currentTime =progress*audio.duration/100;
})

// eventhandler on previous and next button

let songs = [
    {songName:"Do Let The Sun Goes Down",filePath:"songs/music.mp3",coverPath:"covers/1.jpg"},
    {songName:"At My Worst-Pink Sweats",filePath:"songs/music2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Love Story-Taylor Swift",filePath:"songs/music3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Fearless-Taylor Swift",filePath:"songs/music4.mp3",coverPath:"covers/4.webp"},
    {songName:"Hey Mama-David Guetta",filePath:"songs/music5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Love Me like you",filePath:"songs/music6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Manke Manke-Yohani",filePath:"songs/music7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Make me move-Culture Code",filePath:"songs/music8.mp3",coverPath:"covers/8.jpg"},
    {songName:"Unstoppable-Sia",filePath:"songs/music9.mp3",coverPath:"covers/9.jpg"}
]
//Creating song lists
let songItems = document.getElementsByClassName('songs');
Array.from(songItems).forEach((element,i)=>{
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
    element.getElementsByClassName('cover')[0].src = songs[i].coverPath;
})
const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('play')).forEach((element)=>{
        element.src="circle-play-solid.svg";
})
}
//Adding functionality of each play buttons
let index = 1;
Array.from(document.getElementsByClassName('play')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.src = "circle-pause-solid.svg";
        audio.src = `songs/music${index}.mp3`;
        songNames.innerText = songs[index-1].songName;
        songNames.style.display = "inline";
        audio.currentTime = 0;
        audio.play();
        masterPlay.src="circle-pause-solid.svg";
        gif.style.display = "inline";
    })
})
document.getElementById('next').addEventListener('click',(e)=>{
    if(index>=9){
        index = 1;
    }else{
        index+=1;
    }
    audio.src = `songs/music${index}.mp3`;
    audio.currentTime = 0;
    audio.play();
    masterPlay.src="circle-pause-solid.svg";
    songNames.innerText = songs[index-1].songName;
    gif.style.display = "inline";

})
document.getElementById('pre').addEventListener('click',(e)=>{
    if(index<=1){
        index = 9;
    }else{
        index-=1;
    }
    audio.src = `songs/music${index}.mp3`;
    audio.currentTime = 0;
    audio.play();
    masterPlay.src="circle-pause-solid.svg";
    songNames.innerText = songs[index-1].songName;
    gif.style.display = "inline";
})