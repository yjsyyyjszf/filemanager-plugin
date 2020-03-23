module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    node: true,
    commonjs: true,
    es6: true,
    mocha: true
  },
  globals: {
    describe: true,
    document: true,
    it: true,
    expect: true,
    alert: true,
    __dirname: true
  },
  rules: {
    'for-direction': 'error',
    'getter-return': ['error', { allowImplicit: false }],
    'no-await-in-loop': 'off',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'except-parens'],
    'no-console': 'off',
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-control-regex': 'off',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': ['error', 'functions'],
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': ['error', 'both'],
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': [
      'error', {
        skipStrings: true,
        skipComments: false,
        skipRegExps: true,
        skipTemplates: true
      }],
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'off',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'use-isnan': 'error',
    'valid-jsdoc': 'off',
    'valid-typeof': 'error',
    'accessor-pairs': [
      'error', {
        setWithoutGet: true,
        getWithoutSet: false
      }],
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'class-methods-use-this': 'off',
    'complexity': ['error', { max: 20 }],
    'consistent-return': 'off',
    'curly': ['error', 'multi-line', 'consistent'],
    'default-case': 'off',
    'dot-location': ['error', 'property'],
    'dot-notation': 'off',
    'eqeqeq': ['error', 'always', { null: 'ignore' }],
    'guard-for-in': 'error',
    'no-alert': 'off',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'off',
    'no-else-return': 'off',
    'no-empty-function': ['error', { allow: ['functions', 'arrowFunctions'] }],
    'no-empty-pattern': 'error',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': ['error', { allow: ['!!'] }],
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-multi-spaces': [
      'error', {
        ignoreEOLComments: true,
        exceptions: {
          Property: true,
          BinaryExpression: false,
          VariableDeclarator: true,
          ImportDeclaration: true
        }
      }],
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-properties': 'off',
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': [
      'error', {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }],
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'off',
    'no-useless-return': 'off',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-with': 'error',
    'prefer-promise-reject-errors': 'error',
    'radix': 'error',
    'require-await': 'off',
    'vars-on-top': 'off',
    'wrap-iife': ['error', 'inside', { functionPrototypeMethods: true }],
    'yoda': ['error', 'never', { onlyEquality: true }],
    'strict': ['error', 'never'],
    'init-declarations': 'off',
    'no-catch-shadow': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'off',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-undef': ['error', { typeof: false }],
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-unused-vars': [
      'error', {
        vars: 'all',
        args: 'none',
        caughtErrors: 'none',
        ignoreRestSiblings: true
      }],
    'no-use-before-define': [
      'error', {
        functions: false,
        classes: false,
        variables: false
      }],
    'callback-return': 'off',
    'global-require': 'off',
    'handle-callback-err': 'error',
    'no-buffer-constructor': 'error',
    'no-mixed-requires': 'off',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-restricted-modules': 'off',
    'no-sync': 'off',
    'array-bracket-newline': 'off',
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': 'off',
    'block-spacing': ['error', 'always'],
    'brace-style': 'off',
    'camelcase': 'off',
    'capitalized-comments': 'off',
    'comma-dangle': 'off',
    'comma-spacing': [
      'error', {
        'before': false,
        'after': true
      }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': 'off',
    'eol-last': 'off',
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': [
      'error',
      'always',
      { includeCommonJSModuleExports: false }],
    'func-names': 'off',
    'func-style': 'off',
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'indent': [
      'error', 2, {
        SwitchCase: 1,
        flatTernaryExpressions: true
      }],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': [
      'error', {
        beforeColon: false,
        afterColon: true,
        mode: 'strict'
      }],
    'keyword-spacing': [
      'error', {
        before: true,
        after: true
      }],
    'line-comment-position': 'off',
    'linebreak-style': 'off',
    'lines-around-comment': 'off',
    'max-depth': ['error', 5],
    'max-len': 'off',
    'max-lines': 'off',
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 7],
    'max-statements': 'off',
    'max-statements-per-line': 'off',
    'multiline-ternary': 'off',
    'new-cap': [
      'error', {
        newIsCap: true,
        capIsNew: false,
        properties: true
      }],
    'new-parens': 'error',
    'newline-per-chained-call': 'off',
    'no-array-constructor': 'error',
    'no-bitwise': 'off',
    'no-continue': 'off',
    'no-inline-comments': 'off',
    'no-lonely-if': 'off',
    'no-mixed-operators': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'off',
    'no-multiple-empty-lines': [
      'error', {
        max: 3,
        maxEOF: 1,
        maxBOF: 1
      }],
    'no-negated-condition': 'off',
    'no-nested-ternary': 'off',
    'no-new-object': 'error',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': 'off',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'off',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': [
      'error',
      'beside',
      { overrides: { while: 'below' } }],
    'object-curly-newline': [
      'error', {
        multiline: true,
        consistent: true
      }],
    'object-curly-spacing': [
      'error', 'always', {
        arraysInObjects: true,
        objectsInObjects: true
      }],
    'object-property-newline': 'off',
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-assignment': 'off',
    'operator-linebreak': 'off',
    'padded-blocks': 'off',
    'padding-line-between-statements': 'off',
    'quote-props': 'off',
    'quotes': [
      'error', 'single', {
        avoidEscape: true,
        allowTemplateLiterals: true
      }],
    'require-jsdoc': 'off',
    'semi': ['error', 'always', { omitLastInOneLineBlock: true }],
    'semi-spacing': [
      'error', {
        before: false,
        after: true
      }],
    'semi-style': ['error', 'last'],
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
  }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': [
      'error', {
        words: true,
        nonwords: false
      }],
    'spaced-comment': [
      'error', 'always', {
        block: {
          exceptions: ['*'],
          balanced: true
        }
      }],
    'switch-colon-spacing': [
      'error', {
        after: true,
        before: false
      }],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'wrap-regex': 'off',
    'arrow-body-style': 'off',
    'arrow-parens': 'off',
    'arrow-spacing': [
      'error', {
        before: true,
        after: true
      }],
    'constructor-super': 'error',
    'generator-star-spacing': [
      'error', {
        before: false,
        after: true
      }],
    'no-class-assign': 'error',
    'no-confusing-arrow': ['error', { allowParens: true }],
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-new-symbol': 'error',
    'no-restricted-imports': 'off',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-const': 'off',
    'prefer-destructuring': 'off',
    'prefer-numeric-literals': 'off',
    'prefer-rest-params': 'off',
    'prefer-spread': 'off',
    'prefer-template': 'off',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'sort-imports': 'off',
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'never'],
    'yield-star-spacing': ['error', 'after']
  }
};
