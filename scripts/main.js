var refreshInterval = 1000;

function init() {
	update();

	var refresh = setInterval(function() {
		window.location.reload(true);
	}, refreshInterval);
}

function update() {
	setContent("racing-1", racing[0]);
	setContent("racing-2", racing[1]);
	setContent("racing-3", racing[2]);
	setContent("racing-4", racing[3]);

	setContent("on-deck-1", onDeck[0]);
	setContent("on-deck-2", onDeck[1]);
	setContent("on-deck-3", onDeck[2]);
	setContent("on-deck-4", onDeck[3]);
}

function setContent(div, content) {
	document.getElementById(div).innerHTML = content;
}
