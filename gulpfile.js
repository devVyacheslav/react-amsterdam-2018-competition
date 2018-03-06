const gulp = require('gulp');
const fileAssets = require('gulp-file-assets');
const inlineCss = require('gulp-inline-css');
const postcss = require('gulp-postcss');
const logger = require('gulp-logger');
const filter = require('gulp-filter');

gulp.task('build', function() {
  const index = filter(['index.html']);

  return gulp.src('./src/index.html')
      .pipe(logger())
      // .pipe(index)
      .pipe(inlineCss())
      // .pipe(fileAssets())
      .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);
