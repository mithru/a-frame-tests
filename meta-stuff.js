AFRAME.registerComponent('meta-stuff', {
    schema: {
    },
    init() {
      this.debugTextElement = document.getElementById('debug-text')
      this.debugTextElement.innerHTML = "Test"
      this.camera = document.getElementById('camera')
      this.hiderWalls = document.getElementById('hider-walls')
      this.allContent = document.getElementById('all-content')
      this.doorPlaceholder = document.getElementById('parent')
      this.cta = document.getElementById('intro-cta')

      // this.hiderWalls.object3D.visible = false
      this.allContent.object3D.visible = false
      this.positionSet = false;

      this.startExperience = () => {
        console.log("start");
      }
      console.log("test");

      this.cta.addEventListener('click', this.startExperience)

    },
    tick() {
      if(!this.positionSet){
        this.doorPlaceholder.object3D.rotation.y = this.camera.object3D.rotation.y
      }
    },
  }
);
