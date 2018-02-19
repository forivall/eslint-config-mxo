import test from 'ava'
import isPlainObj from 'is-plain-obj'
import eslint from 'eslint'
import tempWrite from 'temp-write'

const fixture = `
const x = true;
if (x) {
  console
  .log()
  ;
}
const y = 1;
switch (y) {
  case 1:
    console.log();
    break;
  default:
    console.log();
}
`.replace(/^\n/, '')

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

test('lazy', (t) => {
  const conf = require('../lazy')

  t.true(isPlainObj(conf))
  t.true(isPlainObj(conf.rules))

  const errors = runEslint('const Foo = class {}\n', conf)
  t.is(errors[0].ruleId, 'no-unused-vars')
})

test('ava', (t) => {
  const conf = require('../ava')

  t.true(isPlainObj(conf))
  t.true(isPlainObj(conf.rules))

  const messages = runEslint(`import test from 'ava'\n\ntest('main', (t) => {\n  t.pass()\n})\n`, conf)
  t.is(messages.length, 0, JSON.stringify(messages))
})

test('es5', (t) => {
  const conf = require('../es5')

  t.true(isPlainObj(conf))
  t.true(isPlainObj(conf.rules))

  const messages = runEslint('\'use strict\';\nif (/^foo/.test(\'foobar\')) {\n  console.log(\'bar\');\n}\n', conf)
  t.is(messages.length, 0, JSON.stringify(messages))
})
