const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

gulp.task('imagemin', () =>
  gulp
    .src('src/assets/*')
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
        })
      ])
    )
    .pipe(gulp.dest('src/assets/'))
);

gulp.task('autoprefixer', () => {
  gulp
    .src('src/App.css')
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('dest'));
});
