console.log('Form');

'use strict';

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector('.form');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const delay = Number(formData.get('delay'));
      const state = formData.get('state');

      createPromise(delay, state)
        .then((delay) => {
          console.log(`✅ Fulfilled promise in ${delay}ms`);
          return iziToast.show({
      color: '#59a10d',
            position: 'topRight',
      title: `<svg width="15" height="13" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.75001 10C1.74979 8.55176 2.13082 7.12893 2.85482 5.87459C3.57882 4.62026 4.62026 3.57861 5.87445 2.85437C7.12865 2.13013 8.5514 1.74881 9.99969 1.74876C11.448 1.7487 12.8708 2.1299 14.125 2.85405C14.2972 2.95193 14.5011 2.97775 14.6922 2.92586C14.8833 2.87397 15.0462 2.74858 15.1452 2.57707C15.2442 2.40555 15.2714 2.20183 15.2208 2.01036C15.1702 1.81888 15.0459 1.65521 14.875 1.55505C13.0163 0.481918 10.8554 0.0520769 8.72754 0.332185C6.59964 0.612294 4.62362 1.5867 3.10594 3.10428C1.58826 4.62186 0.613733 6.59782 0.333488 8.7257C0.0532427 10.8536 0.482945 13.0145 1.55595 14.8733C2.62896 16.732 4.28531 18.1848 6.26813 19.0063C8.25094 19.8278 10.4494 19.9721 12.5226 19.4168C14.5958 18.8615 16.4278 17.6377 17.7345 15.9351C19.0413 14.2325 19.7497 12.1463 19.75 10C19.75 9.80113 19.671 9.61037 19.5303 9.46972C19.3897 9.32906 19.1989 9.25005 19 9.25005C18.8011 9.25005 18.6103 9.32906 18.4697 9.46972C18.329 9.61037 18.25 9.80113 18.25 10C18.25 12.1881 17.3808 14.2865 15.8336 15.8337C14.2865 17.3809 12.188 18.25 10 18.25C7.81198 18.25 5.71356 17.3809 4.16638 15.8337C2.61921 14.2865 1.75001 12.1881 1.75001 10Z" fill="white" />
  <path d="M21.031 3.03109C21.1008 2.96136 21.1561 2.87858 21.1938 2.78747C21.2316 2.69636 21.251 2.59871 21.251 2.50009C21.251 2.40148 21.2316 2.30383 21.1938 2.21272C21.1561 2.12161 21.1008 2.03882 21.031 1.96909C20.9613 1.89936 20.8785 1.84405 20.7874 1.80631C20.6963 1.76857 20.5986 1.74915 20.5 1.74915C20.4014 1.74915 20.3038 1.76857 20.2127 1.80631C20.1215 1.84405 20.0388 1.89936 19.969 1.96909L10 11.9396L6.03103 7.96909C5.9613 7.89936 5.87852 7.84405 5.78741 7.80631C5.6963 7.76857 5.59865 7.74915 5.50003 7.74915C5.40142 7.74915 5.30377 7.76857 5.21266 7.80631C5.12155 7.84405 5.03876 7.89936 4.96903 7.96909C4.8993 8.03882 4.84399 8.12161 4.80625 8.21272C4.76851 8.30383 4.74908 8.40148 4.74908 8.50009C4.74908 8.59871 4.76851 8.69636 4.80625 8.78747C4.84399 8.87858 4.8993 8.96136 4.96903 9.03109L9.46903 13.5311C9.5387 13.6009 9.62146 13.6564 9.71258 13.6942C9.8037 13.732 9.90138 13.7514 10 13.7514C10.0987 13.7514 10.1964 13.732 10.2875 13.6942C10.3786 13.6564 10.4614 13.6009 10.531 13.5311L21.031 3.03109Z" fill="white" />
</svg> OK`,
            titleColor: '#fff',
      messageColor: '#fff',
      message: `Fulfilled promise in ${delay}ms`
});
        })
        .catch((delay) => {
          console.log(`❌ Rejected promise in ${delay}ms`);
          return iziToast.show({
      color: '#EF4040',
            position: 'topRight',
            titleColor: '#fff',
      messageColor: '#fff',
      message: `❌ Rejected promise in ${delay}ms`
});
        });
    });

    function createPromise(delay, state) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (state === 'fulfilled') {
            resolve(delay);
          } else {
            reject(delay);
          }
        }, delay);
      });
    }