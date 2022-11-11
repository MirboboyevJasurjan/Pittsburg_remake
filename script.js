const carouselBox = document.getElementById('cardCarousel');
const cards = [...document.querySelectorAll('#cardCarousel')]
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const context = document.getElementById("context")
// Images
// const "image" = require("./assets/apple-man.png");

document.innerHTML = "Hello world"
document.innerHTML = "image"
console.log(200)
persons = [
{
  name: "Alan Jons", 
  text: "Lorem Ipsum",  
  img: "image"
},
{
  name: "John Doe", 
  text: "Lorem Ipsum",    
  img: "image"
},
{
  name: "Spider Man", 
  text: "Spider-Man",  
  img: "image"
},
{
  name: "Iron Man", 
  text:"Batman",  
  img: "image"
},
]


persons.map((e,i) => {
    nextBtn.addEventListener("click", ()=>{
      if(i != persons.length){
        i+=1
      }else{
        i = 0
      }
    })
      prevBtn.addEventListener("click", ()=>{
        if(i != 0 ){
          i-=1
        }else{
          i = persons.length
        }
      })
  let div = document.createElement('div')        
  div.classList.add('context')
  div.innerHTML = `
      <div class="per75">
      <div class="contextText">
      <h3 class="contextName">${e.name}</h3>
      <p>${e.text}</p>
      </div>
        <img class="contextImage" src="${e.img}" alt="Present Person">
        </div>
        <div class="per25">
        <img class="contextNP" src=${e.img} alt="Next person">
        <div class="contextBtns">
          <button class="contextBtn contextBtnPrev" id="contextPrev"> <- Предыдущий </button>
          <button class="contextBtn contextBtnNext" id="contextNext"> Next-> </button>
        </div>
      </div>
  `;
        context.appendChild(div)
        console.log(persons)
  }  )

  console.log(200)



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








// cards.forEach((card, i) => {
//   const cardProp = card.getBoundingClientRect();
//   const cardWidth = cardProp.width

//   nextBtn.addEventListener('click', ()=>{
//    card.scrollLeft += cardWidth;
//   })
//   prevBtn.addEventListener('click', ()=>{
//     card.scrollLeft -= cardWidth;
//   })
// })
