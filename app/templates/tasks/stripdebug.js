module.exports = function( grunt ) {
	'use strict';

	grunt.loadNpmTasks( 'grunt-strip-debug' );

	grunt.config( 'stripDebug', {
		dist : {
			files : {
				'<%= dir.dist %>/scripts/<%= pkg.name %>.js' : '<%= dir.dist %>/scripts/<%= pkg.name %>.js'
			}
		}
	});
};
