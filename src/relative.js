import en from './locale/en';

export default (_, c, d) => {
	d.en.relative = en.relative;

	c.prototype.relative = function(input) {
		const loc = this.$locale().relative;

		const pluralize = (value, u) => loc[u + (Math.abs(value) > 1 ? u : '')];
		const formatValue = (value, u) => (value > 0 ? `${value} ${pluralize(value, u)}` : '');

		const compared = d(input);

		const lookup = [
			{ u: 'second', b: 60, t: 's' },
			{ u: 'minute', b: 60, t: 'm' },
			{ u: 'hour', b: 24, t: 'h' },
			{ u: 'day', b: Infinity, t: 'd' }
		];

		let current, prev;

		for (let i = 0; i < lookup.length; i++) {
			const { u, b, t } = lookup[i];

			prev = current;
			current = Math.abs(this.diff(compared, u));

			if (current <= b) {
				if (u === 'second') {
					return loc[t];
				}

				current = Math.floor(current);
				prev = Math.floor(Math.floor(prev) - current * lookup[i - 1].bound);
				const formatted = [formatValue(current, t), formatValue(prev, lookup[i - 1].t)];
				return formatted.filter((v) => v).join(', ');
			}
		}
	};

	c.prototype.relativeNow = function() {
		this.relative(d());
	};
};
