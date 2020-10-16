const { src, dest } = require("gulp");
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const ejs = require("gulp-ejs");
const replace = require("gulp-replace"); 
const rename = require("gulp-rename");


// ejs
const useCompileEjs = done => {
  src(["./src/ejs/**/*.ejs", "!" + "./src/ejs/**/_*.ejs"])
  .pipe(plumber(({ errorHandler: notify.onError("Error: <%= error.message %>") })))
  .pipe(ejs())
  .pipe(rename({ extname: ".html" }))
  .pipe(replace(/^[ \t]*\n/gim, ""))
  .pipe(dest("./"));
  done();
}

exports.useCompileEjs = useCompileEjs;