

const btns = document.querySelectorAll('.tab-btn')
const articles = document.querySelectorAll('.content')
const about = document.querySelector('.about')

//when add eventListener to parent have access to all child element
about.addEventListener('click', function(e){   
    const id = e.target.dataset.id
    console.log(id)
    if (id) {
        btns.forEach(function (btn) {
            if (btn.dataset.id === id) {
                btn.classList.add('active')
            } else {
                btn.classList.remove('active')
            }
        })
        articles.forEach(function (article) {
            if (article.id === id) {
                article.classList.add('active')
            } else {
                article.classList.remove('active')
            }
        })
    }
})
