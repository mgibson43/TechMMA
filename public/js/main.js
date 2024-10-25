'use strict'

const navLists = document.querySelectorAll('.nav-subtab');
const programs = document.querySelectorAll('.programs');

const hideElement = function(element) {
  element.classList.add('hidden');
}

const showElement = function(element) {
  element.classList.remove('hidden');
}

programs.forEach(program => {
  program.addEventListener('mouseover', function() {
    showElement(program.lastElementChild);
  });

  program.addEventListener('mouseout', function() {
    hideElement(program.lastElementChild);
  });
});