/* global AFRAME */

AFRAME.registerComponent('click-on-box', {

  init: function () {
    this.el.addEventListener('click', this.boxClicked.bind(this));
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
    // Get a reference to the torpedo by looking at the id value
    // of the HTML element and emit the 'fire' event
    let torpedo = document.getElementById('torpedo');
    let boxPosition = this.el.getAttribute('position')
    torpedo.emit('fire', {boxPosition: boxPosition})
  }

});