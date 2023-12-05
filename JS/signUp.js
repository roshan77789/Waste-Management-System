const form = document.querySelector('.sign-up-form')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const number = document.getElementById('number')
const password = document.getElementById('password')
const error = document.querySelector('.error')
const eye = document.querySelector('.fa-eye')

eye.addEventListener('click', (e) => {
  if (password.type === 'password') {
    password.type = 'text'
  } else {
    password.type = 'password'
  }

  eye.classList.toggle('show-eye')
})

form.addEventListener('submit', (e) => {
  let messages = []

  console.log(number.value)
  if (number.value.length > 10) {
    messages.push('Plese put correct number')
  }
  if (password.value.length <= 8) {
    messages.push('Password must be longer than 8 characters')
  }
  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }
  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }
  if (messages.length > 0) {
    e.preventDefault()
    error.innerText = messages.join(', ')
  }
})
