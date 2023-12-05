const eye = document.querySelector('.fa-eye')
const passwordInput = document.querySelector('#password')
const btn = document.querySelector('.continue-btn')
const emailInput = document.querySelector('.email-input')
const invalid = document.querySelector('.invalid')

eye.addEventListener('click', (e) => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text'
  } else {
    passwordInput.type = 'password'
  }

  eye.classList.toggle('show-eye')
})

btn.addEventListener('click', (e) => {
  e.preventDefault()

  if (emailInput.value.length <= 8 || passwordInput.value.length <= 8) {
    invalid.style.display = 'block'
  } else {
    invalid.style.display = 'none'
  }
})
