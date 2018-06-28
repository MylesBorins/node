import assert from 'assert';

const dep = import.meta.require('./loader-dep.js');

export function resolve(specifier, base, defaultResolve) {
  assert.strictEqual(dep.format, 'esm');
  return defaultResolve(specifier, base);
}
