import test from 'ava'
import isPlainObj from 'is-plain-obj'
import eslint from 'eslint'
import tempWrite from 'temp-write'

const fixture = `'use strict';\nconst x = true;\n\nif (x) {\n  console.log();\n}\n`

function runEslint(str, conf) {
  const linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: tempWrite.sync(JSON.stringify(conf))
  })

  return linter.executeOnText(str).results[0].messages
}

test('main', (t) => {
  const conf = require('../')

  t.true(isPlainObj(conf))
  t.true(isPlainObj(conf.rules))
  t.is(runEslint(fixture, conf).length, 0)
})

test('browser', (t) => {
  const conf = require('../browser')

  t.true(isPlainObj(conf))
  t.true(isPlainObj(conf.rules))
  const messages = runEslint(fixture, conf)
  t.is(messages.length, 0, JSON.stringify(messages))
})

test('esnext', (t) => {
  const conf = require('../esnext')

  t.true(isPlainObj(conf))
  t.true(isPlainObj(conf.rules))

  const errors = runEslint('class Foo {}\n', conf)
  t.is(errors[0].ruleId, 'no-unused-vars')
})

test('ava', (t) => {
  const conf = require('../ava')

  t.true(isPlainObj(conf))
  t.true(isPlainObj(conf.rules))

  const messages = runEslint(`import test from 'ava'\n\ntest('main', (t) => {\n  t.pass()\n})\n`, conf)
  t.is(messages.length, 0, JSON.stringify(messages))
})
