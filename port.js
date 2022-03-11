// jquery smooth crolling
$("#navbar ul li a[href^='#']").on('click', function(e) {
    // prevent default anchor click behavior
    e.preventDefault();
    // store hash
    var hash = this.hash;
    // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
      });
 });
 $("#navbar div div a[href^='#']").on('click', function(e) {
    // prevent default anchor click behavior
    e.preventDefault();
    // store hash
    var hash = this.hash;
    // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
      });
 });
