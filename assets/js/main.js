$(window).load(function() {
  
  /* Flexslider Init */
  /*
  $('.flexslider').flexslider({
    animation: "fade"
  });
    /*

  /* Backstretch Init */

  var bs = $(".backstretch-slider");

  bs.backstretch([
    "assets/img/slide1.jpg",
    "assets/img/slide2.jpg",
    "assets/img/slide3.jpg",
    "assets/img/slide4.jpg"
  ], {duration: 4000, fade: "normal"});

  /* Set height of div is Window viewport if it exists*/

  if(bs.length){
    console.log("hi");
    bs.height($(window).height() - (bs.offset().top));
  }

  /* WOW.js Init */

  new WOW().init();

  /* Sticky Navi */

var  mn = $(".main-nav");
  mns = "main-nav-scrolled";
  hdr = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});

});