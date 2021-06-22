/*
Write a function to check the speed of drivers. This function should have one parameter: speed.
○   If speed is less than 80, it should print “Ok”.
○	Otherwise, for every 4km/h above the speed limit (80), it should give the driver one demerit point and print the total number of demerit points. For example, if the speed is 90, it should print: “Points: 2”.
○	If the driver gets more than 12 points, the function should print: “License suspended”

*/

/* Check User Speed, get its value from user's input, and add it to the DOM*/

let displaySpeed = () => {
  const inputSpeed = Number((document.getElementById('speed').value));
  const speed = checkSpeed(inputSpeed);
  
  let speedSpan = document.getElementById("speedResult");
  speedSpan.innerHTML = speed;
}

/* Check if the driver is committing a road traffic offense, and warn him the correct way */

let checkSpeed = (speed) => {

  /* Starting Driving licence points */
  let leftPoints = 12;

  /* Error control if speed is negative or 0 */

  if (speed < 1) {
    alert("Invalid value")
    let speedSpan = document.getElementById("speedWord");
    speedSpan.innerHTML = "You can't drive that slow";
    return speed;
  } 

  else if (speed <= 80) {
    console.log("Ok");
    let speedSpan = document.getElementById("speedWord");
    speedSpan.innerHTML = "Speed is Ok";
  }  

  /* Check if the user has lost every licence points, and tell him that his Licence is suspended ! We have to avoid dangerous drivers ! */

  else if (speed >= 128) {
    console.log("Licence Suspended");
    let speedSpan = document.getElementById("speedWord");
    speedSpan.innerHTML = "No more points left ! Licence Suspended";
  }

  else if (speed > 80) {
    speed = speed - 80;
    const multiplier = Math.floor(speed / 4);

    console.log("Points : " + multiplier);
    let speedSpan = document.getElementById("speedWord");
    let speedPoints = document.getElementById("speedPoints");
    leftPoints = 12 - multiplier;

   /* Send back to the DOM licence points lost, licence points left, and a warn message */

  
    speedSpan.innerHTML = "You lost : " + ' ' + multiplier + " license point(s)";
    speedPoints.innerHTML = " | Points left : " + parseInt(leftPoints);
  }

  return speed;
}
