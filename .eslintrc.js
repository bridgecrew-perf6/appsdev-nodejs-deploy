module.exports = {
	'env': {
		'browser': true,
		'node': true,
		'es2021': true,
		'commonjs': true
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 13
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'no-console': [
			'error', {
				'allow': ['warn', 'error', 'info', 'log']
			}
		]
	}
};
