$('.main-slider-bg-wrapper').slick({
	slidesToShow: 1,
	arrows: false,
	infinite: false,
});

$('.main-slider').slick({
	slidesToShow: 1,
	infinite: false,
	arrows: false,
	swipe: false,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
				asNavFor: '.main-slider-bg-wrapper'
			}
		}
	]
});

$('.main-slider-nav').slick({
	slidesToShow: 3,
	vertical: true,
	arrows: false,
	focusOnSelect: true,
	infinite: false,
	asNavFor: '.main-slider-bg-wrapper, .main-slider'
});

//плавный скролл
$(document).ready(function () {
	$('.go_to').click(function (e) {
		e.preventDefault();
		var scroll_el = $(this).attr('href');
		if ($(scroll_el).length !== 0) {
			$('html, body').animate({
				scrollTop: $(scroll_el).offset().top
			}, 500);
		}
		return false;
	});
});
//плавный скролл end

$('.btn-burger').click(function () {
	$('.nav-menu').fadeToggle();
});


$('.nav-menu__close').click(function () {
	$('.nav-menu').fadeOut();
});