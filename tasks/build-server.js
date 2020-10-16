const browserSync = require("browser-sync");

const buildServer = (done) => {
  browserSync.init({
    port: 8080,
    // 静的サイト
    server: { baseDir: './' },
    // 動的サイト
    // files: ["./**/*.php"],
    // proxy: "http://localsite.wp/",
    open: true,
    watchOptions: {
      debounceDelay: 1000, // タスクの再実行を抑制
    },
  });
  done();
};

exports.buildServer = buildServer;
