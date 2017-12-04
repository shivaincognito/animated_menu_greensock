// LOADING SCREEN

var density = 300;

var iconname = 'fontawesome-facebook-sign';
var colors = ["rgb(64, 162, 126)", "rgb(213, 146, 70)", "rgb(75, 129, 222)", "rgb(221, 50, 165)"]
var delay = 0.00;
var scale = 5;
var duration = 1;
var easechosen = 'Power4.EaseOut';
var offset = "=-0.98";

var tl = new TimelineMax();

function spawn(particle) {

  var windowheight = $(window).height();
  var windowwidth = $(window).width();

  var random_height = Math.floor(Math.random()*windowheight/2) + 1; // this will get a number between 1 and 99;
  random_height *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases

  var random_width = Math.floor(Math.random()*windowwidth/2) + 1; // this will get a number between 1 and 99;
  random_width *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases

  tl.set(particle, {
    // scale: 1, //Math.floor(Math.random() * scale),
    // color: colors[Math.floor(Math.random() * colors.length)],
    // rotation: Math.floor(Math.random() * 360)
  });

  tl.to(particle, duration, {
    y: random_height,
    x: random_width,
    ease: easechosen,
    rotation: Math.floor(Math.random() * 360),
    color: "rgb(0,255,255)",
    blur: 0,
    opacity: 0
  }, offset);
}



$(document).ready(function(event) {
  var startbox = $(".startbox");
  for (i = 0; i < density; i++) {
    spawn($(`<div> </div>`).attr('id', "particle"+i).addClass(iconname).addClass("particle").appendTo(startbox) );
  }
});
