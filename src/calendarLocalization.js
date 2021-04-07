import de from './locale/de';
import en from './locale/en';
import fr from './locale/fr';
import es from './locale/es';

const locales = { de, en, fr, es };

export default (_o, _c, d) => {
	for (const [code, formats] of Object.entries(locales)) {
		if (d.Ls[code]) {
			d.Ls[code].calendar = formats.calendar;
			d.Ls[code].relative = formats.relative;
		}
	}
};
