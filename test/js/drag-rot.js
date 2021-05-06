AFRAME.registerComponent('drag-rotate-component', {
  schema: {
    speed: {
      default: 5
    },
    active: {
      type: 'boolean',
      default: false
    },
    xRotAllowed: {
      type: 'boolean',
      default: true
    },
  },
  init() {
    const {
      el
    } = this

    el.sceneEl.renderer.sortObjects = true;
    document.getElementById('skyElBlur').setAttribute('animation__fade', `property: opacity; to: 1; easing: easeInOutSine; dur: 500;`)
    const bgModel = document.getElementById('skyEl').object3DMap.mesh
    console.log(bgModel);

    document.getElementById('all-walls').object3D.visible = false;
    document.getElementById('floor').object3D.visible = false;
    // document.getElementById('floor-water').object3D.visible = false;
    document.getElementById('sculpture-parent').object3D.visible = false;
    document.getElementById('item1').object3D.visible = false;
    document.getElementById('item2').object3D.visible = false;
    document.getElementById('item3').object3D.visible = false;
    document.getElementById('item4').object3D.visible = false;
    el.object3D.visible = true;

    const model = el.object3DMap.mesh;
    console.log(model);

    // if (this.data.xRotAllowed) {
    //   bgModel.renderOrder = 900;
    //   bgModel.traverse((o) => {
    //     if (o.isMesh) {
    //       console.log('setting bgModel depthTest');
    //       o.material.depthWrite = false;
    //       console.log(o.material);
    //     }
    //   });
    //
    //   model.renderOrder = 1000;
    //   model.traverse((o) => {
    //     if (o.isMesh) {
    //       console.log('setting main model depthTest');
    //       o.material.depthWrite = false;
    //       console.log(o.material);
    //     }
    //   });
    // }

    this.ifMouseDown = false
    this.x_cord = 0
    this.y_cord = 0
    document.addEventListener('pointerdown', this.OnDocumentMouseDown.bind(this))
    document.addEventListener('pointerup', this.OnDocumentMouseUp.bind(this))
    document.addEventListener('pointermove', this.OnDocumentMouseMove.bind(this))
    console.log(`register drag-rotate-component: ${this.el.object3D.id}`)
  },
  OnDocumentMouseDown(event) {
    document.getElementById('debug-text').innerHTML = 'mouseDownEvent'
    this.ifMouseDown = true
    this.x_cord = event.clientX
    this.y_cord = event.clientY
    // console.log(this.el.object3D)
    // console.log(this.name)
  },
  OnDocumentMouseUp() {
    document.getElementById('debug-text').innerHTML = 'mouseUpEvent'

    this.ifMouseDown = false
  },
  OnDocumentMouseMove(event) {
    if (this.ifMouseDown && this.data.active) {
      const tempX = event.clientX - this.x_cord
      const tempY = event.clientY - this.y_cord
      document.getElementById('debug-text').innerHTML = `${event.clientX} , ${event.clientY} - ${this.x_cord}, ${this.y_cord} : ${tempX}, ${tempY}`

      if (Math.abs(tempY) < Math.abs(tempX)) {
        this.el.object3D.rotateY((tempX * this.data.speed) / 1000)
      } else {
        if (this.data.xRotAllowed) {
          this.el.object3D.rotateX((tempY * this.data.speed) / 1000)
        }
      }
      this.x_cord = event.clientX
      this.y_cord = event.clientY
    }
  },
  remove() {
    const {
      data
    } = this
    const {
      el
    } = this

    const bgModel = document.getElementById('skyEl').object3DMap.mesh
    const model = el.object3DMap.mesh

    document.getElementById('skyElBlur').setAttribute('animation__fade', `property: opacity; to: 0; easing: easeInOutSine; dur: 200;`)
    el.removeEventListener('pointerdown', this.OnDocumentMouseDown.bind(el))
    el.removeEventListener('pointerup', this.OnDocumentMouseUp.bind(el))
    el.removeEventListener('pointermove', this.OnDocumentMouseMove.bind(el))
    setTimeout(() => {
      document.getElementById('all-walls').object3D.visible = true;
      document.getElementById('floor').object3D.visible = true;
      // document.getElementById('floor-water').object3D.visible = true;
      document.getElementById('sculpture-parent').object3D.visible = true;
      document.getElementById('item1').object3D.visible = true;
      document.getElementById('item2').object3D.visible = true;
      document.getElementById('item3').object3D.visible = true;
      document.getElementById('item4').object3D.visible = true;
    }, 100);
    // if (this.data.xRotAllowed) {
    //   bgModel.renderOrder = 0;
    //   bgModel.traverse((o) => {
    //     if (o.isMesh) {
    //       console.log('setting bgModel depthTest');
    //       o.material.depthWrite = true;
    //     }
    //   });
    //
    //   model.renderOrder = 0;
    //   model.traverse((o) => {
    //     if (o.isMesh) {
    //       console.log('setting main model depthTest');
    //       o.material.depthWrite = true;
    //     }
    //   });
    // }
    document.getElementById('debug-text').innerHTML = 'removed item inspector component'

    console.log(`deregister drag-rotate-compenent: ${this.el.getAttribute('id')}`)
  },
});
