export function loading() {

  const loader = document.getElementById('js-loader');
  // コンテンツ読み込み完了後の処理
  window.addEventListener('load', () => {
    const ms = 400;
    loader.style.transition = 'opacity ' + ms + 'ms';
    
    setTimeout(function(){loader.style.opacity = 0;}, 1);
    setTimeout(function(){loader.style.display = "none";}, ms);
  });

}