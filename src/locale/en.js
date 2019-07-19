const calendar = {
	sameDay: 'LT',
	nextDay: '[Tomorrow], LT',
	nextWeek: '[Next] dddd, LT',
	lastDay: '[Yesterday], LT',
	lastWeek: 'dddd, LT',
	sameElse: 'L, LT'
};

const relative = {
	future: 'in %s',
	past: '%s ago',
	s: 'less than a minute',
	m: 'minute',
	mm: 'minutes',
	h: 'hour',
	hh: 'hours',
	d: 'day',
	dd: 'days'
};

export default { calendar, relative };
