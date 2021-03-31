const debugComponent = {
    schema: {
      text: {default: 'Console'},
    },
    init() {
      this.debugTextElement = document.getElementById('debug-text')
      this.debugTextElement.innerHTML = this.data.text
      this.camera = document.getElementById('camera')
      this.origin = this.camera.object3D.position.clone()
      this.portalElements = document.getElementById('all-content')
      this.portalElementsOrigin = this.portalElements.object3D.position.clone()
      this.hasEntered = false
      this.mainContent = document.getElementById('main1')
      this.camRef = this.camera.object3D.position.clone()
      this.walls = document.getElementById('hider-walls')
      this.portalWall = document.getElementById('portal-wall')
      // this.contents.object3D.visible = false
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
          this.hasEntered = true
          this.camRef = this.camera.object3D.position.clone()
          // this.contents.object3D.visible = false
  
          this.walls.object3D.visible = false
          this.portalWall.object3D.visible = false
  
          // stop 8thwall
          const scene = this.el.sceneEl
          // toggle 6dof <-> 3dof
          // const dof = scene.getAttribute('xrweb').disableWorldTracking ? 'false' : 'true'
  
          // Stop xrweb
          scene.removeAttribute('xrweb')
          // this.contents.object3D.visible = true
          // Restart xrweb
          scene.setAttribute('xrweb', 'disableWorldTracking: true; cameraDirection: back;')
          // XR8.stop()
          // XR8.XrController.configure({disableWorldTracking: true})
          // // Open the camera and start running the camera run loop
          // // In index.html: <canvas id="camerafeed"></canvas>
          // XR8.run({canvas: document.getElementById('camerafeed')})
          this.debugTextElement.innerHTML = '3DoF'
        }
      } else {
        // this.debugTextElement.innerHTML = this.portalElementsOrigin.z + ' ' + this.camRef.z  + ' ' +  this.camera.object3D.position.z
        // this.portalElements.object3D.position.x = this.portalElementsOrigin.x + this.camera.object3D.position.x
        // this.portalElements.object3D.position.y = this.portalElementsOrigin.y + this.camera.object3D.position.y
        // this.portalElements.object3D.position.x = this.portalElementsOrigin.x + this.camera.object3D.position.x - this.camRef.x
        // this.portalElements.object3D.position.y = this.portalElementsOrigin.y + this.camera.object3D.position.y - this.camRef.y
        // this.portalElements.object3D.position.z = this.portalElementsOrigin.z + this.camera.object3D.position.z - this.camRef.z
        // this.debugTextElement.innerHTML = `${this.portalElements.object3D.position.z} ${this.camera.object3D.position.z}`
        //   if (moveX > 3) {
        //     this.portalElements.object3D.position.x = this.portalElementsOrigin.x + (moveX - 3)
        //   } else if (moveX < -3) {
        //     this.portalElements.object3D.position.x = this.portalElementsOrigin.x + (moveX + 3)
        //   } else {
        //     this.xDrag = false
        //   }
  
        //   if (moveY > 4) {
        //     this.portalElements.object3D.position.y = this.portalElementsOrigin.y + (moveY - 4)
        //   } else if (moveY < 0) {
        //     this.portalElements.object3D.position.y = this.portalElementsOrigin.y + (moveY - 0)
        //   } else {
        //     this.yDrag = false
        //   }
  
        //   if (moveZ > 20) {
        //     this.portalElements.object3D.position.z = this.portalElementsOrigin.z + (moveZ - 20)
        //   }
        //   // else if (moveY < 8) {
        //   //   this.portalElements.object3D.position.z = this.portalElementsOrigin.z + (moveZ - 8)
        //   else {
        //     this.zDrag = false
        //   }
      }
    },
  }
  
  export {debugComponent}