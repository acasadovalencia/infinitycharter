'use strict'

const navLinks = document.querySelectorAll('.Nav-a')
const heroLink = document.querySelectorAll('Nav-a')[0]
const aboutLink = document.querySelectorAll('Nav-a')[1]
const infinityLink = document.querySelectorAll('Nav-a')[2]
const servicesLink = document.querySelectorAll('Nav-a')[3]
const contactLink = document.querySelectorAll('Nav-a')[4]

navLinks.forEach(link => {
    link.addEventListener('click', (e) =>{
        e.preventDefault()

        const linkClicked = link.getAttribute('href')
        const targetSection = document.querySelector(linkClicked)

        targetSection.scrollIntoView({ behavior: 'smooth' })
    })
})