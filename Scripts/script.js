function TogleMenu() {
    document.querySelector('header nav').classList.toggle('show');
    document.querySelector('header button').classList.toggle('show');
    document.querySelector('.burger').classList.toggle('show');
    document.querySelector('.shadow').classList.toggle('show');
}

$(document).ready(function(){
    $('.swiper.1').slick({
        infinite: false,
        slidesToShow: 4,
        appendArrows: document.querySelector('.if .top .nav'),
        responsive: [
            {
              breakpoint: 1050,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                arrows: false,
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                arrows: false,
              }
            }
        ]
    });
});

$(document).ready(function(){
    $('.swiper.2').slick({
        infinite: false,
        slidesToShow: 4,
        appendArrows: document.querySelector('.but .top .nav'),
        responsive: [
            {
              breakpoint: 1050,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                arrows: false,
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                arrows: false,
              }
            }
        ]
    });
});