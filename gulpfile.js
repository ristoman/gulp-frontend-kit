var gulp = require('gulp');
var postcss = require('gulp-postcss');
var precss = require('precss');
var cssnext = require('postcss-cssnext');
var autoprefixer = require('autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var cssnano = require('cssnano');
var nested = require('postcss-nested');
var scss = require('postcss-scss');
var fileImport = require('postcss-import');
var bs = require('browser-sync').create();

var processors = [
  precss,
  cssnext,
  nested,
  fileImport,
  autoprefixer({browsers: ['last 2 version']})
];

gulp.task('css', function () {
  return gulp.src('src/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build'))
    .pipe(bs.reload({ stream: true}));
});

gulp.task('browser-sync', ['css'], function() {
    bs.init({
        injectChanges: true,
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("src/*.css", ['css']).on('change', bs.reload);
    gulp.watch("*.html").on('change', bs.reload);
});