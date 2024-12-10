/* global AFRAME, TORPEDO_SPEED, TORPEDO_MARGIN */

AFRAME.registerComponent('collide', {

 schema: {
   boxDistance: {type: 'number'}
 },

 init: function () {
   this.el.addEventListener('hitstart', this.collide.bind(this));
 },

 collide: function() {
   let box = document.getElementById('box');
   let position = box.getAttribute('position');
   position.x = Math.random() * 10 * ((Math.random() < 0.5) ? -1 : 1);
   position.y = Math.random() * 9 + 1;  // Minimum y-value is 1 so it's above ground
   position.z = -(Math.random() * 8 + 2);
   box.setAttribute('position', position);
   this.el.setAttribute('visible', false);
 },

});

AFRAME.registerComponent('teleport', {

  init: function () {
    this.el.addEventListener('obbcollisionstarted', this.boxClicked.bind(this));
  },
/*
  boxClicked: function() {
    let position = this.el.getAttribute('position')
    position.y = (Math.random())*9+1
    position.x = (Math.random()-0.5) * 20
    position.z = (Math.random()*8)-10
    this.el.setAttribute('position', position)
  }*/
  boxClicked: function() {
    
   let box = document.getElementById('box');
   let position = box.getAttribute('position');
   position.x = Math.random() * 10 * ((Math.random() < 0.5) ? -1 : 1);
   position.y = Math.random() * 9 + 1;  // Minimum y-value is 1 so it's above ground
   position.z = -(Math.random() * 8 + 2);
   box.setAttribute('position', position);
   this.el.setAttribute('visible', false);
  }

});