// Slick image slider code for top page jumbotron
$(document).ready(function() {

  // Implemented Slick carousel to top page 'jumbotron'
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  // Code to hide navigation bar after 50px scroll
  // Functional, but doesn't work on 'navbar', because 'navbar' was not implemented properly through Bootstrap!!!
  // To see working version, go to /_solution folder
  var lastScrollPos = 0; // Variable storing information about how far user scrolled from top (initially set to 0)

  $(window).scroll(function() {

    var scrollPos = $(this).scrollTop(); // Stores vertical position of scroll bar from top of the page

    if (scrollPos - lastScrollPos > 50) {
      var navbarHeight = $('.navbar').css('height'); // Variable storing height value of navbar
      $('.navbar').animate({top: '-' + navbarHeight}, 150);
      lastScrollPos = scrollPos; // Overwrites last scroll position with new one

    } else if (lastScrollPos - scrollPos > 50) {
      $('.navbar').animate({top: '0px'}, 150);
      lastScrollPos = scrollPos;
    }
  });

});
