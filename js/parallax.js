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
// скролл menu active
var sections = $('.level')
	, nav = $('nav')
	, nav_height = nav.outerHeight();

	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop();

		sections.each(function() {
		var top = $(this).offset().top - nav_height,
			bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				nav.find('a').removeClass('active');
				sections.removeClass('active');
				
				$(this).addClass('active');
				nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
			}
			if (window.scrollY < 400) {
				nav.find('a[href="#'+$(this).attr('id')+'"]').removeClass('active');
			} 
		});
});

nav.find('a').on('click', function () {
	var $el = $(this)
	, id = $el.attr('href');

	$('html, body').animate({
	scrollTop: $(id).offset().top - nav_height
	}, 500);

	return false;
});
// скролл scale
var sections2 = $('.scale')
	, nav2 = $('.mainscreen__scale')
	, nav_height2 = nav2.outerHeight();

	$(window).on('scroll', function () {
		var cur_pos2 = $(this).scrollTop();

		sections2.each(function() {
		var top2 = $(this).offset().top - nav_height2,
			bottom2 = top2 + $(this).outerHeight();

			if (cur_pos2 >= top2 && cur_pos2 <= bottom2) {
				nav2.find('a').removeClass('active');
				sections2.removeClass('active');
				
				$(this).addClass('active');
				nav2.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
			}
			if (window.scrollY < 400) {
				nav2.find('a[href="#'+$(this).attr('id')+'"]').removeClass('active');
			} 

		});
});

nav2.find('a').on('click', function () {
	var $el2 = $(this)
	, id2 = $el2.attr('href');

	$('html, body').animate({
	scrollTop: $(id2).offset().top2 - nav_height2
	}, 500);

	return false;
});