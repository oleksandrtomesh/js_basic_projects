const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function(){
    let hexColour = '#'
    for (let i = 0; i < 6; i++){
            const randomNumber = getRandomNumber()
            hexColour = hexColour + hex[randomNumber]
        }
        document.body.style.backgroundColor = hexColour
        color.textContent = hexColour
    }
)

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}