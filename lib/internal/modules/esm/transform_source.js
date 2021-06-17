'use strict';

const includeRequire = 'import {createRequire} from \'module\';' +
  'function require(...args) {' +
  '  require = createRequire(import.meta.url);' +
  '  return require(...args);' +
  '}';

function defaultTransformSource(source, { url, format } = {},
                                defaultTransformSource) {
  return { source:  source + includeRequire };
}
exports.defaultTransformSource = defaultTransformSource;
