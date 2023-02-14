import './index.css';

const submitButton = document.querySelector('.cookie-consent__button')
const cookieConsent = document.querySelector('.cookie-consent')
let isHidden = localStorage.getItem('isHidden')
if(isHidden) cookieConsent.style.display = 'none'
       
submitButton.addEventListener('click',submitCookie)

function submitCookie() {
    cookieConsent.style.display = 'none'
    localStorage.clear()
    localStorage.setItem('isHidden', true)
}