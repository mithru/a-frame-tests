AFRAME.registerComponent('meta-stuff', {
    schema: {
    },
    init() {
      this.debugTextElement = document.getElementById('debug-text')
      this.debugTextElement.innerHTML = "Test"
      this.camera = document.getElementById('camera')
      this.hiderWalls = document.getElementById('hider-walls')
      this.envWalls = document.getElementById('wall-env')
      this.reverseWall = document.getElementById('reverse-wall')
      this.allContent = document.getElementById('all-content')
      this.parent = document.getElementById('parent')
      this.camParent = document.getElementById('cam-parent')
      this.camFinal = document.getElementById('camFinalPos')
      this.doorplaceholder = document.getElementById('door-placeholder')
      this.cta = document.getElementById('intro-cta')
      this.overlay = document.getElementById('overlay')
      this.dashboardElements = document.getElementById('dashboard-content')

      // this.hiderWalls.object3D.visible = false
      this.allContent.object3D.visible = false
      this.positionSet = false;

      this.startExperience = () => {
        console.log("start");
        this.positionSet = true
        this.overlay.animate(
          [
            {transform:'translateY(0px)'},
            {transform:'translateY(500px)'}
          ], {
            easing: "ease-in-out",
            duration: 1000
          });
          this.allContent.object3D.visible = true
          this.doorplaceholder.object3D.visible = false
          this.camera.object3D.rotation.y -= this.camera.object3D.rotation.y;
          this.camera.setAttribute('animation' , 'property: position; delay: 3000; to: 0 4 -20; easing: easeInOutQuad; loop: false; dur: 3000')
          // this.cta.visible = true
          this.overlay.style.visibility = "hidden"
        }
      this.showPortalElements = () => {
        this.dashboardElements.object3D.visible = true
        this.envWalls.object3D.visible = false;
        this.reverseWall.setAttribute('animation' , 'property: position; to: 0 0 10; easing: easeInOutQuad; loop: false; dur: 3000')
      }
      this.cta.addEventListener('click', this.startExperience)
      this.camera.addEventListener('animationcomplete', this.showPortalElements)
    },
    tick() {
      console.log(this.camFinal.object3D.position)
      this.debugTextElement.innerHTML = "" + (this.camFinal.object3D.position.x)

      if(!this.positionSet){
        this.parent.object3D.rotation.y = this.camera.object3D.rotation.y
      }
    },
  }
);
