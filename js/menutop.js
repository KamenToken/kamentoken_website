// function changeCss() {

//     if (this.scrollY >= document.querySelector(".banner").clientHeight - 100) {
//       $('#menu').css('background-image', 'linear-gradient(to top, rgb(168, 237, 234) 0%, rgb(85, 204, 188) 100%)');
//       $('#menu').css('margin-top', '0px');
//       $('#menu .nav-link').css('color', '#fff');
//         $('#logo img').css('width', '70px');
//       $('#logo img').css('height', '70px');
//       $('#logo img').css('transition', '0.5s');
//        $('.navbar').css('height', '75px');
//         $('.navbar-nav').css('margin-top', '10px');
//         $('.navbar-collapse').css('background-image', 'linear-gradient(to top, rgb(168, 237, 234) 0%, rgb(85, 204, 188) 100%)');

//         $('.navbar-right').css('margin-top', '15px'); 
//     }
//     else {
//       $('#menu').css('background-image', 'none');
//        $('.navbar-collapse').css('background-image', 'none');
//       $('#menu .nav-link').css('color', '#fff');
//        $('#logo img').css('width', '150px');
//       $('#logo img').css('height', '150px');
//        $('.navbar').css('height', '150px');
//         $('.navbar-nav').css('margin-top', '50px');
//     }
//   }
//   window.addEventListener("scroll", changeCss, false);


$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});
