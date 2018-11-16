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
    extends: 'airbnb-base',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // check if imports actually resolve
    'settings': {
        'import/resolver': {
            'webpack': {
                'config': 'build/webpack.base.conf.js'
            }
        }
    },
    globals: {
        wx: true, // wx全局变量
    },
    // add your custom rules here
    'rules': {
        'indent': [2, 4],
        'comma-dangle': 0,
        'key-spacing': 0,
        'object-curly-spacing': 0,
        'no-multi-spaces': 0,
        'no-underscore-dangle': 0,
        'no-console': 0,
        'no-plusplus': 0,
        'global-require': 0,
        'no-param-reassign': 0,
        'no-shadow': 0,
        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
            'js': 'never',
            'vue': 'never'
        }],
        // allow optionalDependencies
        'import/no-extraneous-dependencies': ['error', {
            'optionalDependencies': ['test/unit/index.js']
        }],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        "linebreak-style": [0, "windows"]
    }
}
