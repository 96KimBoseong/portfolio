$(document).ready(function () {
  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    scrolling: true,

    css3: true,

    navigation: true,
    slidesNavigation: true,
    keyboardScrolling: false,
  });

  //methods
  $.fn.fullpage.setAllowScrolling(true);
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  freeMode: true,
  watchSlidesProgress: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  /* navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }, */

  // And if we need scrollbar
  /* scrollbar: {
    el: ".swiper-scrollbar",
  }, */
});
