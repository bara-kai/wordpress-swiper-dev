const { src, dest, watch, series, parallel, lastRun } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssdeclsort = require('css-declaration-sorter');
const gcmq = require('gulp-group-css-media-queries');
const mode = require('gulp-mode')();
const browserSync = require('browser-sync');
const crypto = require('crypto');
const hash = crypto.randomBytes(8).toString('hex');
const replace = require('gulp-replace');
const tinypng = require('gulp-tinypng-extended');
const webp = require('gulp-webp');

const webpackStream = require('webpack-stream');
const webpack = require('webpack');

const webpackConfig = require('./webpack.config');

const bundleJs = () => {
  return webpackStream(webpackConfig, webpack)
    .on('error', function (e) {
      this.emit('end');
    })
    .pipe(dest('dist/js'));
};

const compileSass = (done) => {
  const postcssPlugins = [
    autoprefixer({
      grid: 'autoplace',
      cascade: false,
    }),
    cssdeclsort({ order: 'alphabetical' }),
  ];
  src('./src/scss/**/*.scss', { sourcemaps: true })
    .pipe(
      plumber({ errorHandler: notify.onError('Error: <%= error.message %>') })
    )
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(postcss(postcssPlugins))
    .pipe(mode.production(gcmq()))
    .pipe(dest('./dist/css', { sourcemaps: './sourcemaps' }));
  done();
};

const buildServer = (done) => {
  browserSync.init({
    port: 8080,
    files: ['**/*'],
    // 静的サイト
    // server: { baseDir: './' },
    // 動的サイト
    proxy: 'http://swiperdev.local/',
    open: true,
    watchOptions: {
      debounceDelay: 1000,
    },
  });
  done();
};

const browserReload = (done) => {
  browserSync.reload();
  done();
};

const tinyPng = (done) => {
  src('./src/img/**/*.{png,jpg,jpeg}')
    .pipe(plumber())
    .pipe(
      tinypng({
        key: 'KZvZBbY0rGHGpj86C8RK9x8j7TJ5D8JV',
        sigFile: './src/img/.tinypng-sigs',
        log: true,
        summarise: true,
        sameDest: true,
      })
    )
    .pipe(dest('./src/img'));
  done();
};

const generateWebp = (done) => {
  src('./dist/img/**/*.{png,jpg,jpeg}', { since: lastRun(generateWebp) })
    .pipe(webp())
    .pipe(dest('dist/img'));
  done();
};

const copyImages = (done) => {
  src(['./src/img/**/*']).pipe(dest('./dist/img'));
  done();
};

const cacheBusting = (done) => {
  src('./dist/index.html')
    .pipe(replace(/\.(js|css)\?ver/g, '.$1?ver=' + hash))
    .pipe(replace(/\.(webp|jpg|jpeg|png|svg|gif)/g, '.$1?ver=' + hash))
    .pipe(dest('./dist'));
  done();
};

const watchFiles = () => {
  watch('./src/scss/**/*.scss', series(compileSass, browserReload));
  watch('./**/*.html', browserReload);
  watch('./src/js/**/*.js', series(bundleJs, browserReload));
  watch('./src/img/**/*', series(generateWebp, copyImages));
};

module.exports = {
  sass: compileSass,
  bundle: bundleJs,
  tinypng: tinyPng,
  webp: generateWebp,
  image: series(tinyPng, generateWebp, copyImages),
  // cache: cacheBusting,
  build: series(
    parallel(compileSass, bundleJs),
    tinyPng,
    generateWebp,
    copyImages
    // cacheBusting
  ),
  default: parallel(buildServer, watchFiles),
};
