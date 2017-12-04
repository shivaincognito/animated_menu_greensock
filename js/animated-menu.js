var scrollposition;
var blueboxpos = $(".section3").offset().top;
var tl = new TimelineMax();

$(window).scroll(function(){
  scrollposition = $(window).scrollTop();
  // if (scrollposition > blueboxpos) {
  //   tl.from( $(".section4") , 1, { x : -100 , opacity : 1}  )
  // }
});


$(document).ready(function(event) {

// LOADING SCREEN

var tlintro = new TimelineMax({repeat: 1, repeatDelay: 0.75, onComplete:loadingOutro});
var introlength = 0.5;
var introff = "-=0.45";

// tlintro.paused(true)
  tlintro.from($(".loading-row").eq(0).children("h2").eq(0), introlength, {x: -20, opacity: 0, ease: Power4.easeInOut})
  .from($(".loading-row").eq(0).children("h2").eq(1), introlength, {x: -20, opacity: 0, ease: Power4.easeInOut}, introff)
  .from($(".loading-row").eq(0).children("h2").eq(2), introlength, {x: -20, opacity: 0, ease: Power4.easeInOut}, introff)
  .from($(".loading-row").eq(1).children("h2").eq(0), introlength, {x: -20, opacity: 0, ease: Power4.easeInOut}, introff)
  .from($(".loading-row").eq(1).children("h2").eq(1), introlength, {x: -20, opacity: 0, ease: Power4.easeInOut}, introff)
  .from($(".loading-row").eq(1).children("h2").eq(2), introlength, {x: -20, opacity: 0, ease: Power4.easeInOut}, introff)
  .from($(".loading-row").eq(2).children("h2").eq(0), introlength, {x: -20, opacity: 0, ease: Power4.easeInOut}, introff)
  .from($(".loading-row").eq(2).children("h2").eq(1), introlength, {x: -20, opacity: 0, ease: Power4.easeInOut}, introff)
  .from($(".loading-row").eq(2).children("h2").eq(2), introlength, {x: -20, opacity: 0, ease: Power4.easeInOut}, introff)

// $(".intro-container").on("click", function() {
//   tlintro.play();
// })

// OUTRO AND MAIN PAGE

function loadingOutro() {
  var tlintro2 = new TimelineMax();
  tlintro2.to($(".loading-line1"), 0.7, {height: "20%", ease: Power4.easeIn}, "-=0.5")
  .to($(".loading-line1"), 0.7, {top: "90%",height: "0%", ease: Power4.easeOut}, "-=0.1")
  .to($(".intro-container"), 2, {x: "100%", ease: Power4.easeInOut}, "-=0.5")
  .from($(".header h2"), 0.8, {y: -20, opacity: 0, ease: Power4.easeInOut},"-=1.0")
  .from($(".header h3"), 0.8, {y: 20, opacity: 0, ease: Power4.easeInOut},"-=0.6")
  .to($(".hamburger-button"), 0.8, {right: "20px", ease: Power4.easeInOut}, "-=0.7")
  .to($(".header-border-l"), 0.8, {left: "0%", width: "51%", ease: Power4.easeInOut},"-=0.5")
  .to($(".header-border-r"), 0.8, {width: "50%", ease: Power4.easeInOut},"-=0.8")
  .from($(".header"), 0.8, {y: -20, ease: Power4.easeInOut},"-=0.6")
  .from($(".section2"), 0.8, {y: -20, opacity: 0, ease: Power4.easeInOut},"-=0.7")
  .from($(".section3"), 0.8, {y: -20, opacity: 0, ease: Power4.easeInOut},"-=0.7")
  .from($(".section4"), 0.8, {y: -20, opacity: 0, ease: Power4.easeInOut},"-=0.7")
  .from($(".section5"), 0.8, {y: -20, opacity: 0,  ease: Power4.easeInOut},"-=0.7")
  .from($(".footer"), 0.8, {y: -20, opacity: 0,  ease: Power4.easeInOut},"-=0.7")
}


// Section hover functions

var hoverease = "Power4.easeOut";

  $(".section").on({
      mouseenter: function() {
        var tll = new TimelineLite();
        var h2 = $(this).children("h2");
        var h3 = $(this).children("h3");
        tll.to(h2, 0.8, {y: -10, ease: hoverease}, "-=0.0")
        .to(h3, 0.8, {y: -5, ease: hoverease}, "-=0.6")
      },
      mouseleave: function(){
        var tll = new TimelineLite();
        var h2 = $(this).children("h2");
        var h3 = $(this).children("h3");
        tll.to(h2, 0.8, {y: 0, ease: hoverease}, "-=0.0")
        .to(h3, 0.8, {y: 0, ease: hoverease}, "-=0.6")
      }
  });

  // Menu button underline hovers

  $(".button").on({
      mouseenter: function() {
        var tll = new TimelineLite();
        var border = $(this).children(".button-borderbtm");
        tll.to(border, 0.3, {width: "300px", ease: Power4.easeInOut});
      },
      mouseleave: function(){
        var tll = new TimelineLite();
        var border = $(this).children(".button-borderbtm");
        tll.to(border, 0.3, {width: 0, ease: Power4.easeInOut});
      }
  });

  // Hamburger outline hovers

  var bg1 = $(".button-bg").eq(0);
  var bg2 = $(".button-bg").eq(1);
  var bg3 = $(".button-bg").eq(2);
  var bg4 = $(".button-bg").eq(3);
  var bg5 = $(".button-bg").eq(4);
  var hamburgeropen = false;

  $(".hamburger-button").on({
    click: function() {

      var tll = new TimelineLite();

      if (!hamburgeropen) {
        var hamburgertext = $(this).find(".hamburger-btn-text");
        var container = $(".hamburger-container");
        tll.to(hamburgertext, 0.7, {x: "-50%", ease: Power4.easeInOut})
        .to(container, 1, {left: "0%", ease: Power4.easeInOut}, "-0.3")
        .to(bg1, 1, {left: "100%", ease: Power4.easeInOut}, "-=0.8")
        .to(bg2, 1, {left: "100%", ease: Power4.easeInOut}, "-=0.8")
        .to(bg3, 1, {left: "100%", ease: Power4.easeInOut}, "-=0.8")
        .to(bg4, 1, {left: "100%", ease: Power4.easeInOut}, "-=0.8")
        .to(bg5, 1, {left: "100%", ease: Power4.easeInOut}, "-=0.8")
      }

      else if (hamburgeropen) {
        var hamburgertext = $(this).find(".hamburger-btn-text");
        var container = $(".hamburger-container");
        tll.to(hamburgertext, 0.7, {x: "0%", ease: Power4.easeInOut})
        .to(bg1, 0.8, {left: "-100%", ease: Power4.easeInOut}, "-=0.7")
        .to(bg2, 0.8, {left: "-100%", ease: Power4.easeInOut}, "-=0.7")
        .to(bg3, 0.8, {left: "-100%", ease: Power4.easeInOut}, "-=0.7")
        .to(bg4, 0.8, {left: "-100%", ease: Power4.easeInOut}, "-=0.7")
        .to(bg5, 0.8, {left: "-100%", ease: Power4.easeInOut}, "-=0.7")
        .to(container, 0.8, {left: "-100%", ease: Power4.easeInOut}, "+0.5")
      }
        hamburgeropen = !hamburgeropen;
    }
  });


  var placeholder_on = false;

  $(".input-search").on("click", function() {
    $(this).toggleClass("input-search-large");
    if (placeholder_on) {
      $(this).attr("placeholder", "Search").val("").focus()
    }
    if (!placeholder_on) {
      $(this).attr("placeholder", "Search for a new bicycle ...").val("").focus()
    }

    placeholder_on = !placeholder_on;
  });












});
