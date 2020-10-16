export function scrollTop() {

  document.addEventListener("DOMContentLoaded",() => {

     // スクロールで出現
    const pageTopBtn = document.getElementById('js-scroll-top');
    window.addEventListener("scroll", () => {
      const y = window.pageYOffset;
      if ( y > 100){
        setTimeout(function(){
          pageTopBtn.style.opacity = 1;
        }, 100);
      } else {
        setTimeout(function(){
          pageTopBtn.style.opacity = 0;
        }, 100);
      }
    });

    // スクロールトップボタン
    scrollTop('js-scroll-top', 150);

    function scrollTop(elem,duration) {
      let target = document.getElementById(elem); // #js-button
      target.addEventListener('click', function() {
        let currentY = window.pageYOffset; // 現在のスクロール位置を取得
        let step = duration/currentY > 1 ? 10 : 100; // 三項演算子
        let timeStep = duration/currentY * step; // スクロールスピードの速さ調整
        let intervalID = setInterval(scrollUp, timeStep);
        // timeStepの間隔でscrollUpを繰り返す。
        // clearItervalのために返り値intervalIDを定義する。

        function scrollUp(){
          currentY = window.pageYOffset;
          if(currentY === 0) {
              clearInterval(intervalID); // ページ最上部に来たら終了
          } else {
              scrollBy( 0, -step ); // step分上へスクロール
          }
        }
      });
    }

  });

}