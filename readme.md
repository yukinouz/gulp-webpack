# gulp-webpack

Require Node.js  
https://nodejs.org/ja/

## Project setup
```bash
npm install
```

### Compiles and hot-reloads for development
```bash
## Run buildServer and watchFiles
npx gulp
```

### Compile Sass for production(group media queries)
```bash
## Run compileSass width group media queries
npx gulp sass --production
```

## polyfill for picture tag
Nothing to do.  
Polyfill automatically apply to picture tags by picturefill.js
## How to apply lazyload
```html
<img data-src="lazy.jpg" alt="A lazy image" class="lazy" />
<picture>
  <source media="(min-width: 768px)" data-srcset="lazy_800.jpg 1x, lazy_1600.jpg 2x" />
  <img data-src="lazy.jpg" alt="A lazy image" class="lazy" />
</picture>
```

for more info, see vanila-lazyload  
https://github.com/verlok/vanilla-lazyload

## stylelint
stylelint requires stylelint-plus (VS code extension)  
If you encounter `stylelint: Undefined rule unicode-bom`, manually install [stylelint-plus-0.52.3.vsix.zip](https://github.com/hex-ci/vscode-stylelint-plus/files/3963538/stylelint-plus-0.52.3.vsix.zip)

See [this Issue](https://github.com/hex-ci/vscode-stylelint-plus/pull/5) for more info