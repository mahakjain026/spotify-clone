let audioElement=new Audio("/Without-Me---Halsey-(PagalWorld).mp3");
let songIndex=0;
var masterPlay=document.getElementById("masterPlay");
var adjustor=document.getElementById("adjustor");

//song list
var songs=[
    {songName:'Without Me' , songPath:"/Without-Me---Halsey-(PagalWorld).mp3",songCover:"/withoutposter.png"},
    {songName:'Without Me' , songPath:"/Without-Me---Halsey-(PagalWorld).mp3",songCover:"/withoutposter.png"},
    {songName:'Without Me' , songPath:"/Without-Me---Halsey-(PagalWorld).mp3",songCover:"/withoutposter.png"},
    {songName:'Without Me' , songPath:"/Without-Me---Halsey-(PagalWorld).mp3",songCover:"/withoutposter.png"},
    {songName:'Without Me' , songPath:"/Without-Me---Halsey-(PagalWorld).mp3",songCover:"/withoutposter.png"}
];
// play & pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused ){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        setInterval(function () {}, 100);
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
    }
});

audioElement.addEventListener("timeupdate",()=>{
    //update seekbar
    var adjust=((audioElement.currentTime/audioElement.duration)*100);
    adjustor.value=adjust;
})

adjustor.addEventListener('change',()=>{
    //change song acc to seekbar
    audioElement.currentTime=((audioElement.duration*adjustor.value)/100);

})

var currentime=document.getElementsByClassName("currenttime");

var cur=setInterval(audioElement.currentTime,100);
console.log("currr",cur);
currentime.innerHTML=cur;