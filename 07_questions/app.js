//using selectors inside the element

const questions = document.querySelectorAll('.question')

questions.forEach(function(question){
    const btn = question.querySelector('.question-btn')
    btn.addEventListener('click', function(e){
        //remove class 'show-text from other questions
        questions.forEach(function(question){
            question.classList.remove('show-text')
        })
        question.classList.toggle('show-text')
    })
})




// traversing the dom

// const questionBtns = document.querySelectorAll('.question-btn')


// questionBtns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         //get access to the parent element and toggle the class show-text
//         e.currentTarget.parentElement.parentElement.classList.toggle('show-text')
//     })
// })