/**
 @author Peter Ingram <peter.ingram0@gmail.com>
 */

/**
 * Load in our dependencies
 */
var gulp = require('gulp'),
	eslint = require('gulp-eslint'),
	concat = require('gulp-concat'),
	del = require('del');

/**
 * Define all settings for the build
 */
var settings = {
	sourceDir: './src/',
	distDir: './dist/',
	projectName: 'Angular2Plate'
};

/**
 * Compile all scripts
 */
gulp.task('scripts', function() {

	return gulp.src(settings.sourceDir + '**/*.js')

		.pipe(eslint())

		.pipe(eslint.format())

		.pipe(eslint.failAfterError())

		.pipe(concat( settings.projectName + '.js' ))

		.pipe(gulp.dest( settings.distDir ));

});

/**
 * Cleaning task - A tidy file is a tidy mind!
 */
gulp.task('clean', function(cb) {

	/**
	 * Delete the JS file and css file created
	 */
	del([ settings.distDir ], cb);

});
