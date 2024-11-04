$(function() {
window.addEventListener("scroll", function(event){
    var top = this.pageYOffset;

    var layers = $(".parallax__layer");
    var speed, yPos;
    layers.each(function() {
    speed = $(this).attr('data-speed');
    var yPos = -(top * speed / 100);
    $(this).attr('style','transform: translate3d(0px, ' + yPos + 'px, 0px)');
    });
});
});
// скролл h1
$(window).on('scroll', function() {
	var scrollCoef = 0.0012;

	$('.mainscreen__inner').css({
		opacity: 1 - $(window).scrollTop() * scrollCoef
	})
});
// mobile menu
$(function() {
	var $menu_popup = $('.menu-popup');

	$(".menu-triger").click(function(){
		$('body').addClass('body_pointer');		
		$menu_popup.show(0);
		$menu_popup.animate(
			{left: parseInt($menu_popup.css('left'),10) == 0 ? -$menu_popup.outerWidth() : 0}, 
			300
		);
		return false;
	});	
	
	$(".menu-close").click(function(){
		$('body').removeClass('body_pointer');		
		$menu_popup.animate(
			{left: parseInt($menu_popup.css('left'),10) == 0 ? -$menu_popup.outerWidth() : 0}, 
			300, 
			function(){
				$menu_popup.hide(0);
			}
		);
		return false;
	});	
	
	$(document).on('click', function(e){
		if (!$(e.target).closest('.menu-popup').length){
			$('body').removeClass('body_pointer');
			$menu_popup.animate(
				{left: parseInt($menu_popup.css('left'),10) == 0 ? -$menu_popup.outerWidth() : 0}, 
				300, 
				function(){
					$menu_popup.hide(0);
				}
			);
		}
	});
});