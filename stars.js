/****************************************************************

6.  Write a function called show_stars(rows). If rows are 5, it should print the following:
○   *
○   **
○   ***
○   ****
○   *****

*****************************************************************/

/* Function to get the number of maximum occurences to display */

const displayStars = () => {
  const inputValue = Number(document.getElementById('stars').value);
  show_stars(inputValue);
};

/* Function to clear the stars */

const clearStars = () => {
  const stars = document.querySelectorAll('.starsWord');
  for (let i = 0; i < stars.length; i++) {
    stars[i].textContent = '';
  }
};

/* Function to show a number given of times a Star in a vertical table shape*/

const show_stars = (rows) => {
  /* First loop until the number of occurences isn't reached */

  for (let i = rows; i >= 1; i--) {
    let stars = '';

    /* Second Loop to add a Star into ones already stored, according to the loop breakpoint */

    for (let x = i; x <= rows; x++) {
      stars += ' ⭐️ ';
    }

    /* Add the content of the Star table to the DOM */

    const oddevenSpan = document.querySelector('.starsWord');
    const newP = document.createElement('p');
    oddevenSpan.appendChild(newP).innerHTML = `${stars}`;
    console.log(stars);
  }
};
