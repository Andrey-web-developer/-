'use strict'

let menu = document.querySelector('button');
let list = document.querySelector('ul');

menu.addEventListener('click', function() {
    list.classList.toggle('menu-active');
  })

