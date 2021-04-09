AFRAME.registerComponent('drag-rotate-component',{
    schema : { speed : {default:1}},
    init : function(){
        this.ifMouseDown = false;
        this.x_cord = 0;
        this.y_cord = 0;
        document.addEventListener('mousedown',this.OnDocumentMouseDown.bind(this));
        document.addEventListener('mouseup',this.OnDocumentMouseUp.bind(this));
        document.addEventListener('mousemove',this.OnDocumentMouseMove.bind(this));
        console.log('register drag-rotate-component: ' + this.el.object3D.id)
    },
    OnDocumentMouseDown : function(event){
        this.ifMouseDown = true;
        this.x_cord = event.clientX;
        this.y_cord = event.clientY;
        console.log(this.el.object3D)
        console.log(this.name)
    },
    OnDocumentMouseUp : function(){
        this.ifMouseDown = false;
    },
    OnDocumentMouseMove : function(event)
    {
        if(this.ifMouseDown)
        {
            // console.log('mouse drag')
            // console.log('mouse down, moving: ' + this.el.object3D.id)
            var temp_x = event.clientX-this.x_cord;
            var temp_y = event.clientY-this.y_cord;
            if(Math.abs(temp_y)<Math.abs(temp_x))
            {
                this.el.object3D.rotateY(temp_x*this.data.speed/1000);
            }
            else
            {
                this.el.object3D.rotateX(temp_y*this.data.speed/1000);
            }
            this.x_cord = event.clientX;
            this.y_cord = event.clientY;
        }
    },
    remove: function () {
        var data = this.data;
        var el = this.el;

        el.removeEventListener('mousedown',this.OnDocumentMouseDown.bind(el));
        el.removeEventListener('mouseup',this.OnDocumentMouseUp.bind(el));
        el.removeEventListener('mousemove',this.OnDocumentMouseMove.bind(el));
        console.log('deregister drag-rotate-compenent: '+ this.el.getAttribute('id'))
    }
});