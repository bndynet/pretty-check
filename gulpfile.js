'use strict';

var pkg = require('./package.json');
var gulp = require('gulp');
var banner = require('gulp-banner');
var sourcemaps = require('gulp-sourcemaps');

var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

sass.compiler = require('node-sass');
var comment = '/*!\n' +
    ' * <%= pkg.name %> v<%= pkg.version %>\n' +
    ' * <%= pkg.description %>\n' +
    ' * <%= pkg.homepage %>\n' +
    ' *\n' +
    ' * Copyright (c) <%= pkg.author %>\n' +
    ' * Released under the <%= pkg.license %> license.\n' +
    ' * http://bndy.net\n' +
    ' */\n\n';

gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(banner(comment, { pkg: pkg }))
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./docs'))
    .pipe(gulp.dest('./dist'))
    ;
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/**/*.scss', gulp.series('sass'));
});