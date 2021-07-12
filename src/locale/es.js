const calendar = {
	sameDay: 'LT',
	nextDay: '[Mañana], LT',
	nextWeek: '[Siguiente] dddd, LT',
	lastDay: '[Ayer], LT',
	lastWeek: '[Pasado] dddd, LT',
	sameElse: 'L, LT'
};

const relative = {
	future: 'en %s',
	past: 'hace %s',
	s: 'menos de un minuto',
	m: 'minuto',
	mm: 'minutos',
	h: 'hora',
	hh: 'horas',
	d: 'día',
	dd: 'días'
};

export default { calendar, relative };
