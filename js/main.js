$(document).ready(function() {
	function isChrome() {
    return navigator.userAgent.indexOf('Chrome')!=-1;
	}

	$('.book').turn({
		acceleration: !isChrome(),
		duration: 1000,
		elevation: 50,
		gradients: true,
		autoCenter: true
	});
});