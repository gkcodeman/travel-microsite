	
/*
Theme Name: Microsite-Fidelity / Destinator
Author: Jonathan Carroll 
Author URL: jonathanlcarroll.com
*/

/*
    = Activate Carousel
    = Set Modal PopUp
    = Parallax Video Background
    = Sticky Menu
    = Back To Top
    = Countup
    = Progress Bar
    = More skill
    = Shuffle
    = Magnific Popup
    = Vidio auto play
    = Fit Vids
    = Google Map

*/



jQuery(function ($) {

	'use strict';


// --------------------------------------------------
// Activate Carousel
// -------------------------------------------------
	
    (function () {
					$("#carouselExampleControls").carousel({interval: 5000});
					
					}());
				
		
		
		
		
		
// --------------------------------------------------
// PopUp Modal 
// -------------------------------------------------
		
		
			(function () {	
				$('.launch-modal').on('click', function(e){
    e.preventDefault();
    $( '#' + $(this).data('modal-id') ).modal();
				});
			}());
		
		
		
		
		
		
		
				
// --------------------------------------------------
// Parallax Video Background
// -------------------------------------------------
	
	
				(function () {
      $('#my-video').backgroundVideo();
		
				}());
	
				
// -------------------------------------------------------------
    // WOW JS
    // -------------------------------------------------------------

    (function () {

        new WOW({

            mobile:  false

        }).init();

    }());
	
				
					
		
		
		
		
		
});