AFRAME.registerComponent('main-transform', {
    schema: {
    },
    init() {
      let data = this.data;
      let el = this.el;
      this.stageArea = document.getElementById('main-stage')
      this.dashboardElements = document.getElementById('dashboard-content')
      this.portalOverlay = document.getElementById('portal-overlay')
      this.portalBtm = document.getElementById('portal-btm')
      this.title1 = document.getElementById('title-1')
      this.title2 = document.getElementById('title-2')

      this.transition = () => {
        console.log('Main transform transition: ' + el.object3D.visible);
        if(el.object3D.visible){
          el.setAttribute('animation' , 'property: scale; delay: 1000; to: 0 0 0; easing: easeInOutQuad; loop: false; dur: 2000')
          this.dashboardElements.setAttribute('animation' , 'property: scale; delay: 1000; to: 1 1 1; easing: easeInOutQuad; loop: false; dur: 2000')
          this.portalBtm.style.visibility = 'hidden'
        }
      }

      this.showTitle = () => {
        console.log('showTitle')
        this.title1.style.visibility = 'visible'
        this.title1.classList.add('fade-in')
        // show top left audio, recalib, cc butons
        this.portalOverlay.style.visibility = "visible"
      }

      this.createMainSculpture = () => {
        console.log('create main sculpture');
        el.setAttribute('animation' , 'property: scale; delay: 1000; to: 10 10 10; easing: easeInOutQuad; loop: false; dur: 2000')
        this.stageArea.setAttribute('animation' , 'property: scale; delay: 1000; to: 0 0 0; easing: easeInOutQuad; loop: false; dur: 2000')
        this.stageArea.visible = false;
      }
      this.mainSculptureIdle = () => {
        el.addEventListener('mouseenter', this.transition)
        console.log('main sculpture idle');

        // Show initial portal UI
        // this.portalOverlay.style.visibility = "visible"
        this.portalBtm.style.alignItems = 'center'
        this.portalBtm.style.visibility = 'visible'
      }

      // el.setAttribute('animation' , 'property: scale; delay: 1000; to: 0 0 0; easing: easeInOutQuad; loop: false; dur: 2000')
      // this.dashboardElements.setAttribute('animation' , 'property: scale; delay: 1000; to: 1 1 1; easing: easeInOutQuad; loop: false; dur: 2000')
      this.stageArea.object3D.visible = false;
      this.stageArea.addEventListener('mouseenter', this.showTitle)
      // this.stageArea.addEventListener('mouseenter', this.createMainSculpture)
      this.stageArea.addEventListener('animationcomplete', this.mainSculptureIdle)

      this.title1.onanimationend = () => {
        if (this.title1.classList.contains('fade-in')) {
          // return;
          console.log('title1 fade-in Animation ended');
          this.title1.classList.remove('fade-in')
          this.title1.classList.add('fade-out')
        }
        else if (this.title1.classList.contains('fade-out')) {
          console.log('title1 fade-out Animation ended');
          this.title1.style.visibility = 'hidden'
          this.title1.classList.remove('fade-out')
          this.title2.style.visibility = 'visible'
          this.title2.classList.add('fade-in')
        }
      };

      this.title2.onanimationend = () => {
        if (this.title2.classList.contains('fade-in')) {
          console.log('title2 fade-in Animation ended');
          this.title2.classList.remove('fade-in')
          this.title2.classList.add('fade-out')
        } else if (this.title2.classList.contains('fade-out')) {
          console.log('title2 fade-out Animation ended');
          this.title2.style.visibility = 'hidden'
          this.title2.classList.remove('fade-out')
          this.createMainSculpture()
        }
      };

    }
  }
);
