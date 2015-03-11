module.exports = function( grunt ) {
	'use strict';

	// require time-grunt at the top and pass in the grunt instance
	require( 'time-grunt' )( grunt );

	// Project configuration.
	grunt.initConfig({
		pkg : grunt.file.readJSON( 'package.json' ),
		version : grunt.file.readJSON( 'package.json' ).version,
		banner : '/*!\n' +
				' * <%= pkg.name %> - v<%= pkg.version %>\n' +
				' * <%= pkg.description %>\n' +
				' * <%= pkg.homepage %>/\n' +
				' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
				' */\n',
		dir : {
			docs : 'docs',
			dist : 'dist',
			src : 'src',
			vendor : 'bower_components'
		}
	});

	// Load tasks
	grunt.loadTasks( 'tasks' );

	// Default task(s)
	grunt.registerTask( 'build', [
		'sass'
	]);
	grunt.registerTask( 'serve', [
		'browsersync',
		'watch'
	]);
	grunt.registerTask( 'dev', [
		'clean',
		'build',
		'copy',
		'serve'
	]);
	grunt.registerTask( 'deploy', [
		'clean',
		'build',
		'autoprefixer',
		'usebanner',
		'cssmin',
		'stripDebug'
	]);
	grunt.registerTask( 'default', [ 'dev' ]);
};
