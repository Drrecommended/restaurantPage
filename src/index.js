import './style.css'
import { nav } from './navbar/nav'
import { home } from './pages/home'
import { menu } from './pages/menu'
import { contact } from './pages/contact'

const header = document.getElementById('header')
const content = document.getElementById('content')

export default function changePage(that) {
  let selectedPage = that.target.dataset.page
  let currentPage = content.firstChild.dataset.page
  let page = content.firstChild
  console.log(page)
  if (currentPage === selectedPage) return
  clearPage(page)
  appendPage(selectedPage)
}

function clearPage(page) {
  content.removeChild(page)
}

function appendPage(page) {
  console.log(page)
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
  }
  console.log('test')
}

header.appendChild(nav())
content.appendChild(home())
