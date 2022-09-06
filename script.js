const carouselBox = document.getElementById('cardCarousel');
const cards = [...document.querySelectorAll('#cardCarousel')]
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

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