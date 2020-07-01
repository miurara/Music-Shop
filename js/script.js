$(document).ready(function () {
	$('.slider').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		centerMode: true,
		variableWidth: true,
		adaptiveHeight: true,
		variableWidth: true
	});

	$('.album__body').slick({
		infinite: true,
		slidesToShow: 4,
		adaptiveHeight: true,
		slidesPerRow: 4,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 486,
				settings: {
					slidesToShow: 1
				}
			}
		]

	});

	$('.album__body-sale').slick({
		infinite: true,
		slidesToShow: 4,
		adaptiveHeight: true,
		slidesPerRow: 4,
		prevArrow: $('.prev-sale'),
		nextArrow: $('.next-sale'),
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 486,
				settings: {
					slidesToShow: 1
				}
			}
		]

	});
});



window.addEventListener('DOMContentLoaded', () => {

	function ibg() {
		let ibg = document.querySelectorAll(".ibg");
		for (let i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img')) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
	ibg();

	const cartTrigger = document.querySelector('.cart'),
		cartOpen = document.querySelector('.cart__list');

	cartTrigger.addEventListener('click', (e) => {
		e.preventDefault();
		cartOpen.classList.toggle('open');
	});


	const iconMenu = document.querySelector('.icon-menu');
	const body = document.querySelector('body');
	const menuBody = document.querySelector('.menu__body');
	const social = document.querySelector('.social');

	iconMenu.addEventListener('click', (e) => {
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
		social.classList.toggle('active');
		body.classList.toggle('lock');
	});

	const header = document.querySelector('.header');

	function onScroll() {
		window.addEventListener("scroll", () => {
			const y = window.pageYOffset;
			if (y > 40) {
				header.classList.add("scroll");
			} else {
				header.classList.remove("scroll");
			}
		});
	}
	onScroll();
});