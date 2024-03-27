//A function that calculates demerits based on speed
function demeritPoints(speed) {
  const speedLimit = 70;
  const pointsKm = 5;

  // When the speed is below the spped limit it prints "OK"
  if (speed <= speedLimit) {
    console.log("Ok");
  }
  //Calculates the points when the speed is greater than the speed limit
  let points = (speed - speedLimit) / pointsKm;
  if (points > 12) {
    console.log("License suspended");
  } else if (points > 0 && points <= 12) {
    console.log(`Points: ${points}`);
  }
}
//Example
demeritPoints(10);
