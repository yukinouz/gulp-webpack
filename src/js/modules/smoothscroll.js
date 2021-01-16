export function smoothScroll() {

  const header = document.getElementById('header');
  const headerHight = header.clientHeight;

  document.addEventListener("DOMContentLoaded",() => {

  const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault(); // デフォルトのイベントをキャンセル
      let href = smoothScrollTrigger[i].getAttribute('href');
      // console.log(smoothScrollTrigger[i]) 結果: <a href="#menu1">menu1</a>
      // console.log(href) 結果: #menu1
      let targetElement = document.getElementById(href.replace('#', ''));
      // console.log(targetElement) 結果: menu1

      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = headerHight; // 固定ヘッダー分の高さを引く
      const target = rect + offset - gap; // offsetTop()

      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }

  });

}