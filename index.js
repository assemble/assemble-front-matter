/*
 * assemble-front-matter
 * https://github.com/assemble/assemble-front-matter
 *
 * Copyright (c) 2013 Brian Woodward, contributors.
 * Licensed under the MIT license.
 */

var path = require('path');
var pkg = require(path.resolve(process.cwd(), 'package.json'));

if (pkg.name !== 'assemble-yaml') {
  module.exports = exports = require('assemble-yaml');
} else {
  module.exports = exports = require('./lib');
}