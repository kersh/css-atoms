var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', ['sass'], function () {
  gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('sass:build', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('serve', ['sass:watch']);

gulp.task('build', ['sass:build']);

gulp.task('default', ['serve']);