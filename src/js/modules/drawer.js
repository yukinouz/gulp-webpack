export function drawer() {
  const jsHamburger = document.getElementById('js-hamburger');
  const body = document.body;
  const spHeaderMenu = document.getElementById('js-global-menu');
  const header = document.getElementById('header');

    jsHamburger.addEventListener('click', function() {
      body.classList.toggle('is-drawerActive')
      header.classList.toggle('is-drawer-open');
      if (this.getAttribute('aria-expanded') == 'false') {
        this.setAttribute('aria-expanded', 'true');
        spHeaderMenu.setAttribute('area-hidden','false')
      } else {
        this.setAttribute('aria-expanded', 'false')
        spHeaderMenu.setAttribute('area-hidden','true')
      };
    });
    let drawerMenus = document.querySelectorAll('.js-drawer-menu');
      for (let i=0; i < drawerMenus.length; i++) {
        drawerMenus[i].addEventListener('click', () => {
        body.classList.remove('is-drawerActive')
        header.classList.remove('is-drawer-open');
        jsHamburger.setAttribute('aria-expanded', 'false')
        spHeaderMenu.setAttribute('area-hidden','true')
      });
    }
}