AFRAME.registerComponent('main-transform', {
    schema: {
    },
    init() {
      let data = this.data;
      let el = this.el;
      this.stageArea = document.getElementById('main-stage')
      this.dashboardElements = document.getElementById('dashboard-content')

      // el.object3D.visible = false;
      console.log('howdy');

      this.transition = () => {
        console.log(el.object3D.visible);
        if(el.object3D.visible){
          console.log('yoamn');
          el.setAttribute('animation' , 'property: scale; delay: 1000; to: 0 0 0; easing: easeInOutQuad; loop: false; dur: 2000')
          this.dashboardElements.setAttribute('animation' , 'property: scale; delay: 1000; to: 1 1 1; easing: easeInOutQuad; loop: false; dur: 2000')
        }
      }
      this.createMainSculpture = () => {
        el.setAttribute('animation' , 'property: scale; delay: 1000; to: 10 10 10; easing: easeInOutQuad; loop: false; dur: 2000')
        this.stageArea.setAttribute('animation' , 'property: scale; delay: 1000; to: 0 0 0; easing: easeInOutQuad; loop: false; dur: 2000')
        this.stageArea.visible = false;
      }
      this.mainSculptureIdle = () => {
        el.addEventListener('mouseenter', this.transition)
      }

      this.stageArea.addEventListener('animationcomplete', this.mainSculptureIdle)
      this.stageArea.addEventListener('mouseenter', this.createMainSculpture)
    }
  }
);