$(document).ready(function(){
    $('.single_item').slick({
        infinite: false,
        speed: 500,
        fade: true,
        prevArrow: '<button type="button" class="slick-prev"><span class="icon-chevron-left"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="icon-chevron-right"></span></button>'
    });
    $('.photo_gallery').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev"><span class="icon-chevron-left"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="icon-chevron-right"></span></button>',
        responsive: [
          {
            breakpoint: 780,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });
    var mydate=new Date();
    var year=mydate.getFullYear();
    $('.year').html(year);
    $('.hamburger a').click(function(e){
		e.preventDefault();
        $(this).parents('body').toggleClass('open');
    });
    $('.phone a').click(function(){
      $(this).toggleClass('active');
      $(this).next().toggleClass('active');
    })
    $('.drop_menu a[href^="#"], *[data-href^="#"]').on('click', function(e){
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
        $('body').removeClass('open');
    });
    if($(window).width() > 1025){
        $(window).load(function() {
            AOS.init({
                easing: 'ease-in-out-sine'
            });
        });
    }  
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });
    $('.top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
  });
