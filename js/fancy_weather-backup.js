// FUNCTIONS
$(document).ready(function() {


function getRandomBetween(min, max) {
  return Math.random() * (max - min) + min;
}


// RAIN ANIMATION

var density = 180;
var iconname = 'raindrop';
var easechosen = 'Power4.EaseOut';
var animwidth = $('.animation-container').width();
var windowheight = $(window).height();
var windowwidth = $(window).width()
var startbox_inner = $(".rainstartpos-inner");
var startbox_outer = $(".rainstartpos-outer");



function spawn(particle) {

  var random_width = Math.floor(Math.random() * animwidth / 2) + 1; // this will get a number between 1 and 99;
  random_width *= Math.floor(Math.random() * 2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases

  tl_rain_inner.fromTo(particle, 1, {
      // ** From values
      y: 0,
      x: random_width,
      ease: easechosen,
      blur: 0,
      opacity: 1,
      height: getRandomBetween(10, 60)
    }, {
      // ** To values
      y: getRandomBetween(600, 900),
      x: random_width,
      ease: easechosen,
      backgroundColor: "rgb(0,255,255)",
      blur: 0,
      opacity: 1
    },
    "=-0.98");
}

function spawnOuter(particle) {

  var random_width = Math.floor(Math.random() * animwidth / 2) + 1; // this will get a number between 1 and 99;
  random_width *= Math.floor(Math.random() * 2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases

  tl_rain_outer.fromTo(particle, 1.5, {
      // ** From values
      y: 0,
      x: random_width,
      ease: easechosen,
      blur: 0,
      opacity: 1,
      height: getRandomBetween(10, 60)
    }, {
      // ** To values
      y: getRandomBetween(900, 1300),
      x: random_width,
      ease: easechosen,
      backgroundColor: "rgb(0,255,255)",
      blur: 0,
      opacity: 1
    },
    "=-1.45");
}

// var tl_rain_inner, tl_rain_outer;
  var tl_rain_inner = new TimelineMax({
    repeat: -1,
    repeatDelay: 0,
    // onComplete: rain_animation()
  });

  var tl_rain_outer = new TimelineMax({
    repeat: -1,
    repeatDelay: 0
  });


function rain_animation() {

  for (i = 0; i < density; i++) {
    spawn($(`<div> </div>`).attr('id', "particle" + i).addClass(iconname).addClass("raindrop").appendTo(startbox_inner));
    if (i == 1) {
      overlappingRain();
    }
  }
  function overlappingRain() {
    for (j = 0; j < density; j++) {
      spawnOuter($(`<div> </div>`).attr('id', "particle" + j).addClass(iconname).addClass("raindrop").appendTo(startbox_outer));
    }
  }
}

function cloud_animation() {
  var tl_cloud = new TimelineMax({
    repeat: -1,
    repeatDelay: 0,
    yoyo: true
  });
  tl_cloud.to($(".raincloud-1"), 10, {x: -500, ease: Power1.easeInOut}, "0")
  .to($(".raincloud-2"), 10, {x: -500, ease: Power1.easeInOut}, "-=8")
  .to($(".raincloud-3"), 10, {x: -500, ease: Power1.easeInOut}, "-=8")

}


  cloud_animation();
  rain_animation();



// *************  Interaction Button Clicks  ***************
  var tempToday = $(".temp-today");
  var tempTomorrow = $(".temp-tomorrow");
  var tempFriday = $(".temp-friday");


// TODAY

  $(".day-today").on("click", function() {
    var tl = new TimelineMax();
    tl.to(tempToday, 1, {left: "0%", ease: Power4.easeInOut})
    .to(tempFriday, 1, {left: "100%", ease: Power4.easeInOut}, "-=0.9")
    .to(tempTomorrow, 1, {left: "100%", ease: Power4.easeInOut}, "-=0.9");

    console.log(tl_rain_inner.progress());

    tl_rain_inner.repeat(1);
    tl_rain_outer.repeat(1);
    rain_animation();

  });


// TOMORROW

  $(".day-tomorrow").on("click", function() {
    var tl = new TimelineMax();
    tl.to(tempToday, 1, {left: "100%", ease: Power4.easeInOut})
    .to(tempFriday, 1, {left: "100%", ease: Power4.easeInOut}, "-=0.9")
    .to(tempTomorrow, 1, {left: "0%", ease: Power4.easeInOut}, "-=0.9");

    TweenLite.to(tl_rain_outer, 1, {onComplete: stoprain()});

    // TweenLite.to(tl_rain_outer, 1, {progress:1, repeat: 0});
  });

  function stoprain() {
    tl_rain_outer.repeat(0);
  }

// FRIDAY

  $(".day-friday").on("click", function() {
    var tl = new TimelineMax();
    tl.to(tempToday, 1, {left: "100%", ease: Power4.easeInOut})
    .to(tempFriday, 1, {left: "0%", ease: Power4.easeInOut}, "-=0.9")
    .to(tempTomorrow, 1, {left: "100%", ease: Power4.easeInOut}, "-=0.9");
  });





});







// LIAM
