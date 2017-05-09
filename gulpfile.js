const gulp = require('gulp');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const stylus = require('gulp-stylus');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

const basePath = './src';
const devOutput = './dev';

// Sass
gulp.task('sass', () => {
  return gulp.src(`${basePath}/**/*.scss`)
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(rename('styles-sass.css'))
    .pipe(gulp.dest(devOutput));
});

gulp.task('sass:watch', ['sass'], () => {
  gulp.watch(`${basePath}/sass/**/*.scss`, ['sass']);
});


// Stylus
gulp.task('stylus', () => {
  return gulp.src(`${basePath}/styles.styl`)
    .pipe(stylus().on('error', gutil.log))
    .pipe(rename('styles-stylus.css'))
    .pipe(gulp.dest(devOutput));
});

gulp.task('stylus:watch', ['stylus'], () => {
  gulp.watch(`${basePath}/stylus/**/*.styl`, ['stylus']);
});


// Less
gulp.task('less', () => {
  return gulp.src(`${basePath}/styles.less`)
    .pipe(less().on('error', gutil.log))
    .pipe(rename('styles-less.css'))
    .pipe(gulp.dest(devOutput));
});

gulp.task('less:watch', ['less'], () => {
  gulp.watch(`${basePath}/less/**/*.less`, ['less']);
});


// Build
gulp.task('sass:build', () => {
  return gulp.src(`${basePath}/**/*.scss`)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename('css-atoms.css'))
    .pipe(gulp.dest('./dist'));
});


// Tasks
gulp.task('serve', ['sass:watch', 'stylus:watch', 'less:watch']);
gulp.task('build', ['sass:build']); // use sass version for building dist file
gulp.task('default', ['serve']);