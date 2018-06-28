// Flags: --experimental-modules --loader ./test/fixtures/es-module-loaders/loader-shared-dep.mjs
/* eslint-disable node-core/required-modules */
import '../common/index.mjs';
import assert from 'assert';
import '../fixtures/es-modules/test-esm-ok.mjs';
const dep = import.meta.require('../fixtures/es-module-loaders/loader-dep.js');

assert.strictEqual(dep.format, 'esm');
