$(document).ready(function(){
    $('.slider').slick({
        asNavFor: ".reviews__content-slider",
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '20px',
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        }]
    });

$(".reviews__content-slider").slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".slider",
    customPaging: function (slider, i) {
      let current = i + 1;
      let total = slider.slideCount;
      return `<button type="button" role="button" tabindex="0" class="slick-dots-button">
            <span class="slick-dots-current">${current}</span>
            <span class="slick-dots-separator">/</span>
            <span class="slick-dots-total">${total}</span>
        </button>`;
    },
});
    });