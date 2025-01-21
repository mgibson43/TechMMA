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
    850: {
      slidesPerView: 2
    },
    1096: {
      slidesPerView: 3
    }
  }
});

const open = document.querySelector('.open-menu');
const close = document.querySelector('.close-menu');
const menu = document.querySelector('.container-nav');
const getStarted = document.getElementById('nav-get-started');

const formSubmit = document.querySelector('.form-submit');
const formInputs = document.querySelectorAll('.form-input');


function openMenu() {
  menu.style.right = "0";
  close.style.display = "block";
  console.log('hi');
}

function closeMenu() {
  close.style.display = "none";
  menu.style.right = "-100%";
}

function validName(name) {
  return /^[a-zA-Z]+$/.test(name);
}

function validEmail(email) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function validPhone(phone) {
  return /^[0-9]{10}$/.test(phone);
}

open.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);
getStarted.addEventListener('click', closeMenu);

formInputs.forEach(formInput => {
  formInput.addEventListener('keyup', function() {
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
  
    if (!validName(fname.value)) {
      formSubmit.classList.add('disabled');
      return;
    }
  
    if (!validName(lname.value)) {
      formSubmit.classList.add('disabled');
      return;
    }
  
    if (!validEmail(email.value)) {
      formSubmit.classList.add('disabled');
      return;
    }
  
    if (!validPhone(phone.value)) {
      formSubmit.classList.add('disabled');
      return;
    }
  
    formSubmit.classList.remove('disabled');
  });
});

formSubmit.addEventListener('click', function() {
  formInputs.forEach(formInput => {
    formInput.value = '';
  });
  formSubmit.classList.add('disabled');
});