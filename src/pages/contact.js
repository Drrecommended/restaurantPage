const contact = () => {
  const contact = document.createElement('div')
  contact.classList.add('contact-page')

  const phoneIcon = document.createElement('i')
  phoneIcon.classList.add('fa-solid')
  phoneIcon.classList.add('fa-phone')

  const phone = document.createElement('p')
  phone.appendChild(phoneIcon)
  phone.innerText = '702-883-9428'

  const phoneContainer = document.createElement('div')
  phoneContainer.appendChild(phoneIcon)
  phoneContainer.appendChild(phone)
  phoneContainer.classList.add('flex')

  const addressContainer = document.createElement('div')
  addressContainer.classList.add('flex')
  const adressIcon = document.createElement('i')
  adressIcon.classList.add('fa-solid')
  adressIcon.classList.add('fa-house')
  const address = document.createElement('p')
  address.innerText = '222 Someplace Blvd. Las Vegas, Nv 89118'
  addressContainer.appendChild(adressIcon)
  addressContainer.appendChild(address)

  const map = document.createElement('span')
  map.classList.add('map')

  const emailContainer = document.createElement('div')
  emailContainer.classList.add('flex')
  const emailIcon = document.createElement('i')
  emailIcon.classList.add('fa-solid')
  emailIcon.classList.add('fa-envelope')
  const email = document.createElement('p')
  email.innerText = 'yourbusiness@youremail.com'
  emailContainer.appendChild(emailIcon)
  emailContainer.appendChild(email)

  contact.appendChild(phoneContainer)
  contact.appendChild(addressContainer)
  contact.appendChild(emailContainer)
  contact.appendChild(map)

  return contact
}

export { contact }
