

/*const searchBar = document.getElementById('choose').querySelector('#searchbar .container input');
searchBar.addEventListener('keyup', function(e){
    const term=e.target.value.toLowerCase();
    const movies=list.getElementsByTagName('h3');
    Array.from(movies).forEach(function(movie){
        const title = movies.firstElementChild.textContent;
        if(title.toLowerCase().includes(term)){
            li.style.display = 'block';
        } 
        else {
            li.style.display = 'none';
        }
    })
    
})**/
/*h3.style.display='block';**/


 /* <form id="search-truck">
    <input type="text">
  </form>
    <ul class="menubar" id="menuList" style="list-style: none;"></ul>


var list = document.querySelector('#menuList');


const searchBar = document.forms['search-truck'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');
  Array.from(books).forEach(function(book){
  console.log("book: "+ book.textContent);
    const title = book.textContent.toLowerCase();
    if(title.includes(term)){ 
      book.style.display = 'block';
    }
    else { 
      book.style.display = 'none';
    } 
  })
}**/

/*var titles=document.querySelectorAll('#choose li')

Array.from(titles).forEach(function(title){
  Console.log(title)
})**/

/*var titles = document.querySelectorAll('#choose li h3');

Array.from(titles).forEach(function(title){
  console.log(title.textContent.toLowerCase());
  
})**/

/*var btns = document.querySelectorAll('#choose .movie');

Array.from(btns).forEach(function(btn){
  btn.addEventListener('click', function(e){

    const li = e.target.parentElement;
    li.parentNode.removeChild(li)
  })
})**/

/*var btns = document.querySelectorAll('#choose .movie');

Array.from(btns).forEach(function(btn){
  btn.addEventListener('click', function(e){

    const li = e.target.parentElement;
    li.style.display = 'none';
  })
})**/

/*const list = document.querySelector('#choose ul')**/

/*list.addEventListener('click', function(e){
  if(e.target.className == 'movie'){
    const li = e.target.parentElement;

    list.removeChild(li);
  }
})
 
const addform = document.forms('srch');

addform.addEventListener('submit', function(e){
  e.preventDefault();
})**/

// search
const list = document.querySelector('#choose ul')

const searchBar = document.forms['srch'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const movies=list.getElementsByTagName('li');
    Array.from(movies).forEach(function(movie){
        const title = movie.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            movie.style.display = 'block';
        } 
        else {
            movie.style.display = 'none';
        }
    })
    
})

// genre
const acts = document.querySelectorAll('#choose ul .act')
Array.from(acts).forEach(function(act){
  console.log(act)
})

const coms = document.querySelectorAll('#choose ul .com')
Array.from(coms).forEach(function(com){
  console.log(com)
})

const horrs = document.querySelectorAll('#choose ul .horr')
Array.from(horrs).forEach(function(horr){
  console.log(horr)
})

const thrills = document.querySelectorAll('#choose ul .thrill')
Array.from(thrills).forEach(function(thrill){
  console.log(thrill)
})


const genre = document.querySelector('#genre .dropdown-content')
genre.addEventListener('click', function(e){
  
  if(e.target.className == 'action'){
    Array.from(acts).forEach(function(act){
      act.style.display = 'block';
    })
    Array.from(coms).forEach(function(com){
      com.style.display = 'none';
    })
    Array.from(horrs).forEach(function(horr){
      horr.style.display = 'none';
    })
    Array.from(thrills).forEach(function(thrill){
      thrill.style.display = 'none';
    })
  }

  if(e.target.className == 'comedy'){
    Array.from(acts).forEach(function(act){
      act.style.display = 'none';
    })
    Array.from(coms).forEach(function(com){
      com.style.display = 'block';
    })
    Array.from(horrs).forEach(function(horr){
      horr.style.display = 'none';
    })
    Array.from(thrills).forEach(function(thrill){
      thrill.style.display = 'none';
    })

  }

  if(e.target.className == 'horror'){
    Array.from(acts).forEach(function(act){
      act.style.display = 'none';
    })
    Array.from(coms).forEach(function(com){
      com.style.display = 'none';
    })
    Array.from(horrs).forEach(function(horr){
      horr.style.display = 'block';
    })
    Array.from(thrills).forEach(function(thrill){
      thrill.style.display = 'none';
    })

  }

  if(e.target.className == 'thriller'){
    Array.from(acts).forEach(function(act){
      act.style.display = 'none';
    })
    Array.from(coms).forEach(function(com){
      com.style.display = 'none';
    })
    Array.from(horrs).forEach(function(horr){
      horr.style.display = 'none';
    })
    Array.from(thrills).forEach(function(thrill){
      thrill.style.display = 'block';
    })

  }

  if(e.target.className == 'all'){
    Array.from(acts).forEach(function(act){
      act.style.display = 'block';
    })
    Array.from(coms).forEach(function(com){
      com.style.display = 'block';
    })
    Array.from(horrs).forEach(function(horr){
      horr.style.display = 'block';
    })
    Array.from(thrills).forEach(function(thrill){
      thrill.style.display = 'block';
    })
  }
})

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