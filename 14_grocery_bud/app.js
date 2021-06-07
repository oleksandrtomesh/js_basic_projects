// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')
const grocery = document.getElementById('grocery')
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

// edit option
let editElement
let editFlag = false
let editID = ''
// ****** EVENT LISTENERS **********

//submit form
form.addEventListener('submit', addItem)
//clear items
clearBtn.addEventListener('click', clearItems)
//load items from local storage
window.addEventListener('DOMContentLoaded', setUpItems)
// ****** FUNCTIONS **********
function addItem(e) {
    e.preventDefault()
    const value = grocery.value
    //unique id (only for small projects)
    const id = new Date().getTime().toString()
    if (value && !editFlag) {
        //create new item in product list
        createItem(id, value)
        //show alert
        displayAlert('item added to the list', 'success')
        //show container
        container.classList.add('show-container')
        //add to local storage
        addToLocalStorage(id, value)
        //set back to default
        setBackToDefault()
    } else if (value && editFlag) {
        editElement.innerHTML = value
        displayAlert('value change', 'success')
        //edit local storage
        editLocalStorage(editID, value)
        setBackToDefault()
    } else {
        displayAlert('please enter value', 'danger')
    }
}
//display alert
function displayAlert(text, action) {
    alert.textContent = text
    alert.classList.add(`alert-${action}`)
    //remove alert
    setTimeout(function () {
        alert.textContent = ""
        alert.classList.remove(`alert-${action}`)
    }, 2000)
}
//clear items
function clearItems (){
    //get all items from the list
    const items = document.querySelectorAll('.grocery-item')
    if(items.length > 0){
        //remove items from parent node
        items.forEach(function(item){
            list.removeChild(item)
        })
    }
    //hide container
    container.classList.remove('show-container')
    //display alert that clearing success
    displayAlert('list cleared', 'success')
    setBackToDefault()
    //remove all items from local storage
    localStorage.removeItem('list')
}
//delete function
function deleteItem(e) {
    const element = e.currentTarget.parentNode.parentNode
    list.removeChild(element)
    if (list.children.length === 0) {
        container.classList.remove('show-container')
    }
    const value = e.currentTarget.parentNode.previousElementSibling.innerHTML
    displayAlert(`item ${value} delete`, 'success')
    setBackToDefault()
    //remove from local storage
    removeFromLocalStorage(element.dataset.id)
}
//edit function
function editItem(e){
    const element = e.currentTarget.parentNode.parentNode
    //set edit item
    editElement = e.currentTarget.parentNode.previousElementSibling
    //set form value
    grocery.value = editElement.innerHTML
    editFlag = true
    editID = element.dataset.id
    submitBtn.textContent = 'Edit'
}
//set back to default
function setBackToDefault(){
    grocery.value = ''
    editFlag = false
    editID = ''
    submitBtn.textContent = 'submit'
}


// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value){
    const grocery = {id: id, value: value}
    let items = getLocalStorage()
    items.push(grocery)
    setLocalStorage(items)
    console.log(items);
}

function removeFromLocalStorage(id){
    let items = getLocalStorage()
    items = items.filter(function(item){
        return item.id !== id
        
    })
    setLocalStorage(items)
}

function editLocalStorage(id, value){
    let items = getLocalStorage()
    items = items.map(function(item){
        if(item.id === id){
            item.value = value
        }
        return item
    })
    setLocalStorage(items)
    
}

function getLocalStorage(){
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []
}
function setLocalStorage(items){
    return localStorage.setItem('list', JSON.stringify(items))
}
// ****** SETUP ITEMS **********
function setUpItems(){
    let items = getLocalStorage()
    if (items.length > 0){
        items.forEach(function(item){
            createItem(item.id, item.value)
            container.classList.add('show-container')
        })
    }
}

//add items to the list
function createItem(id, value){
    //create tag 'article
    const element = document.createElement('article')
    //add class
    element.classList.add('grocery-item')
    //add id
    const attr = document.createAttribute('data-id')
    attr.value = id
    element.setAttributeNode(attr)
    //the same as element.setAttribute('data-id', id)
    element.innerHTML = ` <p class="title">${value}</p>
    <div class="btn-container">
        <button type='button' class="edit-btn">
            <i class="fas fa-edit"></i>
        </button>
        <button type='button' class="delete-btn">
            <i class="fas fa-trash"></i>
        </button>
    </div>`
    //add event listeners for delete and edit btns
    const deleteBtn = element.querySelector('.delete-btn')
    const editBtn = element.querySelector('.edit-btn')
    deleteBtn.addEventListener('click', deleteItem)
    editBtn.addEventListener('click', editItem)
    //append child
    list.appendChild(element)
}

