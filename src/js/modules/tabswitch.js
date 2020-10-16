export function tabSwitch() {

  document.addEventListener("DOMContentLoaded",() => {

  const tabs = document.querySelectorAll('.js-thumbnail');
  const mainGallery = document.querySelectorAll('.js-mainGallery');
  for (let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener('click', tabSwitch);
    }

  // タブをクリックすると実行する関数
  function tabSwitch(){
    const tabSelected = document.querySelectorAll('.is_selected');
    const galleryActive = document.querySelectorAll('.is_active');
    tabSelected[0].classList.remove('is_selected'); 
    this.classList.add('is_selected');
    galleryActive[0].classList.remove('is_active');
    const arraytab = Array.from(tabs); // nodeList, HTML Collectionを配列に変換
    const index = arraytab.indexOf(this); 
    mainGallery[index].classList.add('is_active');
  };

  });

}