
//get the elements toggle button and links

const toggleBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')

//add event listeners to button 

//toggle the class '.show-sidebar' in aside tag
toggleBtn.addEventListener('click', function(){
    sidebar.classList.toggle('show-sidebar')
})

//remove class '.show-sidebar' from aside tag
closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar')
})

