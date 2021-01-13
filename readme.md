# gulp-webpack

## Project setup
```bash
npm install
```

### Compiles and hot-reloads for development
```bash
gulp
```

### Compile Sass for production(group media queries)
```bash
gulp sass --production
```

## polyfill for picture tag
Nothing to do.
Polyfill automatically apply to picture tags(picturefill.js)
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