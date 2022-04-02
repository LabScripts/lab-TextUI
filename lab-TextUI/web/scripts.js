window.addEventListener('message', function(event) {
	var sound = new Audio('sound.mp3');
	sound.volume = 0.8;

	if (event.data.action == 'show') {
		$("body").fadeIn(400);
		$( ".text" ).text( "" + event.data.message + "" );
		sound.play();
	} else if (event.data.action == 'hide') {

		$("body").fadeOut(400);
	}
})

