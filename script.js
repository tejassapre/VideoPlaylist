let videolist=document.querySelectorAll('.vid-list .vid');
let mainvideo= document.querySelector('.mainvid video');
let title = document.querySelector('.mainvid .title');

videolist.forEach(video  => {
video.onclick = () =>{
  videolist.forEach(vid=>vid.classList.remove('active'));
  video.classList.add('active');
if( video.classList.contains('active')){
    let src =video.children[0].getAttribute('src');
    mainvideo.src=src;
    let text=video.children[1].innerHTML;
    title.innerHTML=text;
};
}; 
});