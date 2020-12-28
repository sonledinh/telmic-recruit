/*faq*/
$(document).ready(function(menuSlide) {
  var $as = $('.accordion-header').click(function() {
    $(this).toggleClass('active').next('.accordion-body').slideToggle();
    $(this).parent().siblings().children('.accordion-body').slideUp();
    $(this).parent().siblings().children('.active').removeClass('active');
    return true;
  });
});

/*voice*/
jQuery(function(){
     jQuery('#showall').click(function(){
           jQuery('.voice-section').show();
    });
    jQuery('.showSingle').click(function(){
          jQuery('.voice-section').hide();
          jQuery('#voice'+$(this).attr('target')).show();
    });
});

var selector = '.listVoice li';
    $(selector).on('click', function(){
        $(selector).removeClass('active');
        $(this).addClass('active');
});


//NAVIGATION
$('.navigation').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  if(target.length){
    var scrollTo = target.offset().top-190;
    $('body, html').animate({scrollTop: scrollTo+'px'}, 900);
  }
});

/*intership*/
$(document).ready(function(menuSlide) {
  var $as = $('.intershipShow').click(function() {
    $(this).toggleClass('active').next('.interShiptarget').slideToggle(1000);
    $(this).parent().siblings().children('.interShiptarget').slideUp(200);
    $(this).parent().siblings().children('.active').removeClass('active');
    $(this).text($(this).text() == "詳しく見る" ? "閉じる" : "詳しく見る")
    return true;
  });
});


/*test*/
/*
jQuery(function(){
  jQuery("div tong"). click(function(){
  jQuery (" div chua noi dung tong").show();
  });
  jQuery(".div con cua Tong").click function(){
  jQuery("div noi dung can an di").hide();
  jQuery("div lop chua noi dung cuar data" + $(this).attr("target")).show();
  });
});
*/
/*Guideline*/
var swiper = new Swiper('.guidelineSlider.swiper-container',{
  slidesPerView: 4,
  spaceBetween: 20,
  slidesPerGroup: 1,
  slidesPerView: 'auto',
  loop: true,
  loopFillGroupWithBlank: true,
  //responsive
  breakpoints: {
    1032:{
      slidesPerView: 4,
      spaceBetween: 0
    },
    1024: {
      slidesPerView:3,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    640: {
      slidesPerView: 1
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});