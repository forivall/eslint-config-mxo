# eslint-config-mxo

> ESLint [shareable config][] for [XO][] with 2-space indent and some other sane
> tweaks

[![build status][ti]][t]

🎵 _Mixmaster Hugs_ 🤗

## Installation

```
npm install --save-dev eslint-config-mxo
```

## Usage

Add some XO config to your `package.json`:
```json
{
  "name": "my-awesome-project",
  "xo": {
    "extends": "mxo",
    "overrides": [
      {
        "files": [
          "test.js",
          "test-*.js",
          "test",
          "**/__tests__",
          "**/*.test.js",
          "!**/helpers/**",
          "!**/fixtures/**",
          "!**/_*.js"
        ],
        "extends": "mxo/ava"
      }
    ]
  }
}
```

### ESLint Usage

Using just `eslint`, add some ESLint config to your `package.json`:

```json
{
  "name": "my-awesome-project",
  "eslintConfig": {
    "extends": "mxo"
  }
}
```

Or to `.eslintrc`:

```json
{
  "extends": "mxo"
}
```

And [`mxo/browser`](browser.js) if you're in the browser:

```json
{
  "extends": "mxo/browser"
}
```

Additionally [`mxo/ava`](ava.js) for ava test files:

```json
{
  "extends": "mxo/ava"
}
```

And [`mxo/lazy`](lazy.js) because I don't like semicolons anymore:

```json
{
  "extends": "mxo/lazy"
}
```

## Credits

[Emily Klassen](https://github.com/forivall/)

[Sindre Sorhus](https://sindresorhus.com) for the original xo ❤️

## License

ISC

[ti]: https://travis-ci.org/forivall/eslint-config-mxo.svg
[t]: http://travis-ci.org/forivall/eslint-config-mxo
[shareable config]: http://eslint.org/docs/developer-guide/shareable-configs.html
[XO]: https://github.com/sindresorhus/xo
