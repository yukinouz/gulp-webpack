const browserSync = require("browser-sync");

const browserReload = (done) => {
  browserSync.reload();
  done();
};

exports.browserReload = browserReload;
