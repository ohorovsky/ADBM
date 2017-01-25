$(function() {
    $('body').removeClass('fade-out');
});

$(document).ready(function(){
   
    var controller = new ScrollMagic.Controller();
    
    
    
    $('.row').each(function(){
       
       var ourScene = new ScrollMagic.Scene({
        
        triggerElement:this,
        
        triggerHook:0.8
        
        
    })
    
    .setClassToggle(this, 'fade-in')
    .addTo(controller); 
        
    });
    
});

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

var didScroll;
// on scroll, let the interval function know the user has scrolled
$(window).scroll(function(event){
  didScroll = true;
});
// run hasScrolled() and reset didScroll status
setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);
function hasScrolled() {
  // do stuff here...
    
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up').addClass('nav-down');
        }
        
    }
    if($(window).scrollTop() == 0) {
            
            $('nav').removeClass('nav-down');
            
        }
    
    lastScrollTop = st;
};

var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("nav").outerHeight();





$("#form").submit(function(){   //Prevent bootstrap form from submiting.. Not reloading on submit..
                return false;
            });

//Email validation

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

$("#submitButton").click(function(){
    
    if(isEmail($("#email").val()) == false){
        
        $(".danger").fadeIn();
        
    }else{
        
        $(".danger").fadeOut();
        $("#form").unbind("submit").submit();       //Enable form to submit when correct email is entered..
        
    };
    
});

$("#resetButton").click(function(){
    
    $(".danger").fadeOut();
     
});




$("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
        //Select animation
        var animation = 'easeOutCubic';
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, animation, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

$('#myModal').modal(options);










