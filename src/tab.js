var locale = 'de-DE';
var clock = {
	hours: document.querySelector('.m-clock .hours').firstChild,
	minutes: document.querySelector('.m-clock .minutes').firstChild,
	date: document.querySelector('.m-date').firstChild
};
render();

function padZero(number) {
	var str = number.toString();
	return str.length < 2 ? '0' + str : str;
}

function render() {
	var now = new Date();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();

	clock.hours.data = hours;
	clock.minutes.data = padZero(minutes);
	clock.date.data = now.toLocaleString(locale, {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	setTimeout(render, (60 - seconds) * 1000);
}