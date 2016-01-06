'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
    prompting: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the ' + chalk.red('generator-vagrantchef') + ' generator!'
        ));

        var prompts = [{
            type: 'input',
            name: 'name',
            message: 'What is this project\'s name?'
        },{
            type: 'input',
            name: 'syncPath',
            message: 'Synced folder path? Where, in the virtual machine, should the root folder of this project be mounted?'
        },{
            type: 'input',
            name: 'language',
            message: 'Travis-CI language?'
        }, {
            type: 'input',
            name: 'maintainer',
            message: 'Who is the maintainer of this project?'
        }];

        this.prompt(prompts, function (props) {
            this.props = props;
            // To access props later use this.props.someOption;

            done();
        }.bind(this));
    },

    writing: function () {
        this.fs.copyTpl(
            this.templatePath('Vagrantfile'),
            this.destinationPath('Vagrantfile'),
            this.props
        );

        this.fs.copyTpl(
            this.templatePath('Berksfile'),
            this.destinationPath('cookbooks/Berksfile'),
            this.props
        );

        this.fs.copyTpl(
            this.templatePath('.gitignore'),
            this.destinationPath('.gitignore'),
            this.props
        );

        this.fs.copyTpl(
            this.templatePath('travis.yml'),
            this.destinationPath('.travis.yml'),
            this.props
        );

        this.fs.copyTpl(
            this.templatePath('metadata.rb'),
            this.destinationPath('cookbooks/' + this.props.name + '/metadata.rb'),
            this.props
        );

        this.fs.copyTpl(
            this.templatePath('recipe-default.rb'),
            this.destinationPath('cookbooks/' + this.props.name + '/recipes/default.rb'),
            this.props
        );

        this.fs.copyTpl(
            this.templatePath('template-demo.erb'),
            this.destinationPath('cookbooks/' + this.props.name + '/templates/demo.erb'),
            this.props,
            {
                delimiter: '?'
            }
        );

        this.fs.copyTpl(
            this.templatePath('attributes.rb'),
            this.destinationPath('cookbooks/' + this.props.name + '/attributes/' + this.props.name + '.rb'),
            this.props
        );
    },

    install: function () {
    }
});
