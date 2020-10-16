export function modal() {

  document.addEventListener("DOMContentLoaded",() => {

    const modalBtn = document.getElementById('modalOpen');
    const modal = document.getElementById('modal');
  
    const ms = 400;
    modal.style.transition = 'opacity ' + ms + 'ms';
  
    modalBtn.addEventListener('click', () =>{
      setTimeout(function(){modal.classList.add('is_open')},1);
      setTimeout(function(){modal.style.opacity = 1}, 50);
    });
    
    let modalClose = document.querySelectorAll('.js-modal-close');
      for (let i =0; i < modalClose.length; i++){
      modalClose[i].addEventListener('click', () => {
        setTimeout(function(){modal.style.opacity = 0}, 1);
        setTimeout(function(){modal.classList.remove('is_open')}, 400)
      });
    }
  
    // https://qiita.com/makoto1219/items/9d5b71a792025703cdea

  });

}