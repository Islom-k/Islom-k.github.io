$('.sl').slick({
  autoplay: true,
  autospeed: 2000,
  dots: true,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1060,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 500,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 401,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
}
);