/*
7.  Write a function that prints all the prime numbers between 0 and limit
where limit is a parameter.
*/

const displayPrime = () => {
  const inputPrime = Number(document.getElementById('prime').value);
  showPrimes(inputPrime);
  let primeResult = document.getElementById('primeResult');
  primeResult.innerHTML = inputPrime;
};

const clearPrime = () => {
  const primeAll = document.querySelectorAll('.primeWord');
  for (let i = 0; i < primeAll.length; i++) {
    primeAll[i].textContent = '';
  }
};

let showPrimes = (x) => {
  for (let i = 0; i <= x; i++) {
    let rest = 0;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        rest = 1;
        break;
      }
    }
    if (i > 1 && rest === 0) {
      const primeSpan = document.querySelector('.primeWord');
      const newP = document.createElement('p');
      primeSpan.appendChild(newP).innerHTML = `${i}`;
      console.log(i);
    }
  }
};
