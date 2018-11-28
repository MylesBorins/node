// Flags: --experimental-worker --experimental-modules
'use strict';
const common = require('../common');
const fixtures = require('../common/fixtures');
const assert = require('assert');
const { Worker } = require('@nodejs/worker_threads');

const w = new Worker(fixtures.path('worker-script.mjs'));
w.on('message', common.mustCall((message) => {
  assert.strictEqual(message, 'Hello, world!');
}));
