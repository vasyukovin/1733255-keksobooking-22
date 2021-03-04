const ALERT_SHOW_TIME = 5000;
const main = document.querySelector('main');
const body = document.querySelector('body');

const showGetDataError = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.borderRadius = '0 0 5rem 0';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.padding = '1rem 2rem';
  alertContainer.style.padding = '1rem 2rem';
  alertContainer.style.fontSize = '1rem';
  alertContainer.style.color = 'white';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#EF1616';
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

const openModal = (selector) => {
  const modal = main.querySelector(`.${selector}`);
  body.setAttribute('scroll', 'no');
  body.style.overflow = 'hidden';

  if (!modal) {
    const alertContainer = document.getElementById(selector).content.querySelector('div').cloneNode(true);
    main.appendChild(alertContainer);
    alertContainer.classList.add('modal')
  } else {
    modal.classList.toggle('hidden');
  }

  document.addEventListener('click', closeModalHandler);
  document.addEventListener('keydown', closeModalHandler);
}

const closeModalHandler = (evt) => {
  const button = main.querySelector('.error__button');
  if ((evt.target.tagName === 'DIV') || (evt.code === 'Escape' && body.hasAttribute('scroll'))) {
    closeModal();
  } else if (button) {
    button.addEventListener('click', closeModal);
  }
}

const closeModal = () => {
  body.removeAttribute('scroll');
  body.style.overflow = '';
  body.querySelector('.modal').classList.toggle('hidden');

  document.removeEventListener('click', closeModalHandler);
  document.removeEventListener('keydown', closeModalHandler);
}

const showPostDataSuccess = () => {
  openModal('success');
}

const showPostDataError = () => {
  openModal('error');
}

export {showGetDataError, showPostDataError, showPostDataSuccess};

