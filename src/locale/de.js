const calendar = {
	sameDay: 'LT',
	nextDay: '[Morgen], LT',
	nextWeek: '[Nächster] dddd, LT',
	lastDay: '[Gestern], LT',
	lastWeek: 'dddd, LT',
	sameElse: 'L, LT'
};

const relative = {
	future: 'in %s',
	past: 'vor %s',
	s: 'weniger als einer Minute',
	m: 'Minute',
	mm: 'Minuten',
	h: 'Stunde',
	hh: 'Stunden',
	d: 'Tag',
	dd: 'Tagen'
};

export default { calendar, relative };
