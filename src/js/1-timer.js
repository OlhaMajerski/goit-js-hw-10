import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import iconClose from '../img/alert-icon.svg';

const timeInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

startBtn.disabled = true;

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      iziToast.show({
        title: 'Error',
        message: 'Please choose a date in the future',
        titleColor: '#ffffff',
        titleSize: '16',
        messageColor: '#ffffff',
        class: 'resolved-promise',
        backgroundColor: '#b51b1b',

        iconUrl: iconClose,
        position: 'topRight',
        theme: 'dark',
      });
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
      userSelectedDate = selectedDates[0];
    }
  },
};

flatpickr(timeInput, options);

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  timeInput.disabled = true;

  setTimeout(() => {
    clearInterval(intervalId);
    timeInput.disabled = false;
  }, userSelectedDate - Date.now());

  const intervalId = setInterval(() => {
    const currentTime = Date.now();
    const diff = userSelectedDate - currentTime;
    const objTime = convertMs(diff);

    function convertMs(ms) {
      // Number of milliseconds per unit of time
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      // Remaining days
      const days = Math.floor(ms / day);
      // Remaining hours
      const hours = Math.floor((ms % day) / hour);
      // Remaining minutes
      const minutes = Math.floor(((ms % day) % hour) / minute);
      // Remaining seconds
      const seconds = Math.floor((((ms % day) % hour) % minute) / second);

      return { days, hours, minutes, seconds };
    }

    days.textContent = objTime.days.toString().padStart(2, '0');
    hours.textContent = objTime.hours.toString().padStart(2, '0');
    minutes.textContent = objTime.minutes.toString().padStart(2, '0');
    seconds.textContent = objTime.seconds.toString().padStart(2, '0');
  }, 1000);
});
