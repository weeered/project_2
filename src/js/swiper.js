import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

export default swiper;