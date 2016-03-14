'use strict';
var gulp = require('gulp');
const zip = require('gulp-zip');


gulp.task('default', function () {
	return gulp.src('*')
		.pipe(zip('test.zip'))
		.pipe(gulp.dest('target'));
});
