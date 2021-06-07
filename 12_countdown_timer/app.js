const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

const tempDate = new Date();

const tempYear = tempDate.getFullYear()
const tempMonth = tempDate.getMonth()
const tempDay = tempDate.getDate()

let futureDate = new Date(tempYear,tempMonth,tempDay + 10,11,30,0)

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const mins = futureDate.getMinutes()
const day = futureDate.getDay()
const month = futureDate.getMonth()
const date = futureDate.getDate()
function format (item){
  if(item < 10){
    return '0' + item
  } else {
    return item
  }
}
giveaway.textContent = `giveaway ends on ${weekdays[day]} ${date} ${months[month]} ${year}  ${hours}:${format(mins)}am`

//future time
const futureTime = futureDate.getTime()

function getRemainingDate (){
  const today = new Date().getTime()
  const leftTime = futureTime - today
  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000
  let days = Math.floor(leftTime / oneDay)
  let hours = Math.floor((leftTime % oneDay) / oneHour)
  let minutes = Math.floor((leftTime % oneHour) / oneMinute)
  let seconds = Math.floor((leftTime % oneMinute) / 1000)
  let values =  [days,hours,minutes,seconds]
  items.forEach(function(item, index){
    item.innerHTML = format(values[index])
  })
  if( leftTime < 0){
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired">sorry this giveaway has expired</h4>`
  }
}

let countdown = setInterval(getRemainingDate, 1000)

getRemainingDate()
