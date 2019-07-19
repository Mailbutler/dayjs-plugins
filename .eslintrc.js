module.exports = {
	root: true,
	extends: ['prettier'],
	plugins: ['prettier'],
	globals: {
		window: true,
		dayjs: true
	},
	rules: {
		'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],

		'no-console': process.env.NODE_ENV==='production'?'error':'off',
		'no-debugger': process.env.NODE_ENV==='production'?'error':'off',

		eqeqeq: ['error', 'smart'],
		'prettier/prettier': 'error'
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 6
	},
	env: {
		es6: true
	}
}
