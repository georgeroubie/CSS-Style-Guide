'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var runSequence  = require('run-sequence');

gulp.task('sass', function () {
  return gulp.src('./sass/project/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('prefix', function () {
    return gulp.src('./css/main.css')
        .pipe(autoprefixer({
            browsers: ['Chrome 50', 'Firefox 12', 'Explorer 8', 'Explorer 9', 'Explorer 10', 'Explorer 11', 'Edge 12', 'iOS 6', 'Opera 35', 'Safari 5', 'ExplorerMobile 11']
        }))
        .pipe(gulp.dest('./css'))
});

gulp.task('minify-css', function() {
  return gulp.src('css/main.css')
    .pipe(cleanCSS({debug: true}, function(details) {
        console.log(details.name + ': ' + details.stats.originalSize);
        console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', function(){ runSequence('sass', 'prefix', 'minify-css') });
});