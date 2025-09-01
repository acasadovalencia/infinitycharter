'use strict'

const heroSection = document.querySelector('.Hero-wrapper')
const aboutSection = document.querySelector('.About')
const infinitySection = document.querySelector('.Infinity')
const servicesSection = document.querySelector('.Services')
const contactSection = document.querySelector('.Contact')

const navLinks = document.querySelectorAll('.Nav-a')
const heroLink = document.querySelectorAll('.Nav-a')[0]
const aboutLink = document.querySelectorAll('.Nav-a')[1]
const infinityLink = document.querySelectorAll('.Nav-a')[2]
const servicesLink = document.querySelectorAll('.Nav-a')[3]
const contactLink = document.querySelectorAll('.Nav-a')[4]

const headerNav = document.querySelector('.Header-nav')
const navBtn = document.querySelector('.Nav-btn')

navLinks.forEach(link => {
    link.addEventListener('click', (e) =>{
        e.preventDefault()

        const linkClicked = link.getAttribute('href')
        const targetSection = document.querySelector(linkClicked)

        targetSection.scrollIntoView({ behavior: 'smooth' })
        headerNav.classList.remove('isActive')
    })
})

const handleScroll = () =>{
    const heroPosition = heroSection.getBoundingClientRect()
    const aboutPosition = aboutSection.getBoundingClientRect()
    const infinityPosition = infinitySection.getBoundingClientRect()
    const servicesPosition = servicesSection.getBoundingClientRect()
    const contactPosition = contactSection.getBoundingClientRect()

    if(heroPosition.top <= 100 && heroPosition.bottom >= 100){
        heroLink.classList.add('onView')
    } else {
        heroLink.classList.remove('onView')
    }
    if(aboutPosition.top <= 100 && aboutPosition.bottom >= 100){
        aboutLink.classList.add('onView')
    } else {
        aboutLink.classList.remove('onView')
    }
     if(infinityPosition.top <= 100 && infinityPosition.bottom >= 100){
        infinityLink.classList.add('onView')
    } else {
        infinityLink.classList.remove('onView')
    }
    if(servicesPosition.top <= 100 && servicesPosition.bottom >= 100){
        servicesLink.classList.add('onView')
    } else {
        servicesLink.classList.remove('onView')
    }
    if(contactPosition.top <= 100 && contactPosition.bottom >= 100){
        contactLink.classList.add('onView')
    } else {
        contactLink.classList.remove('onView')
    }
}

const toggleMenu = ()=>{
    headerNav.classList.toggle('isActive')
}


navBtn.addEventListener('click' , toggleMenu)
window.addEventListener('scroll' , handleScroll)