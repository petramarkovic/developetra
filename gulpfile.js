//Require plugins
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const prefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const jsMin = require('gulp-terser');
const imageMin = require('gulp-imagemin');

//Functions

//SASS
function compileSass() {
  return src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefixer())
    .pipe(cleanCss())
    .pipe(dest('dist/assets/css'));
}

//JS
function handleJs() {
  return src('src/js/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('main.js'))
    .pipe(jsMin())
    .pipe(dest('dist/assets/js'))
}

//IMAGES
function handleImagesMin() {
  return src("src/images/*")
    .pipe(imageMin())
    .pipe(dest("dist/assets/images"))
}

//COPY HTML
function copyHtml() {
  return src('src/*.html')
  .pipe(dest('dist'));
}

//WATCH
function watchAll() {
  watch('src/scss/**/*.scss',  compileSass);
  watch('src/js/*.js', handleJs);
  watch('src/images/*', handleImagesMin);
  watch('src', copyHtml);
}

//DEFAULT
exports.default = series(
  compileSass,
  handleJs,
  handleImagesMin,
  copyHtml,
  watchAll
);
