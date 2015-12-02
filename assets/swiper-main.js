// Swiper Init
$(document).ready(function () {
var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // Default parameters
    slidesPerView: 2,
    spaceBetween: 30,
    // Responsive breakpoints
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1
      },
      // when window width is <= 480px
      480: {
        slidesPerView: 1
      },
      // when window width is <= 640px
      640: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 1
      }
    },

  // If we need pagination
  //pagination: '.swiper-pagination',

  // Navigation arrows
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',

  // And if we need scrollbar
  //scrollbar: '.swiper-scrollbar',
})

/* Update main product image when a thumbnail is clicked. */
/*==========================*/
$('.product-photo-thumb a').on('click', function(e) {
  e.preventDefault();
  switchImage($(this).attr('href'), null, $('.product-photo-container img')[0]);
} );

  });
