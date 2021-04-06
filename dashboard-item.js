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

    let infoBtn = document.getElementById('info-button')
    let closeBtn =  document.getElementById('close-button')
    let itemDesc = document.getElementById('item-desc')

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
      console.log('hovered on ' + el.object3D);
      interactable = true;
      el.setAttribute('animation__zoomin', 'property: scale; to: ' + endScaleString + '; easing: easeInOutSine; dur: 5000')
      // el.removeAttribute('animation')
      // el.setAttribute('animation', 'property: rotation; to: ' + startRotString + '; easing: linear; dur: 1500; loop: false')
    }
    this.hoveredOff = () => {
      this.camera.setAttribute('look-controls', 'enabled', true);

      infoBtn.style.visibility = "hidden"
      closeBtn.style.visibility = "hidden"
      itemDesc.style.visibility = "hidden"
      interactable = false;
      console.log('hovered off ' + el);
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
        // make text and ui visible
        infoBtn.style.visibility = "visible"
        closeBtn.style.visibility = "visible"
        itemDesc.style.visibility = "visible"
        this.camera.setAttribute('look-controls', 'enabled', false);
      }
      // el.removeAttribute('animation__reset');
      // el.setAttribute('animation__rotation', 'property: rotation; from: 0 0 0; to: 0 360 0; easing: linear; dur: 30000; loop: true')
    }
    el.addEventListener('mouseenter', this.hoveredOn)
    el.addEventListener('mouseleave', this.hoveredOff)
    el.addEventListener('animationcomplete__zoomin', this.readyForMV)
    el.addEventListener('animationcomplete', this.resetRotation)
    closeBtn.addEventListener('click', this.hoveredOff)
    this.resetRotation();

  }, tick(){

  }
});
// <!--
// animation__mouseenter="property: scale; to: 30 30 30; easing: easeInOutSine; dur: 5000; startEvents: mouseenter";
// animation__mouseleave="property: scale; to: 10 10 10; easing: easeInOutSine; dur: 2000; startEvents: mouseleave"; -->
