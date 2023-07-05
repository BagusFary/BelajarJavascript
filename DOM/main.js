const body = document.body
const btn1 = document.querySelector('.btn1')

const text = document.createElement('h1')
text.textContent = 'Bagus Fary Ananta'

function mouseHover(){
    body.append(text)
}

function mouseOut(){
    text.style.color = 'red'
}