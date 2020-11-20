'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var serve = require('gulp-serve');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('app/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('app/scss/style.scss', gulp.series('sass'));
});

gulp.task('serve', serve('.'))