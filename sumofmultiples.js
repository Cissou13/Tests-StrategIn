/*

Write a function that returns the sum of multiples of 3 and 5 between
0 and limit (parameter). For example, if limit is 20, it should return the sum of 3, 5, 6, 9, 10, 12, 15, 18, 20

*/

/* Get the limit number from user's input and call the sum function */

const displaySum = (limit) => {
  const inputMaximum = Number(document.getElementById('sum').value);
  multipleSum(inputMaximum);
};

/* Clear all table content */

const clearSum = () => {
  const sum = document.querySelectorAll('.sumWord');
  for (let i = 0; i < sum.length; i++) {
    sum[i].textContent = '';
  }
};

/* Sum up all numbers divisible by 3 and 5 */

const multipleSum = (limit) => {
  /* Initializing Sum, Table and table index */
  let total = 0;
  let x = 0;
  let j = [];
  for (i = 0; i < limit; i++) {
    /* Check if the number is divisible by 3 or 5, and add it to the total. Store the number into the table */
    if (i % 3 === 0 || i % 5 === 0) {
      total = total + i;
      j[x] = i;
      x++;
    }
  }

  /* Get all values, and send it to the DOM. The sum, and a table of numbers summed */

  const sumSpan = document.querySelector('.sumWord');
  const newP = document.createElement('p');
  sumSpan.appendChild(newP).innerHTML = `${total} is the sum of  ${j}`;
  console.log(i + total);
  return total;
};
