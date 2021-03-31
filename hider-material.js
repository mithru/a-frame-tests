AFRAME.registerComponent('hider-material', {
  schema:{
    color:{type:'color', default:'#AAA'}
  },
  init: function () {
    console.log('Hello, World!');
    let basicMaterial = new THREE.MeshBasicMaterial({
      colorWrite: false
    })

    let el = this.el;
    let data = this.data;
    el.material = basicMaterial
    el.material.colorWrite = false;
    // console.log(el.material) 
    // el.setAttribute('material', "shader: flat; color: red; opacity: 0.5")
  },
});
