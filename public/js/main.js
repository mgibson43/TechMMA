'use strict'

const swiper = new Swiper('.swiper', {
  loop: true,
  grabCursor: true,
  spaceBetween: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    740: {
      slidesPerView: 2
    },
    1096: {
      slidesPerView: 3
    }
  }
});

// const navLists = document.querySelectorAll('.nav-subtab');
// const programs = document.querySelectorAll('.programs');

// const hideElement = function(element) {
//   element.classList.add('hidden');
// }

// const showElement = function(element) {
//   element.classList.remove('hidden');
// }

// programs.forEach(program => {
//   program.addEventListener('mouseover', function() {
//     showElement(program.lastElementChild);
//   });

//   program.addEventListener('mouseout', function() {
//     hideElement(program.lastElementChild);
//   });
// });