module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "airbnb-base"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "no-console": 0,
        "no-undef": "off",
        "": "",
        "indent": [
            "error",
            "tab"
        ],

        "class-methods-use-this": "off",        

        "no-tabs": 0,
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};