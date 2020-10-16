export function accordion() {

  document.addEventListener("DOMContentLoaded",() => {
    // 複数展開
    const title = document.querySelectorAll('.js-accordion-title');
    for (let i = 0; i < title.length; i ++){
    let titleEach = title[i];
    let content = titleEach.nextElementSibling;
    titleEach.addEventListener('click', () => {
      titleEach.classList.toggle('is-active');
      content.classList.toggle('is-open');
    });
  }

    // 一つ開いたら他は閉じる
    const accSingle = document.querySelector('.js-acc-single');
    const items     = accSingle.querySelectorAll('.js-acc-item');
    const accSingleTriggers = accSingle.querySelectorAll('.js-acc-single-trigger');

    // 最初の要素を開いておく
    const firstChild = accSingle.firstElementChild;
    firstChild.classList.add('is-open');

    accSingleTriggers.forEach(trigger => trigger.addEventListener('click', toggleAccordion));

    function toggleAccordion() {
      const thisItem = this.parentNode;

      items.forEach(item => {
        if (thisItem == item) {
          thisItem.classList.toggle('is-open');
          return;
        }
        item.classList.remove('is-open');
      });
    }

  });
}