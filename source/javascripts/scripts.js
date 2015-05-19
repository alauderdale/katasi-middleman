$(document).ready(function(){

	 //fancybox
	$('.fancybox').fancybox();
	
	$('.fb-video').fancybox({
        padding: 0,
        width: "100%",
        height: 870,
        autoSize: false,
        helpers: {
            media: {}
        }
   });

	$('.tooltip-up').tooltip({html:true});


//smooth scroll

	$(function() {
		  $('a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top-57
		        }, 1000);
		        return false;
		      }
		    }
		  });
		});


	////colappse menu


	 $(window).scroll(function(){
     var divOffset = $('.menu-change').offset();
     if(window.scrollY > divOffset.top ){
        $('.main-nav').addClass('small-nav');
     }
     if(window.scrollY < divOffset.top){
        $('.main-nav').removeClass('small-nav');
     }
    });


});
