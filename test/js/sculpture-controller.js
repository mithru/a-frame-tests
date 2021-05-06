AFRAME.registerComponent('sculpture-controller', {
  schema: {},
  init() {
    const {
      data
    } = this
    const {
      el
    } = this

    // const sculptureItem = document.getElementById('sculpture-item')
    const sculptureItem1 = document.getElementById('sculpture-item1')
    const sculptureItem2 = document.getElementById('sculpture-item2')
    const sculptureItem3 = document.getElementById('sculpture-item3')
    const sculptureItem4 = document.getElementById('sculpture-item4')
    const sculptureItem5 = document.getElementById('sculpture-item5')
    const sculptureItem6 = document.getElementById('sculpture-item6')
    const sculptureItem7 = document.getElementById('sculpture-item7')

    const sculptureParent = document.getElementById('sculpture-parent')
    const sculptureConfig = document.getElementById('sculpture-config')

    const parentPosString = '0 0 -18'
    const parentScaleString = '2.5 2.5 2.5'
    // const parentPosString = `${sculptureParent.getAttribute('position').x} ${sculptureParent.getAttribute('position').y} ${sculptureParent.getAttribute('position').z}`
    // const parentScaleString = `${sculptureParent.getAttribute('scale').x} ${sculptureParent.getAttribute('scale').y} ${sculptureParent.getAttribute('scale').z}`
    const parentRotString = `${sculptureParent.getAttribute('rotation').x} ${sculptureParent.getAttribute('rotation').y} ${sculptureParent.getAttribute('rotation').z}`

    // const sculptureIdle = document.getElementById('sculpture-idle')
    // const sculptureTransform = document.getElementById('sculpture-transform')
    const sculptureCollider = document.getElementById('sculpture-collider')
    const pointer = document.getElementById('tap-icon-container')
    const dashboardItem1 = document.getElementById('item1')
    const dashboardItem2 = document.getElementById('item2')
    const dashboardItem3 = document.getElementById('item3')
    const dashboardItem4 = document.getElementById('item4')
    const finalConfig = document.getElementById('config')
    sculptureConfig.setAttribute('visible', 'false')

    this.flyInComplete = () => {
      console.log("flyInComplete");

      document.getElementById('debug-text').innerHTML = 'fly in complete'

      sculptureItem2.removeEventListener('animation-finished', this.flyInComplete)
      // document.getElementById('sculpture-item').setAttribute('visible', 'false')
      this.switchToIdle()
    }

    this.switchToIdle = () => {
      console.log("switchToIdle");

      // document.getElementById('test-glass').setAttribute('animation-mixer', 'clip:Glass_Circle_Idle; timeScale:2; loop:repeat; clampWhenFinished: true')

      document.getElementById('debug-text').innerHTML = 'switched to idle'
      // maybe alkso set transform visible false
      // sculptureTransform.setAttribute('animation-mixer', 'timeScale:-1; repetitions:1; clampWhenFinished: true')
      // sculptureIdle.setAttribute('visible', 'true')

      sculptureItem1.removeAttribute('animation-mixer')
      sculptureItem2.removeAttribute('animation-mixer')
      sculptureItem3.removeAttribute('animation-mixer')
      sculptureItem4.removeAttribute('animation-mixer')
      sculptureItem5.removeAttribute('animation-mixer')
      sculptureItem6.removeAttribute('animation-mixer')
      sculptureItem7.removeAttribute('animation-mixer')
      sculptureItem1.setAttribute('animation-mixer', 'timeScale:1; clip:*dle; loop:repeat; clampWhenFinished: true')
      sculptureItem2.setAttribute('animation-mixer', 'timeScale:1; clip:*dle; loop:repeat; clampWhenFinished: true')
      sculptureItem3.setAttribute('animation-mixer', 'timeScale:1; clip:*dle; loop:repeat; clampWhenFinished: true')
      sculptureItem4.setAttribute('animation-mixer', 'timeScale:1; clip:*dle; loop:repeat; clampWhenFinished: true')
      sculptureItem5.setAttribute('animation-mixer', 'timeScale:1; clip:*dle; loop:repeat; clampWhenFinished: true')
      sculptureItem6.setAttribute('animation-mixer', 'timeScale:1; clip:*dle; loop:repeat; clampWhenFinished: true')
      sculptureItem7.setAttribute('animation-mixer', 'timeScale:1; clip:*dle; loop:repeat; clampWhenFinished: true')

      document.getElementById('sculpture-collider').setAttribute('scale', '1.4 1.4 1.4')
      document.getElementById('portal-btm').style.animationName = 'fadein'
      document.getElementById('portal-btm').style.animationDuration = '0.5s'
      document.getElementById('portal-btm').style.animationFillMode = 'forwards'
      document.getElementById('door1').setAttribute('animation', `property: scale; to: 1 1 1; easing: easeInOutSine; dur: 1000; delay:500`)
      document.getElementById('door2').setAttribute('animation', `property: scale; to: 1 1 1; easing: easeInOutSine; dur: 1000; delay:500`)

      // document.getElementById('portal-btm').style.zIndex = '10000'
      document.getElementById('debug-text').innerHTML = 'portal btm seen'
      // dashboardItem1.setAttribute('animation', 'property: scale; to: 0 0 0; easing: easeInOutSine; dur: 1000;')
      // dashboardItem2.setAttribute('animation', 'property: scale; to: 0 0 0; easing: easeInOutSine; dur: 1000;')
      // dashboardItem3.setAttribute('animation', 'property: scale; to: 0 0 0; easing: easeInOutSine; dur: 1000;')
      // dashboardItem4.setAttribute('animation', 'property: scale; to: 0 0 0; easing: easeInOutSine; dur: 1000;')
      document.getElementById('portal-btm').style.zIndex = '10'
      // document.getElementById('transform').style.zIndex = '100000001'
      document.getElementById('transform').addEventListener('click', this.startSwitchConfig)
      document.getElementById('spaces').addEventListener('click', this.showSpacesPage)
      // document.getElementById('share').addEventListener('click', this.startSwitchConfig)
      sculptureCollider.addEventListener('mouseenter', this.showHelper)
      sculptureCollider.addEventListener('mouseleave', this.hideHelper)
      // document.getElementById('debug-text').innerHTML = 'event listeners added'
    }

    this.showSpacesPage = () => {
      console.log("showSpacesPage");
      sculptureCollider.setAttribute('scale', '0 0 0')
      document.getElementById('spaces').removeEventListener('click', this.showSpacesPage)
      document.getElementById('spaces-overlay').style.animationName = 'fadein'
      document.getElementById('portal-btm').style.animationName = 'fadeout'
      document.getElementById('spaces-close').addEventListener('click', this.closeSpacesPage)
    }

    this.closeSpacesPage = () => {
      console.log("closeSpacesPage");
      sculptureCollider.setAttribute('scale', '1.4 1.4 1.4')

      document.getElementById('spaces-close').removeEventListener('click', this.closeSpacesPage)
      document.getElementById('portal-btm').style.animationName = 'fadein'
      document.getElementById('spaces-overlay').style.animationName = 'fadeout'
      document.getElementById('spaces').addEventListener('click', this.showSpacesPage)
    }
    // speeds up the idle animation to its starting point when tapped
    this.startSwitchConfig = () => {
      console.log("startSwitchConfig");

      document.getElementById('debug-text').innerHTML = 'starting switch to config'
      this.hideHelper()
      // document.getElementById('transform').style.zIndex = 50
      document.getElementById('transform').removeEventListener('click', this.startSwitchConfig)
      pointer.removeEventListener('click', this.startSwitchConfig)
      sculptureCollider.removeEventListener('mouseenter', this.showHelper)
      sculptureCollider.removeEventListener('mouseleave', this.hideHelper)
      sculptureItem1.setAttribute('animation-mixer', 'loop:once; clampWhenFinished: true; timeScale:6')
      sculptureItem2.setAttribute('animation-mixer', 'loop:once; clampWhenFinished: true; timeScale:6')
      sculptureItem3.setAttribute('animation-mixer', 'loop:once; clampWhenFinished: true; timeScale:6')
      sculptureItem4.setAttribute('animation-mixer', 'loop:once; clampWhenFinished: true; timeScale:6')
      sculptureItem5.setAttribute('animation-mixer', 'loop:once; clampWhenFinished: true; timeScale:6')
      sculptureItem6.setAttribute('animation-mixer', 'loop:once; clampWhenFinished: true; timeScale:6')
      sculptureItem7.setAttribute('animation-mixer', 'loop:once; clampWhenFinished: true; timeScale:6')
      sculptureItem2.addEventListener('animation-finished', this.switchToConfig)
      document.getElementById('portal-btm').style.animationName = 'fadeout'
      document.getElementById('portal-btm').style.animationDuration = '0.5s'
      document.getElementById('portal-btm').style.animationFillMode = 'forwards'
      document.getElementById('door1').setAttribute('animation', `property: scale; to: 0 0 0; easing: easeInOutSine; dur: 1000; delay:500`)
      document.getElementById('door2').setAttribute('animation', `property: scale; to: 0 0 0; easing: easeInOutSine; dur: 1000; delay:500`)

      // document.getElementById('portal-btm').style.zIndex = '100'
    }

    this.showHelper = () => {
      console.log("showHelper");

      // document.getElementById('debug-text').innerHTML = 'hovered on main sculpture'
      pointer.style.animationFillMode = 'forwards'
      pointer.style.animationDuration = '0.5s'
      pointer.style.animationName = 'fadein'
      // pointer.style.opacity =
      pointer.addEventListener('click', this.startSwitchConfig)

      document.getElementById('portal-top-text').style.animationFillMode = 'forwards'
      document.getElementById('portal-top-text').style.animationDuration = '0.5s'
      document.getElementById('portal-top-text').style.animationName = 'fadein'
    }

    this.hideHelper = () => {
      console.log("hideHelper");

      pointer.removeEventListener('click', this.startSwitchConfig)
      // document.getElementById('debug-text').innerHTML = 'hovered off main sculpture'
      pointer.style.animationFillMode = 'forwards'
      pointer.style.animationName = 'fadeout'
      document.getElementById('portal-top-text').style.animationFillMode = 'forwards'
      document.getElementById('portal-top-text').style.animationDuration = '0.5s'
      document.getElementById('portal-top-text').style.animationName = 'fadeout'
    }

    this.switchToConfig = () => {
      console.log("switchToConfig");

      document.getElementById('debug-text').innerHTML = 'switched to config'
      sculptureItem2.removeEventListener('animation-finished', this.switchToConfig)
      document.getElementById('sculpture-collider').setAttribute('scale', '0 0 0')
      sculptureItem1.removeAttribute('animation-mixer')
      sculptureItem2.removeAttribute('animation-mixer')
      sculptureItem3.removeAttribute('animation-mixer')
      sculptureItem4.removeAttribute('animation-mixer')
      sculptureItem5.removeAttribute('animation-mixer')
      sculptureItem6.removeAttribute('animation-mixer')
      sculptureItem7.removeAttribute('animation-mixer')
      // sculptureTransform.setAttribute('visible', 'true')
      setTimeout(() => {
        document.getElementById('sculpture-item5').setAttribute('visible', 'true')
        document.getElementById('sculpture-item6').setAttribute('visible', 'true')
      }, 500)

      // sculptureParent.setAttribute('animation__scale', 'property: scale; to: 1 1 1; easing: easeInOutQuad; loop: false; dur: 5000')
      sculptureParent.setAttribute('animation__pos', 'property: position; to: 0 -7 -20; easing: easeInOutQuad; loop: false;delay:500 dur: 2500')

      sculptureItem1.setAttribute('animation-mixer', 'clip:*fly; timeScale:3; loop:once; clampWhenFinished: true')
      sculptureItem2.setAttribute('animation-mixer', 'clip:*fly; timeScale:3; loop:once; clampWhenFinished: true')
      sculptureItem3.setAttribute('animation-mixer', 'clip:*fly; timeScale:3; loop:once; clampWhenFinished: true')
      sculptureItem4.setAttribute('animation-mixer', 'clip:*fly; timeScale:3; loop:once; clampWhenFinished: true')
      sculptureItem5.setAttribute('animation-mixer', 'clip:*fly; timeScale:3; loop:once; clampWhenFinished: true')
      sculptureItem6.setAttribute('animation-mixer', 'clip:*fly; timeScale:3; loop:once; clampWhenFinished: true')
      sculptureItem7.setAttribute('animation-mixer', 'clip:*fly; timeScale:3; loop:once; clampWhenFinished: true')
      // sculptureIdle.setAttribute('visible', 'false')

      // dashboardItem1.setAttribute('dashboard-item', 'transitionReady: true')
      // dashboardItem2.setAttribute('dashboard-item', 'transitionReady: true')
      // dashboardItem1.setAttribute('animation', 'property: scale; to: 1 1 1; easing: easeInOutSine; dur: 1000;')
      // dashboardItem2.setAttribute('animation', 'property: scale; to: 1 1 1; easing: easeInOutSine; dur: 1000;')
      // dashboardItem3.setAttribute('animation', 'property: scale; to: 1 1 1; easing: easeInOutSine; dur: 1000;')
      // dashboardItem4.setAttribute('animation', 'property: scale; to: 1 1 1; easing: easeInOutSine; dur: 1000;')

      // individual products are visible and start to animate out
      setTimeout(() => {
        dashboardItem1.setAttribute('visible', 'true')
        dashboardItem2.setAttribute('visible', 'true')
        dashboardItem3.setAttribute('visible', 'true')
        dashboardItem4.setAttribute('visible', 'true')
        // dashboardItem1.setAttribute('animation__comecloser', `property: position; to: 4 11.5 -23.6; easing: easeInOutSine; delay: 1000; dur: 2000;`)
        // dashboardItem2.setAttribute('animation__comecloser', `property: position; to: 0 10 -20; easing: easeInOutSine; delay: 1000;  dur: 2000;`)
        // dashboardItem3.setAttribute('animation__comecloser', `property: position; to: 0 7.5 -25; easing: easeInOutSine; delay: 1000;  dur: 2000;`)
      }, 5000) // keep this under 6000

      sculptureItem2.addEventListener('animation-finished', this.transformAnimOver)
    }

    this.transformAnimOver = () => {
      console.log("transformAnimOver");

      sculptureParent.setAttribute('animation__scale', 'property: scale; to: 1 1 1; easing: easeInOutQuad; loop: false; delay:4000; dur: 3000')
      sculptureParent.setAttribute('animation__pos', 'property: position; to: 0 0 -20; easing: easeInOutQuad; loop: false; delay:4000; dur: 3000')
      sculptureParent.setAttribute('animation__rot', 'property: rotation; to: 0 15 0; easing: easeInOutQuad; loop: false; delay:4000; dur: 3000')


      sculptureItem2.removeEventListener('animation-finished', this.transformAnimOver)
      // finalConfig.setAttribute('visible', 'true')
      // sculptureTransform.setAttribute('visible', 'false')
      // sculptureTransform.removeAttribute('animation-mixer')

      sculptureConfig.setAttribute('visible', 'true')
      sculptureItem2.setAttribute('visible', 'false')
      sculptureItem4.setAttribute('visible', 'false')
      sculptureItem5.setAttribute('visible', 'false')
      sculptureItem7.setAttribute('visible', 'false')

      setTimeout(() => {
        sculptureParent.setAttribute('animation__rot', 'property: rotation; dir:alternate; from: 0 15 0; to: 0 45 0; easing: easeInOutQuad; loop: true; delay:0 dur: 5000;')
        console.log("swaying config")
        this.showReformUI()
        document.getElementById('sculpture-collider-2').setAttribute('scale', '1 1 1')

        document.getElementById('sculpture-collider-2').addEventListener('mouseenter', this.zoomin)
        document.getElementById('sculpture-collider-2').addEventListener('mouseleave', this.zoomout)

      }, 7000)

    }
    this.zoomin = () => {
      sculptureParent.setAttribute('animation__pos', 'property: position; to: 0 0 -10; easing: easeInOutQuad; loop: false; delay:0; dur: 1000')
      this.showtransform()
      pointer.addEventListener('click', this.switchToMV)
    }
    this.zoomout = () => {
      sculptureParent.setAttribute('animation__pos', 'property: position; to: 0 0 -20; easing: easeInOutQuad; loop: false; delay:0; dur: 1000')
      this.hidetransform()
      pointer.removeEventListener('click', this.switchToMV)
    }
    this.closeMV = () => {
      console.log('closeMV');
      document.getElementById('close-button').removeEventListener('click', this.closeMV)
      document.getElementById('sculpture-collider-2').addEventListener('mouseenter', this.zoomin)
      document.getElementById('sculpture-collider-2').addEventListener('mouseleave', this.zoomout)

      document.getElementById('portal-overlay').style.marginTop = '0'

      document.getElementById('debug-text').innerHTML = 'Model Viewer closed'
      sculptureParent.setAttribute('drag-rotate-component', 'active:false')
      sculptureParent.removeAttribute('drag-rotate-component')
      document.getElementById('portal-reform').style.animationName = 'fadein'
      document.getElementById('portal-reform').style.animationDuration = '0.5s'
      document.getElementById('portal-reform').style.animationFillMode = 'forwards'

      document.getElementById('item-overlay').style.animationName = 'fadeout'
      document.getElementById('item-overlay').style.animationFillMode = 'forwards'
      document.getElementById('item-overlay').style.display = 'none'
      // item-overlay display none
      pointer.removeEventListener('click', this.switchToMV)
      // document.getElementById('item-overlay').style.zIndex = 15
    }

    this.switchToMV = () => {
      console.log('switched to MV');
      document.getElementById('portal-overlay').style.marginTop = '4em'
      sculptureParent.removeAttribute('animation__rot')

      pointer.removeEventListener('click', this.switchToMV)
      document.getElementById('tap-config-text').style.animationName = 'fadeout'
      document.getElementById('tap-config-text').style.animationDuration = '0.5s'
      document.getElementById('tap-config-text').style.animationFillMode = 'forwards'

      document.getElementById('prod-name').innerHTML = "Example Configuration"
      document.getElementById('debug-text').innerHTML = 'Model Viewer open'
      document.getElementById('item-desc-2').innerHTML = "A balanced combination of 3-outlet Recessed Push- Button Thermostatic Valve, Vichy Body Spray, Single Function Rainhead, and Single Function Handshower High Flow."

      // this.el.sceneEl.renderer.sortObjects = true;
      // sculptureParent.object3D.renderOrder = 100;
      // document.getElementById('floor').object3D.renderOrder = 101;

      console.log(sculptureParent);
      // sculptureParent.components.material.material.depthTest = false;
      // document.getElementById('floor').components.material.material.depthTest = false;
      sculptureParent.setAttribute('drag-rotate-component', 'active:true; xRotAllowed:false')

      document.getElementById('sculpture-collider-2').removeEventListener('mouseenter', this.zoomin)
      document.getElementById('sculpture-collider-2').removeEventListener('mouseleave', this.zoomout)

      document.getElementById('item-overlay').style.display = 'block'
      document.getElementById('item-overlay').style.animationName = 'fadein'
      document.getElementById('item-overlay').style.animationFillMode = 'forwards'

      document.getElementById('portal-reform').style.animationName = 'fadeout'
      document.getElementById('portal-reform').style.animationDuration = '0.5s'
      document.getElementById('portal-reform').style.animationFillMode = 'forwards'

      pointer.style.animationName = 'drag'

      document.getElementById('tap-item-text').style.animationName = 'fadeout'
      document.getElementById('tap-item-text').style.animationFillMode = 'forwards'
      document.getElementById('close-button').addEventListener('click', this.closeMV)
    }

    this.showtransform = () => {
      console.log("showtransform");

      document.getElementById('tap-config-text').style.animationName = 'fadein'
      document.getElementById('tap-config-text').style.animationDuration = '0.5s'
      document.getElementById('tap-config-text').style.animationFillMode = 'forwards'

      pointer.style.animationFillMode = 'forwards'
      pointer.style.animationDuration = '0.5s'
      pointer.style.animationName = 'fadein'
    }

    this.hidetransform = () => {
      console.log("hidetransform");

      document.getElementById('tap-config-text').style.animationName = 'fadeout'
      document.getElementById('tap-config-text').style.animationDuration = '0.5s'
      document.getElementById('tap-config-text').style.animationFillMode = 'forwards'

      pointer.style.animationFillMode = 'forwards'
      pointer.style.animationDuration = '0.5s'
      pointer.style.animationName = 'fadeout'
    }

    this.showReformUI = () => {
      console.log("showReformUI");

      // document.getElementById('debug-text').innerHTML = 'reform button shown'

      // sculptureIdle.removeAttribute('animation-mixer', 'loop:repeat; clampWhenFinished: true')

      document.getElementById('portal-reform').style.animationName = 'fadein'
      document.getElementById('portal-reform').style.animationDuration = '0.5s'
      document.getElementById('portal-reform').style.animationFillMode = 'forwards'
      document.getElementById('portal-reform').style.zIndex = '10'
      document.getElementById('portal-reform').addEventListener('click', this.reformToIdle)
    }
    this.reformToIdle = () => {
      console.log("reformToIdle");

      document.getElementById('sculpture-collider-2').removeEventListener('mouseenter', this.showtransform)
      document.getElementById('sculpture-collider-2').removeEventListener('mouseleave', this.hidetransform)
      document.getElementById('sculpture-collider-2').setAttribute('scale', '0 0 0')

      document.getElementById('tap-config-text').style.animationName = 'fadeout'
      document.getElementById('portal-reform').removeEventListener('click', this.reformToIdle)
      document.getElementById('portal-reform').style.animationName = 'fadeout'
      document.getElementById('portal-reform').style.animationDuration = '0.5s'
      document.getElementById('portal-reform').style.animationFillMode = 'forwards'
      document.getElementById('portal-reform').style.zIndex = '0'

      // finalConfig.setAttribute('visible', 'false')
      // sculptureTransform.setAttribute('visible', 'true')

      sculptureParent.setAttribute('animation__pos', 'property: position; to: 0 -7 -20; easing: easeInOutQuad; loop: false;delay:500 dur: 2500')
      sculptureParent.setAttribute('animation__scale', `property: scale; to: ${parentScaleString}; easing: easeInOutQuad; loop: false; delay: 0 ; dur: 3000`)
      sculptureParent.setAttribute('animation__rot', `property: rotation; to: ${parentRotString}; easing: easeInOutQuad; loop: false; delay: 0 ; dur: 3000`)


      setTimeout(() => {
        console.log("turned off back plate");
        document.getElementById('sculpture-item5').setAttribute('visible', 'false')
        document.getElementById('sculpture-item6').setAttribute('visible', 'false')
      }, 1000)

      setTimeout(() => {
        sculptureParent.setAttribute('animation__pos', `property: position; to: ${parentPosString}; easing: easeInOutQuad; loop: false; delay: 0 ; dur: 3000`)

        sculptureConfig.setAttribute('visible', 'false')
        sculptureItem2.setAttribute('visible', 'true')
        sculptureItem4.setAttribute('visible', 'true')
        sculptureItem5.setAttribute('visible', 'true')
        sculptureItem7.setAttribute('visible', 'true')

        sculptureItem1.removeAttribute('animation-mixer')
        sculptureItem2.removeAttribute('animation-mixer')
        sculptureItem3.removeAttribute('animation-mixer')
        sculptureItem4.removeAttribute('animation-mixer')
        sculptureItem5.removeAttribute('animation-mixer')
        sculptureItem6.removeAttribute('animation-mixer')
        sculptureItem7.removeAttribute('animation-mixer')
        sculptureItem1.setAttribute('animation-mixer', 'clip:*fly; timeScale:-3; repetitions:1; clampWhenFinished: true')
        sculptureItem2.setAttribute('animation-mixer', 'clip:*fly; timeScale:-3; repetitions:1; clampWhenFinished: true')
        sculptureItem3.setAttribute('animation-mixer', 'clip:*fly; timeScale:-3; repetitions:1; clampWhenFinished: true')
        sculptureItem4.setAttribute('animation-mixer', 'clip:*fly; timeScale:-3; repetitions:1; clampWhenFinished: true')
        sculptureItem5.setAttribute('animation-mixer', 'clip:*fly; timeScale:-3; repetitions:1; clampWhenFinished: true')
        sculptureItem6.setAttribute('animation-mixer', 'clip:*fly; timeScale:-3; repetitions:1; clampWhenFinished: true')
        sculptureItem7.setAttribute('animation-mixer', 'clip:*fly; timeScale:-3; repetitions:1; clampWhenFinished: true')

        // sculptureIdle.setAttribute('animation-mixer', 'loop:repeat; clampWhenFinished: true')
        // sculptureTransform.setAttribute('animation-mixer', 'timeScale:-2; loop:once; clampWhenFinished: true')
        // dashboardItem1.setAttribute('animation', 'property: scale; to: 1 1 1; easing: easeInOutSine; dur: 1000;')
        // dashboardItem2.setAttribute('animation', 'property: scale; to: 0 0 0; easing: easeInOutSine; dur: 1000;')
        // dashboardItem3.setAttribute('animation', 'property: scale; to: 0 0 0; easing: easeInOutSine; dur: 1000;')
        // dashboardItem4.setAttribute('animation', 'property: scale; to: 1 1 1; easing: easeInOutSine; dur: 1000;')
        sculptureItem2.addEventListener('animation-finished', this.startSwitchToIdle)
      }, 4000)
    }
    this.startSwitchToIdle = () => {

      setTimeout(() => {
        console.log("startSwitchToIdle");
        document.getElementById('debug-text').innerHTML = 'started switched to idle'
        sculptureItem2.removeEventListener('animation-finished', this.startSwitchToIdle)
        this.switchToIdle()
      }, 1500)
      // sculptureTransform.setAttribute('visible', 'false')
    }

    sculptureItem2.addEventListener('animation-finished', this.flyInComplete)
  },
  tick() {},
});
