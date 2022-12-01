$(function () {
    $('.topBanner i').on('click', function () {
        $('.topBanner').addClass('on')
    });

    $('.main_slide').slick({
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    })

    $('.popup button').on('click', function () {
        $(this).parent().hide();
    });
})