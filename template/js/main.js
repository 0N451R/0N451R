document.querySelector('#ferariNext').addEventListener('click',ferariNext)
document.querySelector('#bugattiNext').addEventListener('click',bugattiNext)
document.querySelector('#rangeroverNext').addEventListener('click',rangeroverNext)

const ferari=document.querySelector('#ferari')
const bugatti=document.querySelector('#bugatti')
const rangerover=document.querySelector('#rangerover')

const ferariSpan=document.querySelector('#ferariP')
const bugattiSpan=document.querySelector('#bugattiP')
const rangeroverSpan=document.querySelector('#rangeroverP')

function ferariNext() {
    ferari.classList.toggle('hidden')
    bugatti.classList.add('hidden')
    rangerover.classList.add('hidden')
    document.querySelector('section+section').style.backgroundColor = 'rgb(2,77,136)'
    document.querySelector('section+section').style.color = 'white'
    
    ferariP.classList.toggle('hidden')
    bugattiP.classList.add('hidden')
    rangeroverP.classList.add('hidden')
}
function bugattiNext() {
    ferari.classList.add('hidden')
    bugatti.classList.toggle('hidden')
    rangerover.classList.add('hidden')
    document.querySelector('section+section').style.backgroundColor = 'rgba(0,0,0)'
    document.querySelector('section+section').style.color = 'white'
    
    ferariP.classList.add('hidden')
    bugattiP.classList.toggle('hidden')
    rangeroverP.classList.add('hidden')
}
function rangeroverNext() {
    ferari.classList.add('hidden')
    bugatti.classList.add('hidden')
    rangerover.classList.toggle('hidden')
    document.querySelector('section+section').style.backgroundColor = 'rgb(206,48,58)'
    document.querySelector('section+section').style.color = 'white'

    ferariP.classList.add('hidden')
    bugattiP.classList.add('hidden')
    rangeroverP.classList.toggle('hidden')
}













// document.getElementById('ferrariNext').onclick = partyBlue
// document.getElementById('bugattiNext').onclick = partyBlack
// document.getElementById('rangeroverNext').onclick = partyRed

/*const blue=document.querySelector('#blue')
const black=document.querySelector('#black')
const red=document.querySelector('#red')*/

// function partyBlue() {
//   document.querySelector('body').style.backgroundColor = 'rgb(173, 2, 173)'
//   document.querySelector('body').style.color = 'white'
// }
// function partyBlack() {
//   document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)'
//   document.querySelector('body').style.color = 'white'
// }
// function partyRed() {
//   document.querySelector('body').style.backgroundColor = 'rgb(255, 0, 0)'
//   document.querySelector('body').style.color = 'white'
// }
