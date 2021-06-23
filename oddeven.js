/* 
Write a function called showNumbers that takes a parameter called limit. It should print all the numbers between 0 and limit with a label to identify the even and odd numbers. For example, if the limit is 3, it should print:
○   0 EVEN
○   1 ODD
○   2 EVEN
○   3 ODD
*/

/* function to call and show the list of odd / even numbers */

const displayNumbers = () => {
  const inputLimit = Number(document.getElementById('oddeven').value);
  showNumbers(inputLimit);
};

/* Function to clear all table content */

const clearDisplay = () => {
  const oddEven = document.querySelectorAll('.oddevenWord');
  for (let i = 0; i < oddEven.length; i++) {
    oddEven[i].textContent = '';
  }
};

/* Function to check a list of maximum number, and split them into odd/even, then print them each in a new p */

const showNumbers = (limit) => {
  for (let i = 0; i <= limit; i++) {
    /* Check if the number is even */
    if (i % 2 === 0) {
      value = ' is even';
    } else {
      value = ' is odd';
    }
    /* Add the content of each number and his type (odd /even) to the DOM */

    const oddevenSpan = document.querySelector('.oddevenWord');
    const newP = document.createElement('p');
    oddevenSpan.appendChild(newP).innerHTML = `${i} ${value}`;
    console.log(i + value);
  }
};
