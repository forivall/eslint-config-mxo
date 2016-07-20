# eslint-config-mxo

> ESLint [shareable config][] for [XO][] with 2-space indent and some other sane
> tweaks

[![build status][ti]][t]

🎵_Mixmaster Hugs_🤗

## Installation

```
npm install --save-dev eslint-config-mxo
```

## Usage

Add some ESLint config to your `package.json`:

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

Supports parsing ES2015, but doesn't enforce it by default.

This package also exposes [`mxo/esnext`](esnext.js) if you want ES2015+ rules:

```json
{
  "extends": "mxo/esnext"
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

## Credits

[Jordan Klassen](https://github.com/forivall/)

[Sindre Sorhus](https://sindresorhus.com) for the original xo ❤️

## License

ISC

[ti]: https://travis-ci.org/forivall/eslint-config-mxo.svg
[t]: http://travis-ci.org/forivall/eslint-config-mxo
[shareable config]: http://eslint.org/docs/developer-guide/shareable-configs.html
[XO]: https://github.com/sindresorhus/xo
