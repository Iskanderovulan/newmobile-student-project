$('.mobile-btn').on('click',function (){
    $('.mobile-btn').toggleClass('show-mobile-btn');
    $('.nav').toggleClass('show-nav')
});

$('.nav a').on('click',function (){
    $('.mobile-btn').removeClass('show-mobile-btn');
    $('.nav').removeClass('show-nav')
});


    $(document).ready(function(){
        $("nav").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });

    // Mobile scroll  Mobile scroll


$(window).scroll(function () {
    if($(this).scrollTop() > 100){
        $('header').addClass('header-fixed');
    } else {
        $('header').removeClass('header-fixed');
    }
});
