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

 /* Nano Gallery */

 /* Main Gallery Nano Gallery */

  $("#nanoGallery3").nanoGallery({
      thumbnailWidth: 'auto',
      thumbnailHeight: 250,
      colorScheme: 'none',
      thumbnailHoverEffect: [{ name: 'labelAppear75', duration: 300 }],
      theme: 'light',
      thumbnailGutterWidth : 0,
      thumbnailGutterHeight : 0,
      i18n: { thumbnailImageDescription: 'View Photo', thumbnailAlbumDescription: 'Open Album' },
      thumbnailLabel: { display: true, position: 'overImageOnMiddle', align: 'center' },
      thumbnailLazyLoad: true
  });

  /* Example Nano Galleries */

  $(".nanoGallery").nanoGallery({
      thumbnailWidth: 'auto',
      thumbnailHeight: 250,
      userID: '111186676244625461692', kind:'picasa',
      album: '5911347863561293937',
      colorScheme: 'none',
      thumbnailHoverEffect: [{ name: 'labelAppear75', duration: 300 }],
      theme: 'light',
      thumbnailGutterWidth : 0,
      thumbnailGutterHeight : 0,
      i18n: { thumbnailImageDescription: 'View Photo', thumbnailAlbumDescription: 'Open Album' },
      thumbnailLabel: { display: true, position: 'overImageOnMiddle', align: 'center' },
      thumbnailLazyLoad: true
    });

});