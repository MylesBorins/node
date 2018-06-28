// Flags: --experimental-modules
/* eslint-disable node-core/required-modules */
import assert from 'assert';
const common = import.meta.require('../common');

async function doTest() {
  await assert.rejects(
    async () => {
      await import('../fixtures/es-module-loaders/throw-undefined.mjs');
    },
    (e) => e === undefined
  );
}

common.crashOnUnhandledRejection();
doTest();
