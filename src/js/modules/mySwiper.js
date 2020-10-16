import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const option1 = {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  autoplay: true,
}
const mySwiper = () => {
  const swipe1 = new Swiper('.mySwiper', option1);
}

export default mySwiper();