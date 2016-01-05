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
      'Vagrantfile',
      '.travis.yml',
      'cookbooks/Berksfile',
      'cookbooks/foobar/metadata.rb',
      'cookbooks/foobar/attributes/foobar.rb',
      'cookbooks/foobar/recipes/default.rb',
      'cookbooks/foobar/templates/demo.erb'
    ]);
  });
});
