$(document).ready(function() {
  /* Backstretch Init */

  var bs = $(".backstretch-slider");
  var mn = $(".main-nav");
  var mns = "main-nav-scrolled";
  var hdr = $('header').height();

  bs.backstretch([
    "assets/media/slide1.jpg",
    "assets/media/slide2.jpg",
    "assets/media/slide3.jpg",
    "assets/media/slide4.jpg"
  ], {duration: 4000, fade: "normal"});

  /* Set height of div is Window viewport if it exists*/

  if(bs.length){
    bs.height($(window).height() - (bs.offset().top));
  }

  function resizeWindow(e){
    var slideshowHeight = $(window).height() - $('#header').outerHeight();
    if( $('body').length > 0 ) {
      $('#backstretch-slider, .backstretch-slider').height(slideshowHeight);
    }
  }
  $(window).bind('resize', resizeWindow);
  resizeWindow();

  /* WOW.js Init */

  new WOW().init();

  /* Sticky Navi */

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