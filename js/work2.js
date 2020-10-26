//*slideshow

/*const pics = document.querySelectorAll('#latest .slideshow');
Array.from(pics).forEach(function(pic){
  console.log(pic)
})

var i=0;
const prev = document.querySelector('#latest .prev')
prev.addEventListener('click', function(e){
    Array.from(pics).forEach(function(pic){
      pics[i].style.display = 'block';
      pics[i+1].style.display = 'none';
     
    })
    
})

const nex = document.querySelector('#latest .next')
nex.addEventListener('click', function(e){
    Array.from(pics).forEach(function(pic){
      pics[i].style.display = 'block';
      pics[i+1].style.display = 'none';
     
    })
    
})**/

/*const prev = document.querySelector('#latest .prev')
prev.addEventListener('click', function(e){
  if(e.target.className== 'prev'){
    Array.from(pics).forEach(function(pic){
      pics[0].style.display = 'none';
    })
    
  
  }

})**/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

/*function currentSlide(n) {
  showSlides(slideIndex = n);
}**/

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('slideshow');
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}