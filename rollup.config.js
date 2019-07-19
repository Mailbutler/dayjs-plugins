const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');

module.exports = {
	input: './src/index.js',
	external: ['dayjs'],
	plugins: [babel({ exclude: 'node_modules/**' }), uglify()],
	output: {
		file: `./dist/dayjs-plugins.min.js`,
		format: 'umd',
		name: 'mailbutler_dayjs_plugins',
		globals: { dayjs: 'dayjs' }
	}
};
