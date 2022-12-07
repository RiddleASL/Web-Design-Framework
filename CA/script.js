console.log("test");

const icon1 = document.getElementById('icon1')
const icon2 = document.getElementById('icon2')

icon2.style.display = 'none'

icon1.addEventListener('mouseenter', (event)=>{
    event.target.style.display = 'none'
    icon2.style.display = 'block'
})

icon2.addEventListener('mouseout', (event)=>{
    event.target.style.display = 'none'
    icon1.style.display = 'block'
})