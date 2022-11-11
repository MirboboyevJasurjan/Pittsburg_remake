const carouselBox = document.getElementById('cardCarousel');
const cards = [...document.querySelectorAll('#cardCarousel')]
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const context = document.getElementById("context")
// Images
import image from "./assets/apple-man.png"


cards.forEach((card, i) => {
  const cardProp = card.getBoundingClientRect();
  const cardWidth = cardProp.width

  nextBtn.addEventListener('click', ()=>{
   card.scrollLeft += cardWidth;
  })
  prevBtn.addEventListener('click', ()=>{
    card.scrollLeft -= cardWidth;
  })
})

persons = [
  ["Alan Jons", "Lorem Ipsum", image],
  ["John Doe", "Lorem Ipsum", image],
  ["Spider Man", "Spider-Man", image],
  ["Iron Man", "Batman", image],
]

const changeContainers = (arr) => {
  arr.map((e,i) => {
    h3 = document.createElement('h3')
    p = document.createElement('p')
    div = document.createElement('div')
    img = document.createElement('img')

    div.appendChild(h3)
    div.appendChild(p)
    div.appendChild(img)


  }  )
}

changeContainers(persons)


//     // write data to  pool
//     paragraph.innerHTML = `<span class="infoNum">${num}</span> <span class="infoName"> ${e.name} </span> <span class="infoSpeed">${e.speed}</span>`;
//     pool.appendChild(paragraph);
    
// // Create racer
//     let taxi = document.createElement('div');
//     taxi.classList.add('taxi');
//     let span = document.createElement('span');
//     let b = document.createElement('b');
//     let italic = document.createElement('i');
//     span.appendChild(b);
//     span.appendChild(italic);
//     taxi.appendChild(span);
//     road.appendChild(taxi);