import flatpickr from 'flatpickr';

import { Report } from 'notiflix/build/notiflix-report-aio';

import 'flatpickr/dist/flatpickr.min.css';

const inputCalendar = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');

const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

const counters = { days, hours, minutes, seconds };

let settedDate = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    settedDate = selectedDates[0].getTime();
  },
};
flatpickr(inputCalendar, options);

startBtn.addEventListener('click', timerOn);

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

function addLeadingZero(value) {
  value = String(value).padStart(2, '0');
  return value;
}

function timerOn() {
  const date = new Date();
  let value = settedDate - date.getTime() + 1000;

  if (value <= 0) {
    Report.failure(
      'Not correct a date',
      'Please choose a date in the future',
      'Okay'
    );
    return;
  }

  const timerId = setInterval(() => {
    value -= 1000;
    if (value <= 0) {
      clearInterval(timerId);
    } else {
      let dataDate = convertMs(value);
      const keys = Object.keys(dataDate);

      for (const key of keys) {
        counters[key].textContent = addLeadingZero(dataDate[key]);
      }
    }
  }, 1000);

  inputCalendar.setAttribute('disabled', 'disabled');
  startBtn.setAttribute('disabled', 'disabled');
}
