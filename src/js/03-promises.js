import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const btnSubmit = document.querySelector('button');
const form = document.querySelector('form');

btnSubmit.addEventListener('click', e => {
  e.preventDefault();
  const { delay, step, amount } = form.elements;
  const delaySum = Number(delay.value) + Number(step.value);

  let count = Number(amount.value);
  for (let i = 1; i <= count; i += 1) {
    if (i === 1) {
      setTimeout(() => {
        createPromise(i, delaySum)
          .then(({ position, delay }) => {
            Notiflix.Notify.success(
              `✅ Fulfilled promise ${position} in ${delay}ms`
            );
          })
          .catch(({ position, delay }) => {
            Notiflix.Notify.failure(
              `❌ Rejected promise ${position} in ${delay}ms`
            );
          });
      }, Number(delay.value));
    } else {
      setTimeout(() => {
        createPromise(i, delaySum)
          .then(({ position, delay }) => {
            Notiflix.Notify.success(
              `✅ Fulfilled promise ${position} in ${delay}ms`
            );
          })
          .catch(({ position, delay }) => {
            Notiflix.Notify.failure(
              `❌ Rejected promise ${position} in ${delay}ms`
            );
          });
      }, Number(step.value));
    }
  }
});

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve(position, delay);
    } else {
      reject(position, delay);
    }
  });

  return promise;
}

// createPromise(position, delay)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
