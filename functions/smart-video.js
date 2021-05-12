const smartVideo = (videoLabel) =>{
    const $video = document.getElementById(videoLabel);
    const callBack = (entries, observer) =>{
        
        if(entries[0].isIntersecting){
            $video.play();
        }else{
            $video.pause();
        }
    }
    const observer = new IntersectionObserver(callBack, {
        threshold: [0.5, 0.75],
    });
    observer.observe($video);
    document.addEventListener('visibilitychange', e =>{
        if(!document.hidden){
            $video.play();
        }else{
            $video.pause();
        }
    })
}

export default smartVideo;