const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

gulp.task('sass', () => {
  return gulp.src('./src/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(rename('styles-sass.css'))
    .pipe(gulp.dest('./dev'));
});

gulp.task('sass:watch', ['sass'], () => {
  gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('sass:build', () => {
  return gulp.src('./src/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('serve', ['sass:watch']);

gulp.task('build', ['sass:build']); // use sass version for building dist file

gulp.task('default', ['serve']);