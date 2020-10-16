const { parallel, series, watch } = require("gulp");

const { bundleJs } = require("./tasks/bundle-js");
const { useCompileSass } = require("./tasks/compile-sass");
const { buildServer } = require("./tasks/build-server");
const { browserReload } = require("./tasks/browser-reload");

const path = "./src";

const watchRules = {
  scss: `${path}/scss/**/*.scss`,
  html: `./**/*.html`,
  // php: `./**/*.php`,
  js: `${path}/js/**/*.js`,
};

const compileSass = useCompileSass;

const watchFiles = () => {
  watch(watchRules.scss, series(compileSass, browserReload));
  watch(watchRules.html, browserReload);
  // watch(watchRules.php, browserReload);
  watch(watchRules.js, series(bundleJs, browserReload));
};

exports.sass = compileSass;
exports.bundle = bundleJs;
exports.default = parallel(buildServer, watchFiles);
