// Flags: --experimental-modules
/* eslint-disable node-core/required-modules */
import '../common/index.mjs';
import assert from 'assert';
import.meta.require('../fixtures/es-module-require-cache/preload.js');
import.meta.require('../fixtures/es-module-require-cache/counter.js');
assert.strictEqual(global.counter, 1);
delete global.counter;
