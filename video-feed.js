function start(){
  video = document.querySelector("#videoElement");
  console.log(video)
  if (navigator.mediaDevices.getUserMedia) {
    console.log(video)
    const videoConstraints = {};
    videoConstraints.facingMode = 'environment';
    const constraints = {
      video: videoConstraints,
      audio: false
    };
    navigator.mediaDevices.getUserMedia(constraints)
      .then(function (stream) {
        video.srcObject = stream;
      })
      .catch(function (err) {
        console.log("Something went wrong! " + err);
      });
  }
}
