



    $(function(){
    window.sr = ScrollReveal();
  
    if ($(window).width() < 768) {
  
        if ($('.timeline-content').hasClass('js--fadeInRight')) {
            $('.timeline-content').removeClass('js--fadeInRight').addClass('js--fadeInLeft');
        }
        if ($('i').hasClass('left')) {
          $('i').removeClass('left');
        }
  
        sr.reveal('.js--fadeInLeft', {
          origin: 'left',
          distance: '300px',
          easing: 'ease-in-out',
          duration: 800,
        });
  
    } else {
        
        sr.reveal('.js--fadeInLeft', {
          origin: 'left',
          distance: '300px',
            easing: 'ease-in-out',
          duration: 800,
        });
  
        sr.reveal('.js--fadeInRight', {
          origin: 'right',
          distance: '300px',
          easing: 'ease-in-out',
          duration: 800,
        });
  
    }
    
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
      $('.thumbnail').mouseover(function () { 
        $('.dropdown-text').toggle.css("display", "block")
      });



    });