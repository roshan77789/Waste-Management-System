// ------------------------------- for background theme change

const body = document.getElementsByTagName('body')[0]
const faSun = document.querySelector('.fa-sun')
const faMoon = document.querySelector('.fa-moon')
const mainNav = document.querySelector('.main-nav')
const navContainer = document.querySelector('.nav-container')

faSun.addEventListener('click', () => {
  faSun.style.display = 'none'
  faMoon.style.display = 'block'
  activeBackground()
  // mainNav.classList.add('main-nav-dark-theme')
  // document.querySelectorAll('.main-nav ul li a').forEach((a) => {
  //   a.style.color = 'white'
  // })
  // document.querySelectorAll('.nav-right span a').forEach((a) => {
  //   a.style.color = 'white'
  // })
  // navContainer.classList.add('nav-container-dark-theme')
})

faMoon.addEventListener('click', () => {
  faSun.style.display = 'block'
  faMoon.style.display = 'none'
  activeBackground()
  // mainNav.classList.remove('main-nav-dark-theme')
  // document.querySelectorAll('.main-nav ul li a').forEach((a) => {
  //   a.style.color = 'black'
  // })
  // document.querySelectorAll('.nav-right span a').forEach((a) => {
  //   a.style.color = 'black'
  // })
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

// -------------------------------------- for nav

const bars = document.querySelector('.bars')
const bar1 = document.querySelector('.bar1')
const bar2 = document.querySelector('.bar2')
const bar3 = document.querySelector('.bar3')

bars.addEventListener('click', () => {
  navContainer.classList.toggle('show-nav-container')
  bar1.classList.toggle('active-bar1')
  bar2.classList.toggle('active-bar2')
  bar3.classList.toggle('active-bar3')
})

// -------------------------------------- for image fade

var swiper = new Swiper('.mySwiper', {
  effect: 'fade',
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
  },
})

// ------------------------------------- for services slider

var swiper = new Swiper('.service-card-slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  speed: 300,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next-unique',
    prevEl: '.swiper-button-prev-unique',
  },
  breakpoints: {
    1: {
      slidesPerView: 1,
    },
    676: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1022: {
      slidesPerView: 3,
    },
  },
})

// ------------------------------------- for faqs

const questionWrapper = document.querySelectorAll('.wrapper')

questionWrapper.forEach((question) => {
  question.addEventListener('click', () => {
    question.classList.toggle('show-ans')
    question.querySelector('.wrapper h2').classList.toggle('active-qs')
    question.querySelector('.wrapper i').classList.toggle('active-arrow')
  })
})

// -------------------------------------- for scroll

const arrowUp = document.querySelector('.arrow-up')
const parallexOne = document.getElementById('parallex-one')
const parallexTwo = document.getElementById('parallex-two')
const parallexThree = document.getElementById('parallex-three')
const mainInfo = document.querySelectorAll('.main-info')

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

  let offset = window.scrollY

  parallexOne.style.backgroundPositionY = offset * 0.7 + 'px'
  parallexTwo.style.backgroundPositionY = offset * 0.7 + 'px'
  parallexThree.style.backgroundPositionY = offset * 0.7 + 'px'

  mainInfo.forEach((info) => {
    info.style.marginTop = `${offset / 1.8}px`
  })
})

arrowUp.addEventListener('click', () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})
