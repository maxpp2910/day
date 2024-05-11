
$(function(){

  if (!$('.envelope').hasClass('open')){
    $('.envelope').click(function(){
      $(this).removeClass('new').addClass('open');
    });
  }
  
  $('.mailform input, .mailform textarea').on('keyup', function(){
    if(this.value !== ''){
      $(this).prev('label').addClass('show');
    } else {
      $(this).prev('label').removeClass('show');
    }
  }).on("focus",function(){
    $(this).prev("label").addClass('focus');
  }).on("blur",function(){
      $(this).prev("label").removeClass('focus');
  });
  
  $('.notification').find('p').last().click(function(){
   $(this).closest('.notification').prev('.envelope').removeClass('send').addClass('new');
   $(this).closest('.notification').prev('.envelope').find('.mailform')[0].reset();
    $(this).closest('.notification').prev('.envelope').find('label').removeClass('show');
  });
  
  $('.mailform').submit(function(event) {
    event.preventDefault();
    
    $(this).closest('.envelope').removeClass('open').addClass('send');


  });
  

  //add an image bucle to show diferent images every 5 seconds
  var images = [
    'https://media.discordapp.net/attachments/1227836073778876450/1238979676039282698/melany.png?ex=6641413d&is=663fefbd&hm=636799571b90dd590efd381385d84a9cf43000fb97694cc85ee7bd6580efba06&=&format=webp&quality=lossless&width=597&height=597',
    'https://media.discordapp.net/attachments/1227836073778876450/1238979676563705876/tony.png?ex=6641413e&is=663fefbe&hm=20f2dce09237b29c56aa22ce8b165b8bdabd7d5f2ad9c5df6fcd3e3e12048b11&=&format=webp&quality=lossless&width=597&height=597'
];

var counter = 0;

setInterval(function() {
    var letterElement = document.querySelector('.letter img');
    letterElement.src = images[counter];
    counter++;
    if (counter === images.length) {
        counter = 0;
    }
}, 5000);

});