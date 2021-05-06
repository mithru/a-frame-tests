function runVideo() {
    // video-feed-alt.js is the place-door.js functions merged into runVideo

  video = document.querySelector("#videoElement");

    this.camera = document.getElementById('camera')
    this.camParent = document.getElementById('cam-parent')
    this.camFinal = document.getElementById('camFinalPos')
    this.camWorldPosition = new THREE.Vector3();
    this.finalWorldPosition = new THREE.Vector3();
    this.welcomeAudio = document.getElementById('welcome');

    document.getElementById('intro-overlay').style.display = 'none'

    // this.camFinal.object3D.getWorldPosition(this.camWorldPosition)
    // this.finalWorldPosition.x = this.camParent.object3D.position.x - this.camWorldPosition.x
    // // this.finalWorldPosition.y = this.camWorldPosition.y - this.camParent.object3D.position.y
    // this.finalWorldPosition.z = this.camParent.object3D.position.z - this.camWorldPosition.z
    // this.startRotY = -(this.camera.object3D.rotation.y)
    //
    // this.camera.object3D.rotation.y = 0
  if (navigator.mediaDevices.getUserMedia) {
    console.log(video)
    const videoConstraints = {};
    videoConstraints.facingMode = 'environment';
    const constraints = {
      video: videoConstraints,
      audio: false
    };
    video.setAttribute('autoplay', '');
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');


    navigator.mediaDevices.getUserMedia(constraints)
      .then(function(stream) {
        console.log('started experience');
          document.getElementById('background').play();
          video.srcObject = stream;
        document.getElementById('debug-text').innerHTML = 'cam changed'
        document.getElementById('permissions-bg').style.animationName = 'fadeout'
        document.getElementById('permissions-bg').style.animationDuration = '1s'
        document.getElementById('permissions-bg').style.animationDelay = '1s'
        document.getElementById('permissions-bg').style.animationFillMode = 'forwards'

        // intro text is shown
        setTimeout(() => {
            // console.log('move parent to default position')
            // document.getElementById('parent').object3D.position.set(0,-6,12)
          console.log("2000");
          document.getElementById('debug-text').innerHTML = 'look around intro texts shown'
          document.getElementById('title-1').style.animationName = 'fadeInOutAuto'
          document.getElementById('title-1').style.animationDuration = '4s'
          document.getElementById('title-1').style.animationDelay = '5.5s'
          document.getElementById('title-1').style.animationFillMode = 'forwards'
          document.getElementById('title-2').style.animationName = 'fadeInOutAuto'
          document.getElementById('title-2').style.animationDuration = '4s'
          document.getElementById('title-2').style.animationDelay = '0s'
          document.getElementById('title-2').style.animationFillMode = 'forwards'
        }, 2000)


        setTimeout(() => {
            // this.welcomeAudio.components.sound.playSound() // Command for audio player
            this.welcomeAudio.play()
            console.log('play welcome')
            document.getElementById('permissions-bg').style.zIndex = -1
            // document.getElementById('intro-overlay').style.zIndex = 1
            document.getElementById('portal-overlay').style.animationName = 'fadein'
            document.getElementById('portal-overlay').style.animationDuration = '0.5s'
            document.getElementById('portal-overlay').style.animationFillMode = 'forwards'

            // console.log('move parent to default position')
            // document.getElementById('parent').object3D.position.set(0,-6,12)


        }, 5000)

      // model enters
      setTimeout(() => {
          document.getElementById('intro').play();

          console.log('play intro')
          console.log("14000");
          document.getElementById('intro-cap-1').style.display = 'block'
          setTimeout(() => {
              document.getElementById('intro-cap-1').style.display = 'none'
              document.getElementById('intro-cap-2').style.display = 'block'
          }, 4000)
          setTimeout(() => {
              document.getElementById('intro-cap-1').style.display = 'none'
              document.getElementById('intro-cap-2').style.display = 'none'
          }, 8000)
          // document.getElementById('test-glass').setAttribute('animation-mixer', 'clip:Glass_Circle_Intro; timeScale:2; loop:once; clampWhenFinished: true')

          // document.getElementById('intro').components.sound.playSound()
          document.getElementById('debug-text').innerHTML = 'main model coming in'
          // document.getElementById('sculpture-item').setAttribute('animation-mixer', 'clip:*intro; timeScale:1; loop:once; clampWhenFinished: true')
          // setTimeout(() => {
          // }, 2000)

          document.getElementById('sculpture-item5').setAttribute('visible', 'false')
          document.getElementById('sculpture-item6').setAttribute('visible', 'false')

          document.getElementById('sculpture-item1').setAttribute('animation-mixer', 'clip:B.Item.01.intro; timeScale:1; loop:once; clampWhenFinished: true')

          document.getElementById('sculpture-item2').setAttribute('animation-mixer', 'clip:*intro; timeScale:1; loop:once; clampWhenFinished: true')
          document.getElementById('sculpture-item3').setAttribute('animation-mixer', 'clip:*intro; timeScale:1; loop:once; clampWhenFinished: true')
          document.getElementById('sculpture-item4').setAttribute('animation-mixer', 'clip:*intro; timeScale:1; loop:once; clampWhenFinished: true')
          document.getElementById('sculpture-item5').setAttribute('animation-mixer', 'clip:*intro; timeScale:1; loop:once; clampWhenFinished: true')
          document.getElementById('sculpture-item6').setAttribute('animation-mixer', 'clip:*intro; timeScale:1; loop:once; clampWhenFinished: true')
          document.getElementById('sculpture-item7').setAttribute('animation-mixer', 'clip:B.Item.07.intro; timeScale:1; loop:once; clampWhenFinished: true')
          document.getElementById('sculpture-parent').setAttribute('animation__scale', 'property: scale; to: 2.5 2.5 2.5; easing: easeInOutQuad; loop: false; dur: 1000')
          document.getElementById('sculpture-parent').setAttribute('animation__pos', 'property: position; to: 0 0 -18; easing: easeInOutQuad; loop: false; dur: 2000')
      }, 14000) // 12000


  })
      .catch(function(err) {
        console.log("Something went wrong! " + err);
      });
  }
}
