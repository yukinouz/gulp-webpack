import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

export function mySwiper() {
  const option1 = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: true,
  }
  const swipe1 = new Swiper('.mySwiper', option1);
}