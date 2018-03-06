//console.log('main.js loaded');

/* 여기 스타일을 씁니다 */
$(document).ready(function() {
  'use strict';
  // console.log('main.js loaded');
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  // TODO
  var c = Shape.Circle(200, 200, 50);
  c.fillColor = 'green';

  paper.view.draw();
});
