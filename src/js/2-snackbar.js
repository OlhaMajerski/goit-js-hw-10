// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import closeIcon from '../img/alert-icon.svg';
import okIcon from '../img/ok.svg';

const inputForm = document.querySelector('.form');
inputForm.addEventListener('submit', promiseGenerator);

function promiseGenerator(e) {
  e.preventDefault();

  const delayInput = e.target.delay;
  const delay = delayInput.value;
  //const delay = e.target.delay.value;
  const status = e.target.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
  promise
    .then(delay => {
      iziToast.success({
        message: `Fulfilled promise in ${delay}ms`,
        messageSize: '16',
        messageColor: '#fff',
        backgroundColor: '#59a10d',
        position: 'topLeft',
        close: true,
        closeOnEscape: true,
        closeOnClick: true,
        progressBar: true,
        progressBarColor: '#326101',
        iconColor: '#fff',
        iconUrl: okIcon,
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `Rejected promise in ${delay}ms`,
        messageSize: '16',
        messageColor: '#fff',
        backgroundColor: '#ef4040',
        position: 'topLeft',
        close: true,
        closeOnEscape: true,
        closeOnClick: true,
        progressBar: true,
        progressBarColor: '#ffbebe',
        iconUrl: closeIcon,
        iconColor: '#fff',
      });
    });
  delayInput.value = '';
  console.log(promise);
}

/* function createPromise(value, delay, status) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) resolve(value);
      else reject(value);
    }, delay);
  });
  return promise;
}
 */
