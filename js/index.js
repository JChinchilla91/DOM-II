// Your code goes here
// Variables

const link = document.querySelector('a')

const busImage = document.querySelectorAll('img')

const introText = document.querySelector('p')

const title = document.querySelector('h2')

const titleTwo = document.querySelector('.text-content h2')

const bttn = document.querySelectorAll('.btn')

const page = document.querySelector('body')

const adv = document.querySelector('.content-destination h2')

// Content

link.addEventListener('drag', () => {
    link.style.color = 'darkred';
})

link.addEventListener('drop', () => {
    link.style.color = 'pink';
})

busImage.forEach (element => element.addEventListener('mouseenter', () => {
    element.style.opacity = '.6';
    element.style.transition = 'ease-in-out .5s'
}))

busImage.forEach (element => element.addEventListener('mouseleave', () => {
    element.style.opacity = '1'
}))

introText.addEventListener('click', () => {
    introText.textContent = 'This whole thing is a scam! You don\'t want to give this company your business! They can\'t even pay me a decent wage! I\'m stuck here, just like you will be. Please heed this warning! I mean, take a look at the text! It\'s just the same thing over and over!' 
})

title.addEventListener('dblclick', () => {
    title.textContent = 'Unfun bus'
})

titleTwo.addEventListener('wheel', () => {
    titleTwo.textContent = 'Don\'t go!'
})



window.addEventListener('load', () => {
    alert('Page is loaded!')
})

window.addEventListener('resize', () => {
    alert('Really! I\'m Serious! Don\'t do this!')
})

bttn.forEach(element => element.addEventListener('mousemove', () => {
    element.textContent = 'Do not Sign Up!'
    element.style.background = 'black';
    element.style.color = 'red';
}))

adv.addEventListener('select', () => {
    adv.textContent = 'waddup'
})

page.addEventListener('scroll', () => {
    page.style.background = 'black';
})

console.log(titleTwo)

console.log(window)