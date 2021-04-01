function start(){
  video = document.querySelector("#videoElement");
  console.log(video)
  if (navigator.mediaDevices.getUserMedia) {
    console.log(video) 
    navigator.mediaDevices.getUserMedia({ video: {videoConstraints.facingMode = 'environment'} })
      .then(function (stream) {
        video.srcObject = stream;
      })
      .catch(function (err) {
        console.log("Something went wrong! " + err);
      });
  }
}
