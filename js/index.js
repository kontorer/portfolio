const head = document.querySelector('.head')
const buttonUp = document.querySelector('.button-up')
const emailBttns = document.querySelectorAll('.contact-button.email-icon')
const toastDiv = document.querySelector('.toast-body')

const myEmail = 'kontorerer@gmail.com'

window.addEventListener('scroll', (e) => {
	window.innerHeight / 2 + head.getBoundingClientRect().y > 0 ? buttonUp.classList.add('hide') : buttonUp.classList.remove('hide')
})

const copyEmail = (e) => {
	e.preventDefault()
  	const el = document.createElement('textarea')
  	el.value = myEmail
  	document.body.appendChild(el)
  	el.select()
  	document.execCommand('copy')
  	document.body.removeChild(el)
  	toast('Email скопирован!')
}

emailBttns.forEach(btn =>  {
	btn.addEventListener('click', copyEmail)
})

const toast = (msg) => {
	toastDiv.innerHTML = `<span class="toast-message">${msg}</span>`
	toastDiv.classList.add('toast-body_show')
	setTimeout(() => {
		toastDiv.classList.remove('toast-body_show')
		toastDiv.innerHTML = ''
	}, 2000)
}