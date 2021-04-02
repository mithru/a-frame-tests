AFRAME.registerComponent('debug-this', {
    schema: {
      text: {default: 'Console'},
    },
    init() {
      this.debugTextElement = document.getElementById('debug-text')
      this.debugTextElement.innerHTML = this.data.text
      this.camera = document.getElementById('camera')
      this.origin = this.camera.object3D.position.clone()
      this.portalElements = document.getElementById('all-content')
      this.dashboardElements = document.getElementById('dashboard-content')
      this.portalElementsOrigin = this.portalElements.object3D.position.clone()
      this.hasEntered = false
      this.mainContent = document.getElementById('main1')
      this.camRef = this.camera.object3D.position.clone()
      this.walls = document.getElementById('hider-walls')
      this.portalWall = document.getElementById('portal-wall')
      // this.contents.object3D.visible = false
      this.dashboardElements.object3D.visible = false
    },
    tick() {
      // const moveX = Math.abs(this.origin.x - this.camera.object3D.position.x)
      // const moveY = Math.abs(this.origin.y - this.camera.object3D.position.y)
      // const moveZ = Math.abs(this.origin.z - this.camera.object3D.position.z)
      // this.debugTextElement.innerHTML = `(${this.origin.y})`
      // this.debugTextElement.innerHTML = this.camera.object3D.position
      // this.camera.object3D.position.x = 0
      // this.xDrag = true
      // this.yDrag = true
      // this.zDrag = true

      if (!this.hasEntered) {
        // change this later

        const dist = Math.abs(this.mainContent.object3D.position.z - this.camera.object3D.position.z)
        // const isInside = (this.camera.object3D.position.z < 0.5)

        // check if inside
        const isInside = (dist < 9.5)
        this.debugTextElement.innerHTML = dist
        if (isInside) {

          this.dashboardElements.object3D.visible = true
          this.hasEntered = true
          this.walls.object3D.visible = false
          this.portalWall.object3D.visible = false

        }
      } else {

      }
    },
  }
);
