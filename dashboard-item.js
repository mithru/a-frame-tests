AFRAME.registerComponent('dashboard-item', {
  schema: {
    rot: {type: 'number', default:90},
    x: {type: 'number', default:0},
    y: {type: 'number', default:4},
    z: {type: 'number', default:-10},
    autoRotate: {type: 'boolean', default: true},
  },
  init(){
    let data = this.data;
    let el = this.el;
    let interactable = false;

    this.portalOverlay = document.getElementById('portal-overlay')
    this.portalBtm = document.getElementById('portal-btm')
    this.portalReform = document.getElementById('portal-reform')
    this.infoBtn = document.getElementById('info-button')
    this.closeBtn =  document.getElementById('close-button')
    this.itemDesc = document.getElementById('item-desc')

    this.camera = document.getElementById('camera')
    this.parent = document.getElementById('parent')
    this.camParent = document.getElementById('cam-parent')

    this.toRadians = (angle) => {
      return angle * (Math.PI / 180);
    }

    data.x = 8*Math.cos(this.toRadians(data.rot))
    data.z = -2 + 8*Math.sin(this.toRadians(data.rot))

    el.setAttribute('rotation', '0 ' + (-1*(data.rot+90)) + ' 0');
    el.setAttribute('position', data.x +' ' + data.y + ' ' + data.z);
    // console.log(el.getAttribute('position'));
    const startRot = el.getAttribute("rotation")
    const startScale = el.getAttribute("scale")
    // console.log(startRot)
    const startRotString = startRot.x + ' ' + startRot.y + ' ' + startRot.z
    const endRotString = startRot.x + ' ' + (startRot.y+360) + ' ' + startRot.z

    const startScaleString = startScale.x + ' ' + startScale.y + ' ' + startScale.z
    const endScaleString = (startScale.x*3) + ' ' + (startScale.y*3) + ' ' + (startScale.z*3)

    this.hoveredOn = () => {
      // console.log('hovered on ' + el);
      interactable = true;
      el.setAttribute('animation__zoomin', 'property: scale; to: ' + endScaleString + '; easing: easeInOutSine; dur: 5000')
      // el.removeAttribute('animation')
      // el.setAttribute('animation', 'property: rotation; to: ' + startRotString + '; easing: linear; dur: 1500; loop: false')

      // show portal overlay & reform button
      // this.portalOverlay.style.visibility = "visible"
      this.portalReform.style.visibility = "visible"
    }
    this.hoveredOff = () => {
      console.log('remove drag-rotate-component: ' + el.getAttribute('id'))
      el.removeAttribute('drag-rotate-component')
      this.camera.setAttribute('look-controls', 'enabled', true);
      this.infoBtn.style.visibility = "hidden"
      this.closeBtn.style.visibility = "hidden"
      this.itemDesc.style.visibility = "hidden"
      // this.portalOverlay.style.visibility = "hidden"
      // this.portalReform.style.visibility = "hidden"
      // this.portalBtm.style.visibility = "visible"
      // console.log('portal bottom visible')

      interactable = false;
      // console.log('hovered off ' + el);
      // el.removeAttribute('animation__zoomin')
      el.setAttribute('animation__zoomin', 'property: scale; to: '+ startScaleString +'; easing: easeInOutSine; dur: 1500')
      // el.setAttribute('animation', 'property: rotation; to: ' + endRotString + '; easing: linear; dur: 30000')

      // el.removeAttribute('animation__rotation')
      // el.setAttribute('animation__rotation', 'property: rotation; to: 0 360 0; easing: linear; delay: 30000; loop: true')
      // el.setAttribute('animation__reset', 'property: rotation; to: 0 0 0; easing: easeInOutSine; dur: 2000')
      // el.setAttribute('animation__rotation', 'property: rotation; to: 0 0 0; easing: easeInOutSine; dur: 1000')
    }

    this.resetRotation = () => {
      if(!interactable && data.autoRotate){
        // console.log("Resetting rotation")
        el.setAttribute('animation' , 'property: rotation; to: ' + endRotString + '; easing: linear; dur: 30000; loop: true')
      }
    }

    this.readyForMV = () => {
      if(interactable){
        console.log("Load the model now...")
        // show reform button
        // this.portalReform.style.visibility = "visible"
        // make text and ui visible
        this.infoBtn.style.visibility = "visible"
        this.closeBtn.style.visibility = "visible"
        this.itemDesc.style.visibility = "visible"
        this.portalOverlay.style.visibility = "hidden"
        this.portalBtm.style.visibility = "hidden"
        this.portalReform.style.visibility = "hidden"
        this.camera.setAttribute('look-controls', 'enabled', false);

        // remove autorotate, add drag rotation to all models except main sculpture
        if (el.getAttribute('id') != 'configA0') {
          // disable autorotate
          // el.setAttribute('dashboard-item','autoRotate:false')
          el.removeAttribute('animation')
          console.log(el.getAttribute('id'));
          // allow drag rotation
          el.setAttribute('drag-rotate-component','')
          console.log('add drag-rotate-component')
        }

      }
      // el.removeAttribute('animation__reset');
      // el.setAttribute('animation__rotation', 'property: rotation; from: 0 0 0; to: 0 360 0; easing: linear; dur: 30000; loop: true')
    }
    el.addEventListener('mouseenter', this.hoveredOn)
    el.addEventListener('mouseleave', this.hoveredOff)
    el.addEventListener('animationcomplete__zoomin', this.readyForMV)
    el.addEventListener('animationcomplete', this.resetRotation)
    this.closeBtn.addEventListener('click', this.hoveredOff)
    this.resetRotation();

  }, tick(){

  }
});
// <!--
// animation__mouseenter="property: scale; to: 30 30 30; easing: easeInOutSine; dur: 5000; startEvents: mouseenter";
// animation__mouseleave="property: scale; to: 10 10 10; easing: easeInOutSine; dur: 2000; startEvents: mouseleave"; -->
