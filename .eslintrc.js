/* eslint-disable */
module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "rules": {
    },
    // Ignore no undef for test files
    "overrides": [
            {
                "files": [
                    "**/*.test.js",
                    "**/*.test.jsx"
                ],
                "env": {
                    "jest": true
                }
            }
        ]
};
