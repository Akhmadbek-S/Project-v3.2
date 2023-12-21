(function($) { //ЗАПУСКАЕТСЯ JQUERY

    //СКРИПТ ДЛЯ СЛИКА
    $(document).ready(function(){
        $('.carousel__inner').slick({
            speed: 1000,
            prevArrow: '<button type="button" class="slick-prev"><img src="icons/PrevArrow.png"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="icons/NextArrow.png"></button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    });

    //СКРИПТЫ ДЛЯ ТАБОВ
    $(function() {
      
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__page').removeClass('catalog__page_active').eq($(this).index()).addClass('catalog__page_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i){
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.card__main-screen').eq(i).toggleClass('card__main-screen_active');
                $('.card__second-screen').eq(i).toggleClass('card__second-screen_active');
            })
        })
    }
    toggleSlide('.card__main-screen');
    toggleSlide('.card__second-screen');
    });
    
})(jQuery);