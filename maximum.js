/* Exercice 1 : Write a function that returns the maximum of two numbers */


// Getting dom object, and returning function result into it

let displayMaximum = () => {
  const number1 = Number(document.getElementById('firstnumber').value);
  const number2 = Number(document.getElementById('secondnumber').value);
  const result = getMaximum(number1, number2);
  let resultSpan = document.getElementById("maximumResult");
  resultSpan.innerText = result;
}

// Checking the greatest value

const getMaximum = (x, y) => x > y ? x : y;


/***********************************************************/
/***********************************************************/
/***********************************************************/

// Il est également possible de procéder de façon plus classique


// function getMaximum(x, y) {
//   if (x > y) {
//     return x;
//   } 
//   return y;
// }
