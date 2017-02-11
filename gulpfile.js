const gulp = require('gulp');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const stylus = require('gulp-stylus');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');


// Sass
gulp.task('sass', () => {
  return gulp.src('./src/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(rename('styles-sass.css'))
    .pipe(gulp.dest('./dev'));
});

gulp.task('sass:watch', ['sass'], () => {
  gulp.watch('./src/**/*.scss', ['sass']);
});


// Stylus
gulp.task('stylus', () => {
  return gulp.src('./src/styles.styl')
    .pipe(stylus().on('error', gutil.log))
    .pipe(rename('styles-stylus.css'))
    .pipe(gulp.dest('./dev'));
});

gulp.task('stylus:watch', ['stylus'], () => {
  gulp.watch('./src/**/*.styl', ['stylus']);
});


// Build
gulp.task('sass:build', () => {
  return gulp.src('./src/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./dist'));
});


// Tasks
gulp.task('serve', ['sass:watch', 'stylus:watch']);
gulp.task('build', ['sass:build']); // use sass version for building dist file
gulp.task('default', ['serve']);