$(window).load(function() {

  /* Flexslider */
  /*
  $('.flexslider').flexslider({
    animation: "fade"
  });
    /*

  /* Backstretch */
  $(".test").backstretch([
    "assets/img/slide1.jpg",
    "assets/img/slide2.jpg",
    "assets/img/slide3.jpg",
    "assets/img/slide4.jpg",
    "assets/img/slide5.jpg"
  ], {duration: 4000});

  /* Height of Div is Window viewport*/

console.log($(".test").offset().top);
  
$(".test").height($(window).height() - ($(".test").offset().top));
});