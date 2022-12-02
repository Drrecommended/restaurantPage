import './style.css'
import { nav } from './navbar/nav'
import { navHeader } from './navbar/navHeader'
import { home } from './pages/home'
import { menu } from './pages/menu'
import { contact } from './pages/contact'
import homePhoto from './assets/unsplash1.jpg'


const header = document.getElementById('header')
const content = document.getElementById('content')

export default function changePage(that) {
  let selectedPage = that.target.dataset.page
  let currentPage = content.firstChild.dataset.page
  let page = content.firstChild
  if (currentPage === selectedPage) return
  clearPage(page)
  appendPage(selectedPage)
}

function clearPage(page) {
  content.removeChild(page)
}

function appendPage(page) {
  switch (page) {
    case 'home':
      content.appendChild(home())
      break
    case 'menu':
      content.appendChild(menu())
      break
    case 'contact':
      content.appendChild(contact())
      break
    default:
      content.appendChild(home())

  }
}

header.appendChild(nav())
content.appendChild(home())
