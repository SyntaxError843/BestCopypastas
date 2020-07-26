$(() => {
	function setVolume() {
		document.getElementById("music").volume = ($(window).scrollTop() / 300000);
	}

	function playMusic() {
        document.getElementById("music").play();
	}

	function clearCanvas() {
		$("#bestCopypasta").html("");
	}

	function paintArt() {
		for (var i = 0; i < copypastas.length; i++) {
			$("#bestCopypasta").append("<div class='paddingDiv'>".concat(copypastas[i]));
		}
	}

    $(window).scroll(() => {
        setVolume();
    });

    $("#readMore").on('click', () => {
    	clearCanvas();
    	paintArt();
    	setVolume();
    	playMusic();
    });

    //hide the evidence
    $("#music").hide();

    //hide the watermark lol
    $("div[style='text-align: right;position: fixed;z-index:9999999;bottom: 0;width: auto;right: 1%;cursor: pointer;line-height: 0;display:block !important;']").hide();
});