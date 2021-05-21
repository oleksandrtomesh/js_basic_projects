//set initial count
let count = 0

//select value
const value = document.querySelector('#value')

//select all buttons
const btns = document.querySelectorAll('.btn')

//loop throught those buttons
btns.forEach(function(btn){
    //add event listeners for all buttons
    btn.addEventListener('click', function(e){
        //use event object, and get classes of every button what was click
        const styles = e.currentTarget.classList

        //chose button depends on class
        if(styles.contains('decrease')){
            count -= 1;
        } else if (styles.contains('increase')){
            count += 1
        } else {
            count = 0
        }

        //depends on value change color of value span
        if (count > 0 ){
            value.style.color = 'green'
        } 
        if (count < 0) {
            value.style.color = 'red'
        }
        if (count === 0) {
            value.style.color = '#222'
        }
        value.textContent = count
    })
})
