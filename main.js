const slider = document.querySelector('.slideshow') ;
const arrLeft = document.querySelector('.arrLeft')
const arrRight = document.querySelector('.arrRight')
const heading = document.querySelector('.caption h3')
const desc = document.querySelector('.caption p')
const images = [
  "beach.jpg" , "kafari-canyon-4.jpg" , "flower-purple-lical-blosso.jpg" 
]

const headings = [
  'عنوان تصویر' , 'عنوان تصویر' , 'عنوان تصویر'
]

const descs = [
  'متن تصویر مورد نظر' , 'متن تصویر مورد نظر' , 'متن تصویر مورد نظر'
]

let id = 0
function slide(id) {
  slider.style.backgroundImage = `url(assets/images/${images[id]})`
  heading.innerHTML = headings[id]
  desc.innerHTML = descs[id]


  slider.classList.add('image-fade')

  setTimeout(()=>{
    slider.classList.remove('image-fade')
  } , 550)

 
}
arrLeft.addEventListener('click' , ()=>{
  id-- ;
  if(id<0){
    id=images.length-1
  }
  slide(id)
})

arrRight.addEventListener('click' , ()=>{
  id++ ;
  if(id>images.length-1){
    id=0
  }
  slide(id)
})










