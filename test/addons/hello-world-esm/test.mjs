/* eslint-disable node-core/required-modules */

import assert from 'assert';
const binding = import.meta.require('./build/binding.node');
assert.strictEqual(binding.hello(), 'world');
console.log('binding.hello() =', binding.hello());
