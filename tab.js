function padZero(number) {
	var str = number.toString();
	return str.length < 2 ? '0' + str : str;
}

function render() {
	var now = new Date();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();

	// var shift = -7;
	// var dst = +1;
	// var hours = (24 + now.getUTCHours() + shift + dst) % 24;

	clock.hours.data = hours;
	clock.minutes.data = padZero(minutes);

	setTimeout(render, (60 - seconds) * 1000);
}

var clock = {
	hours: document.querySelector('.m-clock > .hours').firstChild,
	minutes: document.querySelector('.m-clock > .minutes').firstChild
};

render();