const { parallel, series, watch } = require("gulp");

const { bundleJs } = require("./tasks/bundle-js");
const { useCompileSass } = require("./tasks/compile-sass");
const { useCompileEjs } = require("./tasks/compile-ejs");
const { buildServer } = require("./tasks/build-server");
const { browserReload } = require("./tasks/browser-reload");
const { cacheBusting } = require("./tasks/cache-busting");
const { ModuleFilenameHelpers } = require("webpack");

const path = "./src";


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

module.exports = {
  sass: compileSass,
  bundle: bundleJs,
  ejs: compileEjs,
  cache: cacheBusting,
  build: parallel(compileEjs, compileSass, bundleJs, cacheBusting),
  default: parallel(buildServer, watchFiles),
}