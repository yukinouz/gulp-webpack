const { src, dest } = require("gulp");
const crypto = require('crypto'); 
const hash = crypto.randomBytes(8).toString('hex');
const replace = require("gulp-replace");

const cacheBusting = done => {
  src('./index.html')
  .pipe(replace(/\.(js|css)\?ver/g, '.$1?ver='+hash))
  .pipe(dest("./"));
  done();
}

exports.cacheBusting = cacheBusting;