/* Resume page animations */
$(function () {
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


$(document).ready(function () {
 
 
  /* Toggle Nav Menu */
  /* Hide hamburger icon and show menu on click */
  $('#open-menu').click(function () {
    $(this).hide();
    $('.toggle-nav').width('100%');
  });
  /* On click of menu item, hide menu and show hamburger icon */
$('.menu-item').click(function (){
$('.toggle-nav').width('0');
$('#open-menu').show();
});
/* On click of close icon, hide menu and show hamburger icon */
  $('.close').click(function () {
    $('.toggle-nav').width('0');
    $('#open-menu').show();
  });

  /* Change menu color on scroll  */
//   let scroll1 = $('#about').offset().top;
//   let scroll2 = $('#experience').offset().top;
//   let scroll3 = $('#hobbies').offset().top;
//   let scroll4 = $('#projects').offset().top;
  
//   $(window).scroll(function () {
//     let scrollPos = $(document).scrollTop();
//     if (scrollPos >= scroll1 && scrollPos < scroll2) {
//       $('#open-menu').css('color', 'white');
//     }
//     else if (scrollPos >= scroll3 && scrollPos < scroll4) {
//       $('#open-menu').css('color', 'white');
//     } else if (scrollPos >= scroll4) {
//       $('#open-menu').css('color', '#3e5874');
//     } else {
//       $('#open-menu').css('color', '#3e5874');
//     }

//   });
// });

  /* Change menu color on scroll  */
  let scroll1 = $('#about').offset().top;
  let scroll2 = $('#experience').offset().top;
  let scroll3 = $('#hobbies').offset().top;
  let scroll4 = $('#projects').offset().top;

  $(window).scroll(function () {
    let windowPos = $(window).scrollTop();
    if (windowPos >= scroll1 && windowPos < scroll2){
      $('#open-menu').css('color', 'white');
    } else if (windowPos >= scroll3 && windowPos < scroll4){
      $('#open-menu').css('color', 'white');
     } else {
      $('#open-menu').css('color', '#3e5874');
    }

  });

  if ($window.width() < 1000){
    let windowPos = $(window).height();
    if (windowPos = scroll1 && windowPos < scroll2){
      $('#open-menu').css('color', 'white')
  
  
    }

  }
});


// Overlay Effect //
function on() {
  document.querySelector(".overlay").style.display = "block";
}

function off() {
  document.querySelector(".overlay").style.display = "none";
}