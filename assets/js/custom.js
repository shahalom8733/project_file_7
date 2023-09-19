$(document).ready(function(){
	

	// Mobile Menu
	$('.menu_icon').click(function(){
		$('.menu ul').slideToggle(1000);
	});

	$(".menu ul li").click(function(){
		$('.menu ul li').removeClass('active');
		$(this).addClass('active');
	})

	//  Search Box
	$('.top-search a i').click(function(event){
		$('.search-box').slideToggle();
		disabledEventPropagation(event);
	});

	$('.search-box').click(function(event){ 
		disabledEventPropagation(event);
	});
	$(document).click(function(event){ 
		$('.search-box').slideUp();
	});


	function disabledEventPropagation(event) {
	  if (event.stopPropagation) {
	    event.stopPropagation();
	  } else if (window.event) {
	    window.event.cancelBubble = true;
	  }
	}

	// Counter UP
	$('.single-fun h1').counterUp({
	    delay: 10,
	    time: 1000
	});

	// Client Slide 
	$('.client-carousel').owlCarousel({

		responsive:{
			0:{
				items:1
			},
			767:{
				items:3,
			},
			990:{
				items:4,
			}

		}
	});

   // mixitup
   			var options = {
				animation: {
			        enable: true,
			         easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
			    },
			    controls: {
			        live: false
			    }
		
			}

			var mixer = mixitup('.port-items',options);



});