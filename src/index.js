import './style.css'
import { nav } from './navbar/nav'
import { home } from './pages/home'
import { menu } from './pages/menu'
import { contact } from './pages/contact'

const header = document.getElementById('header')
const content = document.getElementById('content')


const togglePage = (that) => {
  const page = that.target.innerText 
  content.innerHTML = ''
  switch (page) {
    case 'HOME':
      console.log('you are on the home page')
      content.appendChild(home)
      break
    case 'MENU':
      console.log('you are looking at menu')
      content.appendChild(menu)
      break
    case 'CONTACT':

      console.log('CONTACT')
      content.appendChild(contact)
      break
  }
  console.log(page)
}

export default togglePage

header.appendChild(nav())
content.appendChild(home())
