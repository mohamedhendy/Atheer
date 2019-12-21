$(function () {
	
	//============================ Scroll button =======================================
	window.onscroll = function () { scrollFunction() };

	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			document.getElementById("myBtn").style.display = "block";
		} else {
			document.getElementById("myBtn").style.display = "none";
		}
	}
	/*===================================================================================*/
	
	// SETTINGS PANEL

	$('.btn-settings').on('click', function () {
		$(this).parent().toggleClass('active');
	});

	$('.switch-handle').on('click', function () {
		$(this).toggleClass('active');
		$('.outer-wrapper').toggleClass('boxed');
		$('nav').toggleClass('bdcolor');
	});

	$('.bg-list div').on('click', function () {
		if ($(this).hasClass('active')) return false;
		if (!$('.switch-handle').hasClass('active')) $('.switch-handle').trigger('click');

		$(this).addClass('active').siblings().removeClass('active');
		var cl = $(this).attr('class');
		$('body').attr('class', cl);
	});

	$('.color-list div').on('click', function () {
		if ($(this).hasClass('active')) return false;

		$('link.color-scheme-link').remove();

		$(this).addClass('active').siblings().removeClass('active');
		var src = $(this).attr('data-src'),
			colorScheme = $('<link class="color-scheme-link" rel="stylesheet" />');

		colorScheme
			.attr('href', src)
			.appendTo('head');
	});



});
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
	'use strict';
	window.addEventListener('load', function () {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName('needs-validation');
		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function (form) {
			form.addEventListener('submit', function (event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);
})();