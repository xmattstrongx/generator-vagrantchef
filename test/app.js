'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-vagrantchef:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
            // .withOptions({someOption: true})
            .withPrompts({
              name: 'foobar',
              syncPath: '/path',
              language: 'go',
              maintainer: 'Jacob Greenleaf'
            })
        .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      '.kitchen.yml',
      'travis.kitchen.yml',
      '.travis.yml',
      'Berksfile',
      'foobar/metadata.rb',
      'foobar/attributes/foobar.rb',
      'foobar/recipes/create_file.rb',
      'foobar/recipes/template_file.rb',
      'foobar/templates/demo.erb'
    ]);
  });
});
