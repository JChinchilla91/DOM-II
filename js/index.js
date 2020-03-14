// Your code goes here
// Variables

const busImage = document.querySelectorAll('img')

const introText = document.querySelector('p')

// const imgChange = busImage.addEventListener('mouseenter', () => {
//     busImage.style.opacity = '.6';
//     busImage.style.transition = 'ease-in-out .5s'
// })

// const imgLeave = busImage.addEventListener('mouseleave', () => {
//     busImage.style.opacity = '1';
// })

busImage.forEach (element  => element.addEventListener('mouseenter', () => {
    element.style.opacity = '.6';
    element.style.transition = 'ease-in-out .5s'
}))

busImage.forEach (element => element.addEventListener('mouseleave', () => {
    element.style.opacity = '1'
}))

introText.addEventListener('click', () => {
    introText.textContent = 'This whole thing is a scam! You don\'t want to give this company your business! They can\'t even pay me a decent wage! I\'m stuck here, just like you will be. Please heed this warning! I mean, take a look at the text! It\'s just the same thing over and over!' 
})