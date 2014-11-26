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
    "assets/img/slide4.jpg",
    "assets/img/slide5.jpg"
  ], {duration: 4000});

  /* Set height of div is Window viewport*/

  bs.height($(window).height() - (bs.offset().top));

});