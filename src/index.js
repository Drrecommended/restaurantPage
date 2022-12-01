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
  if (currentPage === selectedPage) return
  clearPage(selectedPage, currentPage)
}

function clearPage(sPage, cPage) {
  console.log(content.firstChild, 'content data set')
  let page = content.firstChild
  content.removeChild(page)
}

header.appendChild(nav())
content.appendChild(home())
