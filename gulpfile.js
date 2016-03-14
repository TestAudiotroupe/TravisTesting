'use strict';
var gulp = require('gulp');
const zip = require('gulp-zip');


gulp.task('default', function () {
	return gulp.src('*')
		.pipe(zip('test.zip'))
		.pipe(gcPub({
       			bucket: 'binary_artifa',
        		keyFilename: 'key/cloud.json',
        		projectId: 'feisty-audio-109522',
        		public: false
      }));
});
