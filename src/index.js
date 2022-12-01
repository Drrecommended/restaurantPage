import './style.css'
import { nav } from './navbar/nav'
import { home } from './pages/home'
import { menu } from './pages/menu'
import { contact } from './pages/contact'

const header = document.getElementById('header')
const content = document.getElementById('content')


export default function changePage(that) {
  console.log(that, 'man')
}




header.appendChild(nav())
content.appendChild(home())
