const { src, dest } = require("gulp");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const sassGlob = require("gulp-sass-glob");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssdeclsort = require("css-declaration-sorter");
const gcmq = require("gulp-group-css-media-queries");
const mode = require('gulp-mode')({
  modes: ['production', 'development'],
  default: 'development',
  verbose: false,
})

const useCompileSass = (done) => {
  const postcssPlugins = [
    autoprefixer({
      // browserlist is written in package.json
      cascade: false,
    }),
    cssdeclsort({ order: 'alphabetical' /* smacss, concentric-css */ })
  ]
  
  src("./src/scss/**/*.scss", { sourcemaps: true })
    .pipe(
      plumber({ errorHandler: notify.onError("Error: <%= error.message %>") })
    )
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(postcss(postcssPlugins))
    .pipe(mode.production(gcmq()))
    .pipe(dest("./dist/css", { sourcemaps: "./sourcemaps" }));
  done();
};

exports.useCompileSass = useCompileSass;
