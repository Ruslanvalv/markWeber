//====  Range
let sliderSquare = document.getElementById('sliderSquare');
let sliderPrice = document.getElementById('sliderPrice');

let minSquare = document.querySelector('.minSquare');
let maxSquare = document.querySelector('.maxSquare');

let minPrice = document.querySelector('.minPrice');
let maxPrice = document.querySelector('.maxPrice');

noUiSlider.create(sliderSquare, {
  start: [20, 80],
  connect: true,
  step: 1,
  range: {
    min: 0,
    max: 200,
  },
  format: wNumb({
    decimals: 0,
    suffix: ' м²',
  }),
});

noUiSlider.create(sliderPrice, {
  start: [1.5, 17.5],
  connect: true,
  range: {
    min: 0,
    max: 25,
  },
  step: 0.5,
  format: wNumb({
    decimals: 1,
    mark: '.',
  }),
});

sliderSquare.noUiSlider.on('update', () => {
  let square = sliderSquare.noUiSlider.get();
  minSquare.value = square[0];
  maxSquare.value = square[1];
});

sliderPrice.noUiSlider.on('update', () => {
  let square = sliderPrice.noUiSlider.get();
  minPrice.value = square[0];
  maxPrice.value = square[1];
});

function changeHandler() {
  if (this.classList.contains('square'))
    sliderSquare.noUiSlider.set(
      minSquare.value.replace(' м²', ''),
      maxSquare.value.replace(' м²', ''),
    );
  else sliderPrice.noUiSlider.set(minPrice.value, maxPrice.value);
}

minSquare.addEventListener('change', changeHandler);
maxSquare.addEventListener('change', changeHandler);
minPrice.addEventListener('change', changeHandler);
maxPrice.addEventListener('change', changeHandler);
//====== Переключение
const bgBtns = document.querySelector('.bgBtns');
const dog = document.querySelector('.dog-video');
const flower = document.querySelector('.flower-video');
const contentTitle1 = document.querySelector('.content__right__title.first');
const contentTitle2 = document.querySelector('.content__right__title.second');
const titles = document.querySelectorAll('.content__right__title');

const toggleBg = () => {
  for (let elem of titles) {
    elem.classList.toggle('active');
  }

  if (flower.style.transform != 'translateX(0%)') {
    flower.style.transform = 'translateX(0%)';
  } else {
    flower.style.transform = 'translateX(100%)';
  }
};
for (let elem of bgBtns.children) {
  elem.onclick = toggleBg;
}
setInterval(toggleBg, 15000);

//============= Модалка
let houses = document.querySelectorAll('.houses__item');
let info = document.querySelector('.content__middle__houseView');
let bg = document.getElementById('video-bg');
for (let elem of houses) {
  elem.onmouseover = () => {
    info.classList.toggle('active');
    bg.style.opacity = '0.3';
  };
  elem.onmouseout = () => {
    info.classList.toggle('active');
    bg.style.opacity = '0.7';
  };
}

//======Селект

let selectItem = document.querySelectorAll('.select__item');
let selectHeader = document.querySelector('.select__header');
let currentText = document.querySelector('.select__current');
let select = document.querySelector('.select');
selectHeader.addEventListener('click', selectToggle);
for (let item of selectItem) {
  item.addEventListener('click', selectChoose);
}
function selectToggle() {
  this.parentElement.classList.toggle('is-active');
}
function selectChoose() {
  let text = this.innerText;

  let currentText = select.querySelector('.select__current');
  currentText.innerText = text;
  select.classList.remove('is-active');
}

//========= Форма
const form = document.querySelector('.filter');
const roomsInputs = document.querySelectorAll('input[name="room"]');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const rooms = [];
  for (let elem of roomsInputs) {
    if (elem.checked) rooms.push(elem.defaultValue);
  }

  const data = {
    rooms: rooms,
    square: [minSquare.value.replace(' м²', ''), maxSquare.value.replace(' м²', '')],
    price: [minPrice.value, maxPrice.value],
    complex: currentText.innerText,
  };
  console.log(data);
});
