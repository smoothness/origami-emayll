"use strict";

var gulp = require('gulp');
var jekyll = require('gulp-jekyll');

gulp.task('default', function(){
	return gulp.src(['./index.html', './includes/*.html', './_includes/*.haml', '_layouts/*.html', './_promotional/*.haml', './_transactional/*.haml'])
		.pipe(jekyll({
			source: './',
			destination: './_site/',
			bundleExec: true
		}))
		.pipe(gulp.dest('./_site'));
});