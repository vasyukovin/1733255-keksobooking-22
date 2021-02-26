const title = document.getElementById('title');
const type = document.getElementById('type');
const price = document.getElementById('price');
const timeForm = document.querySelector('.ad-form__element--time');
const timeInSelector = timeForm.elements.timein;
const timeOutSelector = timeForm.elements.timeout;
const roomNumberOptions = document.getElementById('room_number');
const capacityOptions = document.getElementById('capacity');

const validateTitle = () => {
  if (title.value.length < '30') {
    title.setCustomValidity('Заголовок должен содержать больше ' + title.getAttribute('minlength') + ' символов');
  } else {title.setCustomValidity('')}
  title.reportValidity();
}
title.addEventListener('input', validateTitle)

const setPriceValue = (priceValue) => {
  price.setAttribute('min', priceValue);
  price.setAttribute('placeholder', priceValue);
}

const setTypePrice = () => {
  let priceValue;
  switch (type.value) {
    case 'bungalow':
      priceValue = 0;
      setPriceValue(priceValue);
      break;
    case 'flat':
      priceValue = 1000;
      setPriceValue(priceValue);
      break;
    case 'house':
      priceValue = 5000;
      setPriceValue(priceValue);
      break;
    case 'palace':
      priceValue = 10000;
      setPriceValue(priceValue);
      break;
  }
}
setTypePrice();
type.addEventListener('input', () => {
  setTypePrice();
  price.reportValidity();
})
price.addEventListener('input', price.reportValidity)

timeOutSelector.value = timeInSelector.value;
timeInSelector.addEventListener('input', () => timeOutSelector.value = timeInSelector.value);
timeOutSelector.addEventListener('input', () => timeInSelector.value = timeOutSelector.value);

const getValidCapacity = () => {
  if (roomNumberOptions.value === '1' && (capacityOptions.value === '2' || capacityOptions.value === '3' || capacityOptions.value === '0')) {
    capacityOptions.setCustomValidity('В 1 комнате может разместиться только 1 гость');
  } else if (roomNumberOptions.value === '2' && (capacityOptions.value === '3' || capacityOptions.value === '0')) {
    capacityOptions.setCustomValidity('В 2 комнатах может разместиться не больше 2 гостей');
  } else if (roomNumberOptions.value === '3' && capacityOptions.value === '0') {
    capacityOptions.setCustomValidity('В 3 комнатах может разместиться не больше 3 гостей');
  } else if (roomNumberOptions.value === '100' && (capacityOptions.value === '1' || capacityOptions.value === '2' || capacityOptions.value === '3')) {
    capacityOptions.setCustomValidity('Так это отель уже!');
  } else {
    capacityOptions.setCustomValidity('');
  }
  roomNumberOptions.reportValidity();
  capacityOptions.reportValidity();
}
getValidCapacity();
roomNumberOptions.addEventListener('input', getValidCapacity);
capacityOptions.addEventListener('input', getValidCapacity);









// const adForm = document.querySelector('.ad-form');
// adForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//
//   const formData = new FormData(evt.target);
//
//   fetch(
//     'https://22.javascript.pages.academy/keksobooking',
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//       body: formData,
//     },
//   )
// })
