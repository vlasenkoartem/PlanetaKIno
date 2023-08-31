$(document).ready(function() {


    $('.movies-p').mouseenter(function(){
      $(this).css('transform', 'scale(1.3) translate(5%, -5%)');
      $('.rozclad-p, .relux-p, .imax-p, .contacts-p').css('opacity', '0.6');
      $(this).css();
    });
    $('.movies-p').mouseleave(function(){
      $(this).css('transform', 'scale(1)');
      $('.rozclad-p, .relux-p, .imax-p, .contacts-p').css('opacity', '1');
    });

    $('.rozclad-p').mouseenter(function(){
     $(this).css('transform', 'scale(1.3) translate(5%, -5%)')
      $('.movies-p, .relux-p, .imax-p, .contacts-p').css('opacity', '0.6');
    });
    $('.rozclad-p').mouseleave(function(){
      $(this).css('transform', 'scale(1)');
      $('.movies-p, .relux-p, .imax-p, .contacts-p').css('opacity', '1');
    });
    $('.relux-p').mouseenter(function(){
      $(this).css('transform', 'scale(1.3) translate(5%, -5%)')
       $('.movies-p, .rozclad-p, .imax-p, .contacts-p').css('opacity', '0.6');
     });
     $('.relux-p').mouseleave(function(){
       $(this).css('transform', 'scale(1)');
       $('.movies-p, .rozclad-p, .imax-p, .contacts-p').css('opacity', '1');
     });
     $('.imax-p').mouseenter(function(){
      $(this).css('transform', 'scale(1.3) translate(5%, -5%)')
       $('.movies-p, .rozclad-p, .relux-p, .contacts-p').css('opacity', '0.6');
     });
     $('.imax-p').mouseleave(function(){
       $(this).css('transform', 'scale(1)');
       $('.movies-p, .rozclad-p, .relux-p, .contacts-p').css('opacity', '1');
     });
     $('.contacts-p').mouseenter(function(){
      $(this).css('transform', 'scale(1.3) translate(5%, -5%)')
       $('.movies-p, .rozclad-p, .relux-p, .imax-p').css('opacity', '0.6');
     });
     $('.contacts-p').mouseleave(function(){
       $(this).css('transform', 'scale(1)');
       $('.movies-p, .rozclad-p, .relux-p, .imax-p').css('opacity', '1');
     });


  var movieClickCount = 0;
  var movieNameCount = 0;
  var movieClickCountArr = ['images/bluebugphoto.jpg', 'images/barbiephoto.jpeg', 'images/kingofrepphoto.jpg', 'images/elemenalphoto.jpg', 'images/vartoviphoto.jpg'];
  var movieNameArr = ['Синій Жук (12+)', 'Барби (12+)', 'Королі репу (16+)', 'Стихії (0+)', 'Вартові Галактики 3 (16+)']


  

  $('.btn-slider2').on('click', function() {
      movieClickCount++;
      movieNameCount++;
      if (movieClickCount >= movieClickCountArr.length) {
        movieClickCount = 0;
    }
    if (movieNameCount >= movieNameArr.length) {
      movieNameCount= 0;
    }

      var movieback = $('.moviesslider');
      movieback.addClass('animating')
      setTimeout(function() {
        movieback.css('background-image', 'url(' + movieClickCountArr[movieClickCount] + ')');
        $('.movies-name-h1').text( movieNameArr[movieNameCount])
        movieback.removeClass('animating');
    }, 400);

      
  });

  $('.btn-slider1').on('click', function() {
    movieClickCount-=1;
    movieNameCount-=1;
    if (movieClickCount >= movieClickCountArr.length) {
        movieClickCount = 0;
    }
    
    if (movieNameCount >= movieNameArr.length) {
      movieNameCount= 0;
    }
    
    
  var movieback = $('#moviesslider');
  movieback.addClass('animating-reverse');
    setTimeout(function() {
        movieback.css('background-image', 'url(' + movieClickCountArr[movieClickCount] + ')');
        $('.movies-name-h1').text( movieNameArr[movieNameCount])
        movieback.removeClass('animating-reverse');
    }, 400);

    

});



function DateTime(){
  

  let dateinput = $('.movie-session-day');
  let currentDate = new Date();
  let tommorowDate = new Date(currentDate.getTime()+ 86400000);
  const options = {
    day: 'numeric',
    
   
  }
  const options2 = {
    weekday: 'long',
    
   
  }
  dateinput.text( tommorowDate.toLocaleDateString('uk-UA', options) + ' ,  ' + tommorowDate.toLocaleDateString('uk-UA', options2));
  
}
setInterval(DateTime, 1000);
DateTime();

document.addEventListener('mousemove', (e) => {
  Object.assign(document.documentElement, {
    style: `
      --move-x: ${(e.clientX) *-.005}deg;
      --move-y:  ${(e.clientY) *- .01}deg;

      --move-x-for-phones: ${(e.clientX) *-.009}deg;
      --move-y-for-phones:  ${(e.clientY) * -.03}deg;
      `,
  });
}); 


});




    

