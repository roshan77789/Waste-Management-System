// ------------------------------- for background theme change

const body = document.getElementsByTagName('body')[0]
const faSun = document.querySelector('.fa-sun')
const faMoon = document.querySelector('.fa-moon')

faSun.addEventListener('click', () => {
  faSun.style.display = 'none'
  faMoon.style.display = 'block'
  activeBackground()
})

faMoon.addEventListener('click', () => {
  faSun.style.display = 'block'
  faMoon.style.display = 'none'
  activeBackground()
})

function activeBackground() {
  if (body.classList == 'active-moon') {
    body.classList.remove('active-moon')
    body.classList.add('active-sun')
  } else if (body.classList.contains('active-sun')) {
    body.classList.remove('active-sun')
    body.classList.add('active-moon')
  } else {
    body.classList.add('active-moon')
  }
}

const arrowUp = document.querySelector('.arrow-up')

window.addEventListener('scroll', () => {})

window.addEventListener('scroll', () => {
  if (scrollY <= 150) {
    arrowUp.style.right = '-5%'
    arrowUp.style.opacity = '0'
  }
  if (scrollY > 150) {
    arrowUp.style.right = '5%'
    arrowUp.style.opacity = '1'
  }
})

arrowUp.addEventListener('click', () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})

// -------------------------------------- for nav

const bars = document.querySelector('.bars')
const navContainer = document.querySelector('.nav-container')
const bar1 = document.querySelector('.bar1')
const bar2 = document.querySelector('.bar2')
const bar3 = document.querySelector('.bar3')

bars.addEventListener('click', () => {
  navContainer.classList.toggle('show-nav-container')
  bar1.classList.toggle('active-bar1')
  bar2.classList.toggle('active-bar2')
  bar3.classList.toggle('active-bar3')
})
