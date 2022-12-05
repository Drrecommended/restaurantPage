import './style.css'
import { nav } from './navbar/nav'
import { navHeader } from './navbar/navHeader'
import { home } from './pages/home'
import { menu } from './pages/menu'
import { contact } from './pages/contact'

const header = document.getElementById('header')
const content = document.getElementById('content')
const footer = document.getElementById('footer')

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

const foot = () => {
  const footerContainer = document.createElement('div')
  footerContainer.classList.add('foot')
  const link = document.createElement('a')
  link.title = 'a link to my github'
  link.href = 'https://github.com/Drrecommended'
  
  
  const credits = document.createElement('p')

  const gitHubIcon = document.createElement('i')
  gitHubIcon.classList.add('fa-brands')
  gitHubIcon.classList.add('fa-github')
  credits.innerText = 'Coded by Tyler French'
  credits.style = "margin-left: 5px;"
  link.appendChild(gitHubIcon)
  link.appendChild(credits)
  footerContainer.appendChild(link)

  return footerContainer
}

header.appendChild(nav())
content.appendChild(home())
footer.appendChild(foot())
