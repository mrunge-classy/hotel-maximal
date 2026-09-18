const form = document.querySelector('.booking-form');
const arrival = form.querySelector('[name="arrival"]');
const departure = form.querySelector('[name="departure"]');
const message = form.querySelector('.form-message');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

const today = new Date().toISOString().split('T')[0];
arrival.min = today;
departure.min = today;

arrival.addEventListener('change', () => {
  departure.min = arrival.value;
  if (departure.value && departure.value <= arrival.value) departure.value = '';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const arrivalDate = new Date(arrival.value).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  const departureDate = new Date(departure.value).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  message.textContent = `Our house is ready to welcome you, ${arrivalDate} - ${departureDate}.`;
});

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('is-open', !isOpen);
});
