(function($) {

// prettyPhoto
	jQuery(document).ready(function(){
		jQuery('a[data-gal]').each(function() {
			jQuery(this).attr('rel', jQuery(this).data('gal'));
		});
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
			animationSpeed:'normal',
			theme:'dark_rounded',
			slideshow:false,
			overlay_gallery: false,
			social_tools:false,
			deeplinking:false
		});
	});

	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('.navbar').outerHeight();

	$(window).scroll(function(event){
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll){
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	function hasScrolled(){
		var st = $(this).scrollTop();
		if (Math.abs(lastScrollTop - st) <= delta) {
			return;
		}
		// If current position > last position AND scrolled past navbar...
		if (st > lastScrollTop && st > navbarHeight){
		  // Scroll Down
		  $('.navbar').removeClass('nav-down').addClass('nav-up');
		} else {
		  // Scroll Up
		  // If did not scroll past the document (possible on mac)...
		  if(st + $(window).height() < $(document).height()) {
		    $('.navbar').removeClass('nav-up').addClass('nav-down');
		  }
		}
		lastScrollTop = st;
	}

})(jQuery);
