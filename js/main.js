// get desktop size. Can't believe i must add this...
var screenwidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)-100 ;
var screenheight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)-100;

(function($) {

	// This part is completely useless in theory but it tend to not work if it's not there...
    window.app = {

        init: function() {
            
            this.is_ipad = navigator.userAgent.indexOf('iPad') > -1;
            this.is_iphone = navigator.userAgent.indexOf('iPhone') > -1;
            
            return true;
        },

    spritely: {
		init: function() {
			
			// Init Balrog's movements
			$('#balrog').sprite({fps: 12, no_of_frames: 1}).active();
			
			$('#balrog').spRandom({top: 50, left: 20, right: screenwidth, bottom: screenheight, speed: 7000, pause: 30})
			},
		},
	};
	
	// Inits the whole shebang
	$(document).ready(function() {

        window.app.init();
        window.app.spritely.init();
    });
	
})(jQuery);