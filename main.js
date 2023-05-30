let btnMenu = document.querySelector('#menuButton')
let nav = document.querySelector('.nav')

btnMenu.onclick = function () {
  nav.classList.toggle('active')
  btnMenu.classList.toggle('bi-list')
  btnMenu.classList.toggle('bi-x-lg')
}

function closeMenu() {
  nav.classList.remove('active')
  btnMenu.classList.remove('bi-x-lg')
  btnMenu.classList.toggle('bi-list')
}

let radio = document.querySelector('.manual-btn')
let cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
  nextImg()
}, 5000)

function nextImg() {
  cont++

  if (cont > 3) {
    cont = 1
  }

  document.getElementById('radio' + cont).checked = true
}
