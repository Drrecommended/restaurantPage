import './style.css'
const content = document.getElementById('content')

const nav = () => {
  const links = ['home', 'menu', 'contact']

  const nav = document.createElement('nav')
  nav.classList.add('nav')
  
  const brand = document.createElement('i')
  brand.classList.add('fa-solid')
  brand.classList.add('fa-pizza-slice')

  
 

  const signIn = document.createElement('a')
  signIn.classList.add('sign-in')
  signIn.innerText = 'SIGN IN'

  const ul = document.createElement('ul')
  for (let i = 0; i < links.length; i++) {
    const li = document.createElement('li')
    li.innerText = links[i]
    li.classList.add('nav-link')
    ul.appendChild(li)
  }

  nav.appendChild(brand)
  nav.appendChild(ul)
  nav.appendChild(signIn)

  return nav
}

content.appendChild(nav())
