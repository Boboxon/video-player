const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play & pause video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updatePlayIcon() {
    if (video.paused) {
      play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
      play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
  }

  //stop video
  function stopVideo(){
       video.currentTime = 0;
       video.pause();
  }

  //update progress 
  function updateProgress(){
      progress.value = (video.currentTime/video.duration)*100;

      //get mins
      let mins = Math.floor(video.currentTime/60);
      if(mins<10){
          mins = "0" + String(mins);
      }

      //secends
      let sec = Math.floor(video.currentTime %60);
      if(sec<10){
          sec = '0' + String(sec);
      }

      timestamp.innerHTML = `${mins}:${sec}`;
  }

  function setVideoProgress(){
      video.currentTime = (+progress.value * video.duration)/100;
  }

//eventlistners

stop.addEventListener('click', stopVideo);
play.addEventListener('click', toggleVideoStatus);
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('change', setVideoProgress);



