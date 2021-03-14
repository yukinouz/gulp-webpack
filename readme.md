# yukinouz-gulp-webpack

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
stylelint requires stylelint(https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

## Memo
cacheBusting (gulp cache)は連続で使用するとハッシュ値が連結して増えてしまうので、gulp ejs後に使用してください。
ejsを使用しないケースでは、ハッシュ値を手動で削除するか、cacheBustingは使わない方がいいかもしれません。
