// // This component hides and shows certain elements as the camera moves
// const portalComponent = {
//     schema: {
//       width: {default: 4},
//       height: {default: 10},
//       depth: {default: 1},
//     },
//     init() {
//       this.camera = document.getElementById('camera')
//       this.contents = document.getElementById('portal-contents')
//       this.walls = document.getElementById('hider-walls')
//       this.portalWall = document.getElementById('portal-wall')
//       this.isInPortalSpace = false
//       this.wasOutside = true
//     },
//     tick() {
//       const {position} = this.camera.object3D
//
//       const isOutside = position.z > this.data.depth / 2
//       const withinPortalBounds =
//         position.y < this.data.height && Math.abs(position.x) < this.data.width / 2
//
//       if (this.wasOutside !== isOutside && withinPortalBounds) {
//         this.isInPortalSpace = !isOutside
//       }
//
//       // this.contents.object3D.visible = this.isInPortalSpace || isOutside
//       // this.walls.object3D.visible = !this.isInPortalSpace && isOutside
//       // this.portalWall.object3D.visible = this.isInPortalSpace && !isOutside
//
//       this.wasOutside = isOutside
//       // if (this.isInPortalSpace) {
//       //   this.debugTextElement = document.getElementById('debug-text')
//       //   this.debugTextElement.innerHTML = 'Entered Portal'
//       // }
//     },
//   }
//   export {portalComponent}
