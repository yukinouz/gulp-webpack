const { parallel, series, watch, src, dest } = require("gulp");

const { bundleJs } = require("./tasks/bundle-js");
const { useCompileSass } = require("./tasks/compile-sass");
const { useCompileEjs } = require("./tasks/compile-ejs");
const { buildServer } = require("./tasks/build-server");
const { browserReload } = require("./tasks/browser-reload");

const crypto = require('crypto'); 
const hash = crypto.randomBytes(8).toString('hex');
const replace = require("gulp-replace");

const path = "./src";

const cache = done => {
  src('./index.html')
  .pipe(replace(/\.(js|css)\?rev/g, '.$1?rev='+hash))
  .pipe(dest("./"));
  done();
}

const watchRules = {
  scss: `${path}/scss/**/*.scss`,
  ejs: `${path}/ejs/**/*.ejs`,
  // html: `./**/*.html`,
  // php: `./**/*.php`,
  js: `${path}/js/**/*.js`,
};

const compileSass = useCompileSass;
const compileEjs = useCompileEjs;

const watchFiles = () => {
  watch(watchRules.scss, series(compileSass, browserReload));
  watch(watchRules.ejs, series(compileEjs, browserReload));
  // watch(watchRules.html, browserReload);
  // watch(watchRules.php, browserReload);
  watch(watchRules.js, series(bundleJs, browserReload));
};

exports.sass = compileSass;
exports.ejs = compileEjs;
exports.cache = cache;
exports.bundle = bundleJs;
exports.build = (compileEjs, compileSass, cache);
exports.default = parallel(buildServer, watchFiles);
