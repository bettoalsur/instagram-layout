
var videos = document.getElementsByTagName("video");

function checkScroll() {

    for(var i = 0; i < videos.length; i++) {

        var video = videos[i];

        var y = video.offsetTop; 
        var h = video.offsetHeight;
        var b = y + h; //bottom

        if ( y - window.pageYOffset > -30 && b + 80 < window.pageYOffset + window.innerHeight) {
            video.play();
        } else {
            video.pause();
            
        }

    }

}

window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);


