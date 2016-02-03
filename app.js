$(document).ready(function() {

	// Event Listeners
	$('#fade-out').on('click', function() {
		$('.murray').fadeOut(500);
	});

	$('#fade-in').on('click', function() {
		$('.murray').fadeIn(500);
	});

	$('#fade-out-in').on('click', function() {
		$('.murray').fadeOut(500).fadeIn(250);
	});

	$('#remove-button').on('click', function() {
		// removes ALL murrays from the page
		$('.murray').remove();
	});

	$('#add-button').on('click', function() {
		var size = randomNumber(200, 500);
		var img = '<img class="murray" src="http://www.fillmurray.com/' + size + '/' + size + '" />';
		$('#murray-box').append(img);
	});

});


function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}