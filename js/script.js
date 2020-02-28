$(document).ready(function(){

  $('select').niceSelect();

  $(".mobile-menu-icon.fa-bars").click(function(){
        $(".hidden-mobile").slideToggle();
    });


    $(".mobile-menu-icon.fa-times").click(function(){
        $(".hidden-mobile").slideToggle();
    });

  $('#horizontalTab').easyResponsiveTabs({
      type: 'default', //Types: default, vertical, accordion
      width: 'auto', //auto or any width like 600px
      fit: true,   // 100% fit in a container
      closed: 'accordion', // Start closed if in accordion view
      activate: function(event) { // Callback function if tab is switched
          var $tab = $(this);
          var $info = $('#tabInfo');
          var $name = $('span', $info);

          $name.text($tab.text());

          $info.show();
      }
  });

  $('#verticalTab').easyResponsiveTabs({
      type: 'vertical',
      width: 'auto',
      fit: true
  });


  $("#owl-demo").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds

      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]


  });


  $('.bxslider').bxSlider({adaptiveHeight:true, mode:'horizontal', auto:true, speed: 500,  pause: 6000});

  $('select').niceSelect();



});


//----------SEARCH--------//
jQuery(document).ready(function($) {
    var wHeight = window.innerHeight;
    //search bar middle alignment
    $('#mk-fullscreen-searchform').css('top', wHeight / 2);
    //reform search bar
    jQuery(window).resize(function() {
        wHeight = window.innerHeight;
        $('#mk-fullscreen-searchform').css('top', wHeight / 2);
    });
    // Search

    $('#search-button').click(function() {
        console.log("Open Search, Search Centered");
        $("div.mk-fullscreen-search-overlay").addClass("mk-fullscreen-search-overlay-show");
    });
    $("a.mk-fullscreen-close").click(function() {
        console.log("Closed Search");
        $("div.mk-fullscreen-search-overlay").removeClass("mk-fullscreen-search-overlay-show");
    });
});


$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link2');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu2').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('#accordion'), false);
});
