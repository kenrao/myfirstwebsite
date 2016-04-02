$(document).ready(function(){
	
	/*------STICKY NAVIGATION------*/
	
	$('.js-features').waypoint(function(direction)	{
			if (direction=="down"){
				$('nav').addClass('sticky');
				
			}
			else {
				
				$('nav').removeClass('sticky');
				
			}		
	
	}, {offset:'80px'})	
					
	
	/*-button links-*/
	
$('.js-scroll-to-plans').click(function(){
	
	$('html,body').animate({scrollTop: $('.js-section-plans').offset().top -20}, 1000);
});

	$('.js-scroll-to-start').click(function(){
	
	$('html,body').animate({scrollTop: $('.js-features').offset().top -20}, 1000);
});
	
	/*-----SMOOTH SCroll----*/
	
	$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top -50}, 500);
        return false;
      }
    }
  });
});

	/*-------ANIMATE.CSS------*/
	
	$('.js-wp-1').waypoint(function(direction){
		
		$('.js-wp-1').addClass('animated fadeIn');
		
			

	},{offset: '60%'});

	
		$('.js-wp-2').waypoint(function(direction){
		
		$('.js-wp-2').addClass('animated fadeInLeft');
		
			

	},{offset: '60%'});
	
	$('.js-wp-3').waypoint(function(direction){
		
		$('.js-wp-3').addClass('animated pulse');	
			

	},{offset: '60%'});
	
});

