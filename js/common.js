
// показать карточку товара по клику в зависимости от значениея data-tab
// $(document).ready(function () {
// 	$(".js-tab-trigger").click(function () {
// 		var id = $(this).attr('data-tab'),
// 			content = $('.js-tab-content[data-tab="' + id + '"]');

// 		$('.js-tab-trigger.active').removeClass('active'); // 1
// 		$(this).addClass('active'); // 2

// 		$('.js-tab-content.active').removeClass('active'); // 3
// 		content.addClass('active'); // 4
// 	});
// });

$('.main-slider-bg-wrapper').slick({
	slidesToShow: 1,
	fade: true,
	arrows: false
});

$('.main-slider').slick({
	slidesToShow: 1,
	arrows: false,
	fade: true,
	swipe: false,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
				autoplay: true,
				autoplaySpeed: 2000,
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