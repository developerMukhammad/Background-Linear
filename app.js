const rang1 = document.querySelector('.rang1')
const rang2 = document.querySelector('.rang2')
const rang3 = document.querySelector('.rang3')
const rang4 = document.querySelector('.rang4')
const rang5 = document.querySelector('.rang5')
const rang6 = document.querySelector('.rang6')
const rang7 = document.querySelector('.rang7')
const music = document.querySelector('audio')


const body = document.querySelector('body')
const btn = document.querySelector('.btn')

let colors = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]

btn.addEventListener('click', ()=>{
    music.play()
    function randomColor(){

        let color = '#'
        for(let i = 0; i<6; i++){
            let random = Math.floor(Math.random()*colors.length)
            color += colors[random]
        }
        return color 
    }
    let color1 = randomColor()
    let color2 = randomColor()
    let color3 = randomColor()
    let color4 = randomColor()
    let color5 = randomColor()
    let color6 = randomColor()
    let color7 = randomColor()

    body.style.background = `radial-gradient(circle, ${color1}, ${color2}, ${color3}, ${color4}, ${color5}, ${color6}, ${color7})`

    rang1.textContent = color1
    rang2.textContent = color2    
    rang3.textContent = color3
    rang4.textContent = color4
    rang5.textContent = color5
    rang6.textContent = color6
    rang7.textContent = color7


    

    randomColor()
})