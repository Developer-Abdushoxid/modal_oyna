const data = [
  {
    src: './images/1.jpg',
  },
  {
    src: './images/2.jpg',
  },
  {
    src: './images/3.png',
  },
  {
    src: './images/4.jpg',
  },
  {
    src: './images/5.jpg',
  },
  {
    src: './images/6.jpg',
  },
  {
    src: './images/7.jpg',
  },
  {
    src: './images/8.jpg',
  }
]


const container = document.querySelector('.container')
const cardItems = document.createElement('div')
cardItems.classList.add('card_items')

const modal = document.createElement('div')
modal.classList.add('modal')
const closebtn = document.createElement('div')
closebtn.classList.add('close')


data.forEach((item, index) => {
  cardItems.innerHTML += `
    <div class="card" onclick="showModal(${index})">
      <img src="${item.src}" alt="">
    </div>
  `
  container.appendChild(cardItems)
})

function showModal(index){
  modal.innerHTML = `
  <img src="${data[index].src}" alt="">
  `
  container.appendChild(modal)
}



