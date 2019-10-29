import test from 'ava'
import isPlainObj from 'is-plain-obj'
import eslint from 'eslint'
import tempWrite from 'temp-write'

const fixture = `
const x = true
if (x) {
  console.log()
}

if (x) console.log()

const y = 1
switch (y) {
  case 1:
    console.log()
    break
  default:
    console.log()
}
`.replace(/^\n/, '')

function runEslint(str, conf, options) {
  const configFile = tempWrite.sync(JSON.stringify(conf))
  const linter = new eslint.CLIEngine(
    Object.assign(
      {
        configFile,
        useEslintrc: false,
      },
      options || {},
    ),
  )

  return linter.executeOnText(str).results[0].messages
}

const rootOptions = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
}

test('full', (t) => {
  const conf = require('../full')

  t.true(isPlainObj(conf))
  const messages = runEslint(fixture, conf)
  t.is(messages.length, 0, JSON.stringify(messages))
})

test('main', (t) => {
  const conf = require('../')

  t.true(isPlainObj(conf))
  t.true(isPlainObj(conf.rules))
  const messages = runEslint(fixture, conf, rootOptions)
  t.is(messages.length, 0, JSON.stringify(messages))
})

test('ava', (t) => {
  const conf = require('../ava')

  t.true(isPlainObj(conf))
  t.true(isPlainObj(conf.rules))

  const messages = runEslint(
    `import test from 'ava'

test('main', (t) => {
  t.pass()
})
`,
    conf,
    rootOptions,
  )
  t.is(messages.length, 0, JSON.stringify(messages))
})
