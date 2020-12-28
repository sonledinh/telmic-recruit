(function ($) {
    var $article = $('.interview-slider-article');
    var length = $article.length;
    $article.each(function (i) {
        $(this).find('.interview-slider-nav-number')
            .text((i + 1) + ' / ' + length);
    });

    var slider = new Swiper('.interview-slider', {
        loop: true
    });

    $(document).on('click', '.interview-slider-nav-button', function (e) {
        e.preventDefault();

        if ($(this).hasClass('is-prev')) {
            slider.slidePrev();
        } else if ($(this).hasClass('is-next')) {
            slider.slideNext();
        }
    });

})(jQuery);