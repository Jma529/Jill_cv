



    $(function(){
    window.sr = ScrollReveal();
  
    // if ($(window).width() < 768) {
  
    //     if ($('.timeline-content').hasClass('js--fadeInRight')) {
    //         $('.timeline-content').removeClass('js--fadeInRight').addClass('js--fadeInLeft');
    //     }
    //     if ($('i').hasClass('left')) {
    //       $('i').removeClass('left');
    //     }
  
    //     sr.reveal('.js--fadeInLeft', {
    //       origin: 'left',
    //       distance: '300px',
    //       easing: 'ease-in-out',
    //       duration: 800,
    //     });
  
    // } else {
        
    //     sr.reveal('.js--fadeInLeft', {
    //       origin: 'left',
    //       distance: '300px',
    //         easing: 'ease-in-out',
    //       duration: 800,
    //     });
  
    //     sr.reveal('.js--fadeInRight', {
    //       origin: 'right',
    //       distance: '300px',
    //       easing: 'ease-in-out',
    //       duration: 800,
    //     });
  
    // }
    
    sr.reveal('.js--fadeInLeft', {
          origin: 'left',
          distance: '10px',
          easing: 'linear',
          duration: 400,
        });
  
        sr.reveal('.js--fadeInRight', {
          origin: 'right',
          distance: '10px',
          easing: 'linear',
          duration: 400,
        });
  
    });

    $(document).ready(function(){
      // $('.thumbnail-img').mouseover(function () { 
      //   $('.dropdown-text').css("display", "block");
      // });
      // $('.thumbnail').click(function () { 
      //   $('.dropdown-text').css("display", "none");
      // });
/* Toggle Nav Menu */
      $('#show').click(function() {
        $('.hover-nav').toggle()
            });
 
    /* Change menu color on scroll */
      let scroll1 = $('#hobbies').offset().top;
      let scroll2 = $('#projects').offset().top;
        $(window).scroll(function () {
          let scrollPos = $(document).scrollTop();
          if (scrollPos >= scroll1 && scrollPos < scroll2) {
            $('#show').css('color', 'white');
          } else if (scrollPos >= scroll2) {
            $('#show').css('color', '#3e5874');
          } else {
            $('#show').css('color', '#3e5874');
          }
     
        });
      });

    