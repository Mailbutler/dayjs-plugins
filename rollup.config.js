const { babel } = require('@rollup/plugin-babel');
const { terser } = require('rollup-plugin-terser');

module.exports = {
	input: './src/index.js',
	external: ['dayjs'],
	plugins: [babel({ exclude: 'node_modules/**' }), terser()],
	output: {
		file: `./dist/dayjs-plugins.min.js`,
		format: 'umd',
		name: 'mailbutler_dayjs_plugins',
		globals: { dayjs: 'dayjs' }
	}
};
