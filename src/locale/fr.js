const calendar = {
	sameDay: 'LT',
	nextDay: '[Demain], LT',
	nextWeek: 'dddd [Prochain], LT',
	lastDay: '[Hier], LT',
	lastWeek: 'dddd, LT',
	sameElse: 'L LT'
};

const relative = {
	future: 'dans %s',
	past: 'il y a %s',
	s: "moins d'une minute",
	m: 'minute',
	mm: 'minutes',
	h: 'heure',
	hh: 'heures',
	d: 'jour',
	dd: 'jours'
};

export default { calendar, relative };
