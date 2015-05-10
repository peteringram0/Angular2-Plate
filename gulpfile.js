/**
 @author Peter Ingram <peter.ingram0@gmail.com>
 */

/**
 * Load in our dependencies
 */
var gulp = require('gulp'),
	eslint = require('gulp-eslint'),
	concat = require('gulp-concat'),
	del = require('del'),
	shell = require('gulp-shell'),
	traceur = require('gulp-traceur');


var NG_PATH = './node_modules/angular2/es6/dev/';
var RTT_PATH = './node_modules/rtts_assert/';

gulp.task('build:ng', shell.task([
		'npm install',
		'./es5build.js -d ../../../../lib/angular'
	], {
		cwd: NG_PATH
	})
);

gulp.task('build:rtts', shell.task([
		'npm install',
		'./es6/es5build.js -d ./../../lib/rtts_assert'
	], {
		cwd: RTT_PATH
	})
);

gulp.task('build:angular', ['build:ng', 'build:rtts']);

gulp.task('build', function () {
	return gulp.src('./src/**/*.js')
		.pipe(traceur({
			sourceMaps: 'inline',
			modules: 'instantiate',
			annotations: true,
			memberVariables: true,
			typeAssertions: true,
			types: true
		}))
		.pipe(gulp.dest('./dev'));
});