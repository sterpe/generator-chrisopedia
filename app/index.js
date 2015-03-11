/* jshint -W097 */
'use strict';
var yeoman = require( 'yeoman-generator' );

module.exports = yeoman.Base.extend({
	initializing : function() {
		this.log( 'initializing' );
	},
	prompting : function() {
		this.log( 'prompting' );
		var done = this.async();

		var prompts = [
			{
				name : 'name',
				message : 'What would you like to call this project?'
			},
			{
				name : 'description',
				message : 'How would you describe this project?'
			},
			{
				name : 'keywords',
				message : 'Comma-separated list of keywords'
			},
			{
				name : 'homepage',
				message : 'Where does this project live?'
			},
			{
				name : 'email',
				message : 'What is your email address?'
			}
		];

		this.prompt( prompts, function( props ) {
			this.name = props.name;
			this.description = props.description;
			this.keywords = props.keywords;
			this.homepage = props.homepage;
			this.email = props.email;
			done();
		}.bind( this ) );
	},
	configuring : function() {
		this.log( 'configuring' );
	},
	default : function() {
		this.log( 'defaulting' );
	},
	writing : {
		bower : function() {
			this.log( this.appdir );
			this.template( '_bower.json', 'bower.json' );
		},
		documentation : function() {
			this.template( 'CONTRIBUTING.md' );
			this.copy( 'LICENSE.md' );
			this.template( 'OWNERS.md' );
			this.template( 'README.md' );
		},
		gems : function() {
			this.copy( 'Gemfile' );
		},
		git : function() {
			this.copy( 'gitattributes', '.gitattributes' );
			this.copy( 'gitignore', '.gitignore' );
		},
		grunt : function() {
			this.directory( 'tasks' );
			this.copy( 'browserlist' );
			this.copy( 'Gruntfile.js' );
		},
		npm : function() {
			this.template( '_package.json', 'package.json' );
		},
		styleguide : function() {
			this.copy( 'csscomb.json', '.csscomb.json' );
			this.copy( 'csslintrc', '.csslintrc' );
			this.copy( 'editorconfig', '.editorconfig' );
			this.copy( 'jscs.json', '.jscs.json' );
			this.copy( 'jsfmtrc', '.jsfmtrc' );
			this.copy( 'jshintrc', '.jshintrc' );
			this.copy( 'overcommit.yml', '.overcommit.yml' );
			this.copy( 'scss-lint.yml', '.scss-lint.yml' );
		},
		travis : function() {
			this.copy( 'travis.yml', '.travis.yml' );
		}
	},
	install : function() {
		this.log( 'installing' );
		this.installDependencies();
	},
	end : function() {
		this.log( 'ending' );
		this.config.save();
	}
});
