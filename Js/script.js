const navBtn = document.querySelector('.nav-active')
const closeBtn = document.querySelector('.close-active')
const  headerNavList = document.querySelector('.nav-lists')
const  languageMobile = document.querySelector('.language-mobile')
navBtn.addEventListener('click', function(){
    navBtn.style.display = "none"
    closeBtn.style.display = 'block'
    headerNavList.style.display = 'block'
})

closeBtn.addEventListener('click', function(){
    navBtn.style.display = "block"
    closeBtn.style.display = 'none'
    headerNavList.style.display = 'none'
})

languageMobile.addEventListener('click', ()=>{
    const headerSubMenu = document.querySelector('.mobile-subcategories') 
    headerSubMenu.classList.toggle('headerSubMenu')

})

let slides = document.querySelectorAll('.carousel-box')
let slide = document.querySelector('.carousel-inner')
const firstClone = slides[0].cloneNode(true)
const lastClone = slides[slides.length - 1].cloneNode(true)
slide.append(firstClone)
slide.append(lastClone)
let index = 1

let slideWidth = slides[index].clientWidth
slide.style.transform = `translateX(${-slideWidth * index}px)`

function carousel(){
    
    setInterval(()=>{
        index++
        slide.style.transform = `translateX(${-slideWidth * index}px)`
        slide.style.transition = `.7s`
        
    }, 1000)
}


slide.addEventListener('transitionend', ()=>{
    slides = document.querySelectorAll('.carousel-box')
    if(slides[index].id === firstClone.id){
        slide.style.transition = 'none'
        index = 1
        slide.style.transform = `translateX(${-slideWidth * index}px)`
    }
})

carousel()