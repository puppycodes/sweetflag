// Swiper Init
$(document).ready(function () {
var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,

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
