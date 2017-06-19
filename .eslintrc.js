// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-cond-assign': 0,
    'keyword-spacing': 0,
    'semi': 0,
    'eqeqeq': 0,
    'no-multi-spaces': 0,
    'indent': 0,
    'no-useless-escape': 0,
    'quotes': 0,
    'padded-blocks': 0,
    'yoda': 0,
    'space-before-function-paren': 0,
    'operator-linebreak': 0,
    'no-unexpected-multiline': 0,
    'func-call-spacing': 0
  }
}