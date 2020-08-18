$(function () {

	$('.popup-button').on('click', function () {
		$('.popup').addClass('flex');
	})

	$('.popup__close').on('click', function () {
		$('.popup').removeClass('flex');
	})

	let popup = document.querySelectorAll('.popup');

	window.addEventListener('click', function (e) {
		for (let i = 0; i < popup.length; i++) {
			if (e.target == popup[i]) {
				$('.popup').removeClass('flex');
			}
		}
	});

	$(window).resize(function () {
		if ($(window).width() > 991) {
			$('.header__top').removeClass('header__top_active');
			$('.menu-link').removeClass('menu-link_active');
		}
	})

	// Меню
	let menuLink = $('.menu-link'),
		menu = $('.header__top');

	menuLink.on('click', function (e) {
		e.preventDefault();
		menuLink.toggleClass('menu-link_active');
		menu.toggleClass('header__top_active');
	});


	$("input[type='tel']").mask('+7 (999)-999-99-99');

	$(window).on('scroll', function () {
		let s = $(window).scrollTop();
		if (s > 100) {
			$('.header__top').addClass('header__top_fixed');
		} else {
			$('.header__top').removeClass('header__top_fixed');
		}
	});

	$(document).ready(function () {
		if ((navigator.userAgent.indexOf("MSIE") != -1) || (navigator.userAgent.indexOf("Safari") != -1) || (!!document.documentMode == true)) {

			function changeJpgToWebp(item) {
				let firstBg = $(item).attr('style');
				let newBg = firstBg.replace('webp', 'jpg');
				$(item).attr('style', newBg)
			}
			changeJpgToWebp($('.header'));
		}
	})

});