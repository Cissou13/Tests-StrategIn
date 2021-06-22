/* 
Write a function called fozz_bezz that takes a number.
○  If the number is divisible by 3, it should return “Fozz”.
○  If it is divisible by 5, it should return “Bezz”.
○  If it is divisible by both 3 and 5, it should return “FozzBezz”.
○  Otherwise, it should return the same number.
*/

/* Manipulating DOM object, returning the result of the modulo */

let displayModulo = () => {
  const inputValue = Number((document.getElementById('modulo').value));
  const modulo = fozz_bezz(inputValue);
  let moduloSpan = document.getElementById("moduloResult");
  moduloSpan.innerHTML = modulo;
}

/* Checking first if the number is modulo 15, then 3 or 5 */
/* Returning a different word for each case, and the same value otherwise */

let fozz_bezz = (x) => {
  if (x % 15 === 0 ) {
    console.log("FozzBezz : Your number is divisible by 3 and 5");
    let moduloSpan = document.getElementById("moduloWord");
    moduloSpan.innerHTML = "FozzBezz";
    return 'Your number is divisible by 3 and by 5';

  } else if (x % 3 === 0 ) {
    console.log('Fozz : Your number is divisible by 3');
    let moduloSpan = document.getElementById("moduloWord");
    moduloSpan.innerHTML = "Fozz";
    return 'Your number is divisible by 3';;

  } else if (x % 5 === 0) {
    console.log("Bezz : Your number is divisible by 5")
    let moduloSpan = document.getElementById("moduloWord");
    moduloSpan.innerHTML = "Bezz";
    return 'Your number is divisible by 5';;

  } else if ( x === 0) {

  }
  
  else {
    console.log("Your number is neither divisible by 3 nor by 5");
    let moduloSpan = document.getElementById("moduloWord");
    moduloSpan.innerHTML = "Your number is divisible by ";
    return x;
  }
}