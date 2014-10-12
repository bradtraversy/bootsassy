$(document).ready(function(){
if (Modernizr.touch) {
    // show the close overlay button
    $(".close-overlay").removeClass("hidden");
    // handle the adding of hover class when clicked
    $(".scroller-img").click(function(e){
        if (!$(this).hasClass("hover")) {
            $(this).addClass("hover");
        }
    });
    // handle the closing of the overlay
    $(".close-overlay").click(function(e){
        e.preventDefault();
        e.stopPropagation();
        if ($(this).closest(".scroller-img").hasClass("hover")) {
            $(this).closest(".scroller-img").removeClass("hover");
        }
    });
} else {
    // handle the mouseenter functionality
    $(".scroller-img").mouseenter(function(){
        $(this).addClass("hover");
    })
    // handle the mouseleave functionality
    .mouseleave(function(){
        $(this).removeClass("hover");
    });
}
});


//Portfolio
$(function () {
        
        var filterList = {
        
          init: function () {
          
            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixitup({
              targetSelector: '.portfolio',
              filterSelector: '.filter',
              effects: ['fade'],
              easing: 'snap',
              // call the hover effect
              onMixEnd: filterList.hoverEffect()
            });       
          
          },
          
          hoverEffect: function () {
          
            // Simple parallax effect
            $('#portfoliolist .portfolio').hover(
              function () {
                $(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
                $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');       
              },
              function () {
                $(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
                $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');               
              }   
            );        
          
          }

        };
        
        // Run the show!
        filterList.init();
        
        
      }); 

//Init Tooltip
$(function () {
    $("[rel='tooltip']").tooltip();
});

//Init Popover
$(function () {
    $("[rel='popover']").popover();
});
