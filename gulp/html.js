var errorLog = require('./_errorLog.js').errorLog;
var htmlPath = require('./_config.js').html;

var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
var prettify = require('gulp-html-prettify');

gulp.task('html' , function(){
	return gulp.src(htmlPath.src)
		.pipe(fileinclude({
			prefix: '__@w@'
		}))
		.on('error', errorLog )
		.pipe(prettify({indent_char: '\t', indent_size: 1}))
		.on('error', errorLog )
		.pipe(gulp.dest(htmlPath.dst));
});
