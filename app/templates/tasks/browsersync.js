module.exports = function( grunt ) {
	'use strict';

	grunt.loadNpmTasks( 'grunt-browser-sync' );

	grunt.config( 'browserSync', {
		dev : {
			bsFiles : {
				src : '<%= dir.dist %>/styles/*.css'
			},
			options : {
				proxy : '127.0.0.1:8000',
				browser : [
					'google chrome',
					'firefox'
				],
				watchTask : true
			}
		}
	});
};
