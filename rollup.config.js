const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');

const name = require('./package.json').name;

module.exports = {
	input: './src/index.js',
	external: ['dayjs'],
	plugins: [babel({ exclude: 'node_modules/**' }), uglify()],
	output: {
		file: `./dist/${name}.min.js`,
		format: 'umd',
		name,
		globals: { dayjs: 'dayjs' }
	}
};
