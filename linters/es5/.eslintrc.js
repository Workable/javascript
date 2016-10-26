module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "commonjs": true,
  },
  "parserOptions": {
    "ecmaVersion": 5,
    "sourceType": "script"
  },
  "rules": {
    "no-console": 1,
    "no-duplicate-case": 2,
    "no-extra-parens": 0,
    "accessor-pairs": 0,
    "block-scoped-var": 0,
    "complexity": 0,
    "default-case": 1,
    "guard-for-in": 1,
    "no-eq-null": 0,
    "no-fallthrough": 0,
    "no-implicit-coercion": 0,
    "no-invalid-this": 0,
    "no-param-reassign": 0,
    "no-process-env": 0,
    "no-unused-expressions": 1,
    "no-useless-call": 1,
    "no-void": 0,
    "init-declarations": 0,
    "no-catch-shadow": 1,
    "no-undef": 1,
    "callback-return": 1,
    "computed-property-spacing": [1, "never"],
    "consistent-this": [1, "that"],
    "func-names": 0,
    "func-style": 0,
    "id-length": 0,
    "lines-around-comment": 0,
    "linebreak-style": [1, "unix"],
    "new-cap": 1,
    "newline-after-var": 0,
    "no-inline-comments": 0,
    "no-nested-ternary": 0,
    "no-ternary": 0,
    "no-underscore-dangle": 0,
    "object-curly-spacing": [1, "never", {
      "arraysInObjects": true
    }],
    "operator-linebreak": 0,
    "id-match": 0,
    "sort-vars": 0,
    "keyword-spacing": 0,
    "space-unary-ops": 0,
    "max-params": 0,
    "max-statements": 0,
    "comma-dangle": [1, "never"],
    "no-cond-assign": [2, "except-parens"],
    "no-constant-condition": 2,
    "no-control-regex": 1,
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-empty-character-class": 1,
    "no-empty": 1,
    "no-ex-assign": 1,
    "no-extra-boolean-cast": 1,
    "no-extra-semi": 1,
    "no-func-assign": 1,
    "no-inner-declarations": [1, "both"],
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-negated-in-lhs": 1,
    "no-obj-calls": 1,
    "no-regex-spaces": 1,
    "no-sparse-arrays": 1,
    "no-unreachable": 1,
    "use-isnan": 1,
    "valid-jsdoc": 1,
    "valid-typeof": 1,
    "no-unexpected-multiline": 1,
    "consistent-return": 1,
    "curly": [1, "all"],
    "dot-notation": [1, {
      "allowKeywords": false
    }],
    "dot-location": [1, "property"],
    "eqeqeq": 1,
    "no-alert": 1,
    "no-caller": 1,
    "no-div-regex": 1,
    "no-else-return": 1,
    "no-eval": 2,
    "no-extend-native": 1,
    "no-extra-bind": 1,
    "no-floating-decimal": 1,
    "no-implied-eval": 1,
    "no-iterator": 1,
    "no-labels": 1,
    "no-lone-blocks": 1,
    "no-loop-func": 1,
    "no-multi-spaces": 1,
    "no-multi-str": 1,
    "no-native-reassign": 2,
    "no-new-func": 1,
    "no-new-wrappers": 1,
    "no-new": 1,
    "no-octal-escape": 1,
    "no-octal": 1,
    "no-proto": 1,
    "no-redeclare": [1, {
      "builtinGlobals": true
    }],
    "no-return-assign": 1,
    "no-script-url": 1,
    "no-self-compare": 1,
    "no-sequences": 1,
    "no-throw-literal": 2,
    "no-warning-comments": 0,
    "no-with": 2,
    "radix": 1,
    "vars-on-top": 0,
    "wrap-iife": [1, "any"],
    "yoda": 0,
    "strict": [1, "function"],
    "no-delete-var": 1,
    "no-label-var": 1,
    "no-shadow-restricted-names": 1,
    "no-shadow": [2, {
      "hoist": "functions"
    }],
    "no-undef-init": 1,
    "no-undefined": 1,
    "no-unused-vars": [1],
    "no-use-before-define": 2,
    "handle-callback-err": 1,
    "no-mixed-requires": 1,
    "no-new-require": 1,
    "no-path-concat": 1,
    "no-process-exit": 1,
    "no-restricted-modules": [1, ""],
    "no-sync": 0,
    "array-bracket-spacing": [1, "never", {}],
    "brace-style": [1, "1tbs", {
      "allowSingleLine": true
    }],
    "camelcase": [1, {
      "properties": "never"
    }],
    "comma-spacing": [1, {
      "before": false,
      "after": true
    }],
    "comma-style": [1, "first", {
      "exceptions": {
        "ArrayExpression": true,
        "ObjectExpression": true
      }
    }],
    "eol-last": 1,
    "indent": [1, 2, {
      "SwitchCase": 1
    }],
    "key-spacing": [1, {
      "beforeColon": false,
      "afterColon": true
    }],
    "max-nested-callbacks": [1, 3],
    "new-parens": 1,
    "no-array-constructor": 1,
    "no-continue": 1,
    "no-lonely-if": 1,
    "no-mixed-spaces-and-tabs": 1,
    "no-multiple-empty-lines": [1, {
      "max": 2
    }],
    "no-new-object": 1,
    "no-spaced-func": 1,
    "no-trailing-spaces": 1,
    "no-unneeded-ternary": 1,
    "one-var": [1, "always"],
    "operator-assignment": [1, "never"],
    "padded-blocks": 0,
    "quote-props": 0,
    "quotes": [1, "single"],
    "semi-spacing": [1, {
      "before": false,
      "after": true
    }],
    "semi": [1, "always"],
    "space-before-blocks": [1, "always"],
    "space-before-function-paren": [1, {
      "anonymous": "always",
      "named": "never"
    }],
    "space-in-parens": [1, "never"],
    "space-infix-ops": 1,

    "spaced-comment": [1, "always"],
    "wrap-regex": 1,
    "max-depth": [1, 4],
    "max-len": [1, 121, 2, {}],
    "no-bitwise": 0,
    "no-plusplus": 1
  }
}
